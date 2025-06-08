#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🧪 Running Comprehensive Task Tests...\n");

// Test results tracking
const testResults = {
  passed: [],
  failed: [],
  buildErrors: [],
};

// List of all task test files
const taskTests = [
  "task-1-1-admin-route.test.tsx",
  "task-1-2-user-interface.test.tsx",
  "task-1-3-admin-dashboard.test.tsx",
  "task-2-1-image-management.test.tsx",
  "task-2-2-code-snippets.test.tsx",
  "task-2-3-master-code.test.tsx",
  "task-2-4-wizard-config.test.tsx",
  "task-3-1-database-schema.test.tsx",
  "task-3-2-authentication.test.tsx",
  "task-4-1-template-builder.test.tsx",
  "task-4-2-code-preview.test.tsx",
  "comprehensive-task-test.test.tsx",
];

// Function to run individual test
function runTest(testFile) {
  try {
    console.log(`🔍 Testing: ${testFile}`);

    const result = execSync(`npm test -- __tests__/tasks/${testFile}`, {
      encoding: "utf8",
      stdio: "pipe",
    });

    console.log(`✅ PASSED: ${testFile}`);
    testResults.passed.push(testFile);
    return true;
  } catch (error) {
    console.log(`❌ FAILED: ${testFile}`);
    console.log(`Error: ${error.message}`);
    testResults.failed.push({
      file: testFile,
      error: error.message,
    });
    return false;
  }
}

// Function to test build
function testBuild() {
  try {
    console.log("🏗️  Testing build...");

    const result = execSync("npm run build", {
      encoding: "utf8",
      stdio: "pipe",
    });

    console.log("✅ BUILD PASSED");
    return true;
  } catch (error) {
    console.log("❌ BUILD FAILED");
    console.log(`Build Error: ${error.message}`);
    testResults.buildErrors.push(error.message);
    return false;
  }
}

// Main test execution
async function runAllTests() {
  console.log("Starting comprehensive task testing...\n");

  // First test the build
  const buildPassed = testBuild();
  console.log("");

  // Run individual task tests
  for (const testFile of taskTests) {
    runTest(testFile);
    console.log("");
  }

  // Generate report
  console.log("📊 TEST RESULTS SUMMARY");
  console.log("========================");
  console.log(`✅ Passed: ${testResults.passed.length}`);
  console.log(`❌ Failed: ${testResults.failed.length}`);
  console.log(`🏗️  Build: ${buildPassed ? "PASSED" : "FAILED"}`);
  console.log("");

  if (testResults.failed.length > 0) {
    console.log("❌ FAILED TESTS:");
    testResults.failed.forEach((failure) => {
      console.log(`  - ${failure.file}: ${failure.error.split("\n")[0]}`);
    });
    console.log("");
  }

  if (testResults.buildErrors.length > 0) {
    console.log("🏗️  BUILD ERRORS:");
    testResults.buildErrors.forEach((error) => {
      console.log(`  - ${error.split("\n")[0]}`);
    });
    console.log("");
  }

  // Update task file with test results
  updateTaskFile();

  return {
    buildPassed,
    testsPassed: testResults.failed.length === 0,
    summary: testResults,
  };
}

// Function to update task file with test results
function updateTaskFile() {
  const taskFilePath = path.join(__dirname, "../client_docs/currentTasks.md");

  try {
    let taskContent = fs.readFileSync(taskFilePath, "utf8");

    // Add test results section
    const testResultsSection = `
## 🧪 TEST RESULTS (Latest Run)

**Build Status:** ${testResults.buildErrors.length === 0 ? "✅ PASSED" : "❌ FAILED"}
**Tests Passed:** ${testResults.passed.length}/${taskTests.length}
**Tests Failed:** ${testResults.failed.length}

${testResults.failed.length > 0 ? "### ❌ Failed Tests:\n" + testResults.failed.map((f) => `- ${f.file}: ${f.error.split("\n")[0]}`).join("\n") + "\n" : ""}
${testResults.buildErrors.length > 0 ? "### 🏗️ Build Errors:\n" + testResults.buildErrors.map((e) => `- ${e.split("\n")[0]}`).join("\n") + "\n" : ""}

---
`;

    // Insert test results after the summary
    const summaryIndex = taskContent.indexOf("🎉 ALL TASKS COMPLETED! 🎉");
    if (summaryIndex !== -1) {
      const insertIndex = taskContent.indexOf("\n", summaryIndex) + 1;
      taskContent =
        taskContent.slice(0, insertIndex) +
        testResultsSection +
        taskContent.slice(insertIndex);
    } else {
      taskContent += testResultsSection;
    }

    fs.writeFileSync(taskFilePath, taskContent);
    console.log("📝 Updated currentTasks.md with test results");
  } catch (error) {
    console.log("⚠️  Could not update task file:", error.message);
  }
}

// Run the tests
runAllTests().then((results) => {
  process.exit(results.buildPassed && results.testsPassed ? 0 : 1);
});
