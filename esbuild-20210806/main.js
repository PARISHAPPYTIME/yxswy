(() => {
  // main.ts
  var Names;
  (function(Names2) {
    Names2[Names2["success"] = 1] = "success";
  })(Names || (Names = {}));
  var a = 1;
  console.log(a);
  function TestMyDer() {
    console.log(arguments);
  }
  function powerFunc() {
    console.log("powerFunction");
    TestMyDer();
  }
  powerFunc();
})();
