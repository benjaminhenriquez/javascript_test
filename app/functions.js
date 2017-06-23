exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2])
  },

  speak: function(fn, obj) {

    obj.sayIt = fn

    return obj.sayIt();


  },

  functionFunction: function(str) {
    return function(str2){
      return str + ", " + str2;
    }

  },

  makeClosures: function(arr, fn) {
        return function(fn){
        return arr.map(function(el) {
          return fn(el)
      });
    }
  },

  partial: function(fn, str1, str2) {
    function addStrings(str){
      return(fn(str1, str2, str))
    }
    return addStrings
  },

  useArguments: function() {
    let num = 0;
    for(var i = 0; i<arguments.length; i++){
      num = num + arguments[i]
    }
    return num;

  },

  callIt: function(fn) {


  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
