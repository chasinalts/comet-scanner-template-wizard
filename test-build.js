#!/usr/bin/env node

const { execSync } = require("child_process");

console.log("🔍 Testing build for errors...\n");

try {
  console.log("Running TypeScript check...");
  const tscResult = execSync("npx tsc --noEmit", {
    encoding: "utf8",
    stdio: "pipe",
  });
  console.log("✅ TypeScript check passed");
} catch (error) {
  console.log("❌ TypeScript errors found:");
  console.log(error.stdout);
  console.log(error.stderr);
}

try {
  console.log("\nRunning Next.js build...");
  const buildResult = execSync("npm run build", {
    encoding: "utf8",
    stdio: "pipe",
  });
  console.log("✅ Build successful");
} catch (error) {
  console.log("❌ Build errors found:");
  console.log(error.stdout);
  console.log(error.stderr);
}

console.log("\n🏁 Build test complete");
