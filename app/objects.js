exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {

    return fn.apply(obj);

  },

  alterObjects: function(constructor, greeting) {

    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    let array = []
    for(var key in obj){
      if(obj.hasOwnProperty(key)){
      let string = ": "
      string = key + string + obj[key]
      array.push(string)
    }}
    return array;
  }
};
