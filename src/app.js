console.log("app.js");

import("./hello").then(({ hello }) => {
  hello();
});
