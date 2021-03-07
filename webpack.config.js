const Path = require("path");
module.exports = {
  mode: "development",
  optimization: {
    runtimeChunk: "single"
  },
  context: Path.resolve("src"),
  entry: ["./get-script", "./app"],
  devServer: {
    headers: {
      "content-security-policy":
        "script-src-elem 'strict-dynamic' 'nonce-fYHDE2O+n1Za4lVOWtBxSg'; style-src-elem 'strict-dynamic' 'nonce-fYHDE2O+n1Za4lVOWtBxSg';"
    }
  }
};
