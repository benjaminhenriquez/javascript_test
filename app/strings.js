exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

    let count = 0;
  let result = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++;
      if (count < amount) {
        result += str[i];
      }
    } else {
      count = 0;
      result += str[i];
    }
  };
  return result;

  },

  wordWrap: function(str, cols) {

    var string = '',
        array = [];


    array = str.split(' ');

  for(var i = 0; i < array.length; i++) {

    if(array.indexOf(array[i]) === 0) {
        string += array[i];
    } else {
        if(array[i].length > 1) {
            string += "\n" + array[i];
        } else {
            string +=' ' + array[i];
        }
    }
  }
    return string;

  },

  reverseString: function(str) {
    let newStr = "";

    for(var i = str.length-1; i>=0; i--){
      newStr = newStr + str.charAt(i);
    }

    return newStr;

  }
};


//wordWrap: function(str, cols) {


    // let string = ""
    // for(var i = 0; i < str.length; i++){
    //   let counter = 0
    //   if(counter < 5){
    //     string = string + str.charAt(i);
    //   }
    //   else{
    //     string = string + \n
    //     counter = 0;
    //   }
    // }
    // return string;
//
// },
