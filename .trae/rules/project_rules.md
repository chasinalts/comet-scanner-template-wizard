TypeScript/React Import Rules & Debugging Prompt
RULE: TypeScript/React Import Error Prevention
MANDATORY CHECKS BEFORE ANY IMPORT MODIFICATIONS:

ALWAYS CHECK VERSIONS FIRST

Before suggesting any import fixes, check package.json for React and @types/react versions
If @types/react version is older than React version, update @types/react FIRST
Never suggest import syntax changes without version verification


TSCONFIG.JSON ANALYSIS REQUIRED

Check tsconfig.json for allowSyntheticDefaultImports and esModuleInterop settings
If either is missing or false, recommend adding them BEFORE changing imports
Never ignore TypeScript configuration when debugging import errors


IMPORT SYNTAX VALIDATION

For React hooks: ALWAYS use import React, { useEffect, useState } from 'react'
NEVER suggest import { React, useEffect } from 'react' (incorrect)
For utility modules without default exports: Use import * as moduleName from './module'
For modules with default exports: Use import moduleName from './module'


ERROR PATTERN RECOGNITION

If seeing "allowSyntheticDefaultImports" error: Check if module has default export
If seeing "no exported member" error: Check @types package version first
If error persists after fixes: Investigate module system mismatch (CommonJS vs ES6)


DEBUGGING PROTOCOL

Step 1: Verify package versions compatibility
Step 2: Check TypeScript configuration
Step 3: Analyze actual module exports
Step 4: Apply appropriate import syntax
Step 5: Test and validate fix



FORBIDDEN ACTIONS:

❌ DO NOT repeatedly suggest the same import syntax without investigating why it failed
❌ DO NOT ignore TypeScript configuration files
❌ DO NOT assume default exports exist without checking
❌ DO NOT mix CommonJS and ES6 import patterns
❌ DO NOT suggest complex workarounds before trying simple version updates

REQUIRED ACTIONS:

✅ ALWAYS check package versions before import fixes
✅ ALWAYS examine tsconfig.json before suggesting configuration changes
✅ ALWAYS explain WHY a specific import syntax is correct for the situation
✅ ALWAYS provide step-by-step verification instructions
✅ ALWAYS suggest testing the fix before proceeding with additional changes