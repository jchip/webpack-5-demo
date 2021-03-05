const Path = require("path");
module.exports = {
  mode: "development",
  optimization: {
    runtimeChunk: "single"
  },
  context: Path.resolve("src"),
  entry: ["./get-script", "./app"]
};
