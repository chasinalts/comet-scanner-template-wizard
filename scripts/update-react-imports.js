#!/usr/bin/env node

/**
 * Script to update React import patterns to use centralized react-imports utility
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

// Patterns to match and replace
const patterns = [
  {
    // Pattern: import * as React from 'react';
    regex: /import \* as React from 'react';?/g,
    replacement: "import React from '../utils/react-imports';"
  },
  {
    // Pattern: import React, { ... } from 'react';
    regex: /import React,\s*{([^}]+)}\s*from 'react';?/g,
    replacement: (match, namedImports) => {
      const imports = namedImports.split(',').map(imp => imp.trim()).filter(Boolean);
      return `import React, { ${imports.join(', ')} } from '../utils/react-imports';`;
    }
  },
  {
    // Pattern: import React from 'react';
    regex: /^import React from 'react';?$/gm,
    replacement: "import React from '../utils/react-imports';"
  },
  {
    // Pattern: import { ... } from 'react';
    regex: /import\s*{([^}]+)}\s*from 'react';?/g,
    replacement: (match, namedImports) => {
      const imports = namedImports.split(',').map(imp => imp.trim()).filter(Boolean);
      return `import { ${imports.join(', ')} } from '../utils/react-imports';`;
    }
  }
];

// Function to calculate relative path to react-imports
function getRelativePath(filePath) {
  const relativePath = filePath.replace(srcDir, '').split('/').filter(Boolean);
  const depth = relativePath.length - 1;
  const prefix = depth > 0 ? '../'.repeat(depth) : './';
  return `${prefix}utils/react-imports`;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let hasChanges = false;

    // Calculate the correct relative path
    const relativePath = getRelativePath(filePath);

    // Apply each pattern
    patterns.forEach(pattern => {
      if (typeof pattern.replacement === 'function') {
        updatedContent = updatedContent.replace(pattern.regex, (...args) => {
          hasChanges = true;
          const result = pattern.replacement(...args);
          return result.replace('../utils/react-imports', relativePath);
        });
      } else {
        const newContent = updatedContent.replace(pattern.regex, pattern.replacement.replace('../utils/react-imports', relativePath));
        if (newContent !== updatedContent) {
          hasChanges = true;
          updatedContent = newContent;
        }
      }
    });

    if (hasChanges) {
      writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`✅ Updated: ${filePath.replace(srcDir, 'src')}`);
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
console.log('🚀 Starting React imports update for Node.js v22+ compatibility...');
console.log('📁 Processing directory:', srcDir);
console.log('');

const updatedCount = processDirectory(srcDir);

console.log('');
console.log(`✨ Update complete! ${updatedCount} files updated.`);
console.log('🎯 All React imports now use the centralized react-imports utility.');
console.log('📈 This improves tree-shaking and ensures consistent patterns for Node.js v22+.');