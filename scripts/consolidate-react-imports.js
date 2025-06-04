#!/usr/bin/env node

/**
 * Script to consolidate duplicate React imports from react-imports utility
 * Optimized for Node.js v22+ and modern React 18+ patterns
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const srcDir = join(__dirname, '..', 'src');

// Files to exclude from processing
const excludeFiles = [
  'react-imports.ts',
  'vite-env.d.ts'
];

// Function to consolidate React imports
function consolidateReactImports(content) {
  const lines = content.split('\n');
  const reactImportLines = [];
  const otherLines = [];
  
  let hasReactDefault = false;
  const namedImports = new Set();
  const typeImports = new Set();
  let reactImportPath = '';
  
  // Parse all lines and extract React imports
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Check for React imports from react-imports utility
    if (trimmedLine.includes('from ') && trimmedLine.includes('react-imports')) {
      reactImportLines.push(line);
      
      // Extract the import path
      const pathMatch = trimmedLine.match(/from ['"]([^'"]+)['"]/);
      if (pathMatch) {
        reactImportPath = pathMatch[1];
      }
      
      // Check for default React import
      if (trimmedLine.includes('import React')) {
        hasReactDefault = true;
      }
      
      // Extract named imports
      const namedMatch = trimmedLine.match(/import\s*{([^}]+)}/);
      if (namedMatch) {
        const imports = namedMatch[1].split(',').map(imp => imp.trim()).filter(Boolean);
        imports.forEach(imp => {
          if (imp.startsWith('type ')) {
            typeImports.add(imp.substring(5).trim());
          } else {
            namedImports.add(imp);
          }
        });
      }
      
      // Extract combined imports (React, { ... })
      const combinedMatch = trimmedLine.match(/import React,\s*{([^}]+)}/);
      if (combinedMatch) {
        const imports = combinedMatch[1].split(',').map(imp => imp.trim()).filter(Boolean);
        imports.forEach(imp => {
          if (imp.startsWith('type ')) {
            typeImports.add(imp.substring(5).trim());
          } else {
            namedImports.add(imp);
          }
        });
      }
      
      // Extract type-only imports
      const typeMatch = trimmedLine.match(/import type\s*{([^}]+)}/);
      if (typeMatch) {
        const imports = typeMatch[1].split(',').map(imp => imp.trim()).filter(Boolean);
        imports.forEach(imp => typeImports.add(imp));
      }
    } else {
      otherLines.push(line);
    }
  }
  
  // If no React imports found, return original content
  if (reactImportLines.length === 0) {
    return content;
  }
  
  // Build consolidated import statement
  let consolidatedImport = '';
  
  if (hasReactDefault && namedImports.size > 0) {
    // React with named imports
    const sortedNamedImports = Array.from(namedImports).sort();
    consolidatedImport = `import React, { ${sortedNamedImports.join(', ')} } from '${reactImportPath}';`;
  } else if (hasReactDefault) {
    // Only React default import
    consolidatedImport = `import React from '${reactImportPath}';`;
  } else if (namedImports.size > 0) {
    // Only named imports
    const sortedNamedImports = Array.from(namedImports).sort();
    consolidatedImport = `import { ${sortedNamedImports.join(', ')} } from '${reactImportPath}';`;
  }
  
  // Add type imports if any
  let typeImportStatement = '';
  if (typeImports.size > 0) {
    const sortedTypeImports = Array.from(typeImports).sort();
    typeImportStatement = `import type { ${sortedTypeImports.join(', ')} } from '${reactImportPath}';`;
  }
  
  // Reconstruct the file content
  const result = [];
  
  // Add consolidated imports at the beginning
  if (consolidatedImport) {
    result.push(consolidatedImport);
  }
  if (typeImportStatement) {
    result.push(typeImportStatement);
  }
  
  // Add other lines
  result.push(...otherLines);
  
  return result.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = readFileSync(filePath, 'utf8');
    const updatedContent = consolidateReactImports(content);
    
    if (updatedContent !== content) {
      writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`✅ Consolidated: ${filePath.replace(srcDir, 'src')}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = readdirSync(dirPath);
  let totalUpdated = 0;

  items.forEach(item => {
    const itemPath = join(dirPath, item);
    const stat = statSync(itemPath);

    if (stat.isDirectory()) {
      totalUpdated += processDirectory(itemPath);
    } else if (stat.isFile()) {
      const ext = extname(item);
      const shouldProcess = (ext === '.tsx' || ext === '.ts') && 
                           !excludeFiles.includes(item) &&
                           !item.endsWith('.test.ts') &&
                           !item.endsWith('.test.tsx');

      if (shouldProcess) {
        if (processFile(itemPath)) {
          totalUpdated++;
        }
      }
    }
  });

  return totalUpdated;
}

// Main execution
console.log('🔧 Consolidating duplicate React imports...');
console.log('📁 Processing directory:', srcDir);
console.log('');

const updatedCount = processDirectory(srcDir);

console.log('');
console.log(`✨ Consolidation complete! ${updatedCount} files updated.`);
console.log('🎯 React imports are now optimized for Node.js v22+ with better tree-shaking.');