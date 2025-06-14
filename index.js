function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I am a named function!");
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("I am anonymous!");
    };
  }
  
  // Exporting functions for the test to access
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
  };
  

  