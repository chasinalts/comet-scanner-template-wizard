// Jest transform stub for static assets
// This file handles imports of static assets in tests

module.exports = {
  process(src, filename) {
    // Extract the filename without path and extension
    const assetFilename = JSON.stringify(filename.split("/").pop());

    // Return a mock module that exports the filename
    if (filename.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
      return {
        code: `module.exports = ${assetFilename};`,
      };
    }

    // For CSS/SCSS files, return an empty object
    if (filename.match(/\.(css|scss|sass|less)$/)) {
      return {
        code: "module.exports = {};",
      };
    }

    // For other files, return the filename
    return {
      code: `module.exports = ${assetFilename};`,
    };
  },
}; // Jest transform stub for static assets
// This file handles imports of static assets in tests

module.exports = {
  process(src, filename) {
    // Extract the filename without path and extension
    const assetFilename = JSON.stringify(filename.split("/").pop());

    // Return a mock module that exports the filename
    if (filename.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
      return {
        code: `module.exports = ${assetFilename};`,
      };
    }

    // For CSS/SCSS files, return an empty object
    if (filename.match(/\.(css|scss|sass|less)$/)) {
      return {
        code: "module.exports = {};",
      };
    }

    // For other files, return the filename
    return {
      code: `module.exports = ${assetFilename};`,
    };
  },
};
