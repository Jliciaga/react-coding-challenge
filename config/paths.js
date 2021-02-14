const path = require("path");

module.exports = {
    // Source Files.
    src: path.resolve(__dirname, "../src"),
    // Production build file output.
    build: path.resolve(__dirname, "../dist"),
    // Public - Static files that get copied to build folder.
    public: path.resolve(__dirname, "../public"),
};
