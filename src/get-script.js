console.log("get-script.js");

__webpack_public_path__ = "/";

const originalGet = __webpack_get_script_filename__;
__webpack_get_script_filename__ = (id) => {
  console.log("__webpack_get_script_filename__", id);
  return originalGet(id);
};
