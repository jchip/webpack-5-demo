console.log("app.js");

import("./hello").then(({ hello }) => {
  console.log("invoking hello in 1 second");
  setTimeout(hello, 1000);
});

export function loadStyles2() {
  console.log("loading styles2");
  var linkTag = document.createElement("link");
  linkTag.rel = "stylesheet";
  linkTag.type = "text/css";
  var onLinkComplete = function (event) {
    // avoid mem leaks.
    linkTag.onerror = linkTag.onload = null;
    if (event.type === "load") {
      console.log("styles2.css loaded");
    } else {
      var errorType = event && (event.type === "load" ? "missing" : event.type);
      var realHref = (event && event.target && event.target.href) || "styles2.css";
      var err = new Error("Loading CSS failed: " + realHref);
      err.code = "CSS_CHUNK_LOAD_FAILED";
      err.type = errorType;
      err.request = realHref;
      linkTag.parentNode.removeChild(linkTag);
      console.error(err);
    }
  };
  linkTag.onerror = linkTag.onload = onLinkComplete;
  linkTag.href = "styles2.css";
  // linkTag.nonce = "fYHDE2O+n1Za4lVOWtBxSg";

  document.head.appendChild(linkTag);
  return linkTag;
}

setTimeout(loadStyles2, 1000);
