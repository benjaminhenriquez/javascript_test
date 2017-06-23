exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    let array = str.split("");

    let contains = false;
    array.forEach(function(char){
      if(parseInt(char, 10)< 10 && typeof parseInt(char, 10) === 'number'){
        contains = true;
      }
    })
    return contains;
  },

  containsRepeatingLetter: function(str) {
    let containsRepeats = false;

    for(var i = 0; i< str.length - 1; i++){
      // if(parseInt(str.charAt(i), 10) < 0){
        if(str.charAt(i) === str.charAt(i+1)){
            containsRepeats = true;
            if(parseInt(str.charAt(i), 10)> 0){
              containsRepeats = false;
            }

        }
      // else if (parseInt(str.charAt(i), 10) < 10 && parseInt(str.charAt(i), 10) > -1) {
      //   containsRepeats = false;
      // }
      // }
    }
    return containsRepeats;
  },

  endsWithVowel: function(str) {
    let ends = false;
    let vowels = ["a", "e", "i", "o", "u"];
    let string  = str.toLowerCase();

    for(var i = 0; i < vowels.length; i++){
      if(string.charAt(string.length-1) === vowels[i]){
        ends = true;
      }
    }
    return ends;

  },

  captureThreeNumbers: function(str) {
    let first3Nums = "";
    let counter = 0;

    for(var i = 0; i<= str.length; i++){
      if(counter === 3){
        return first3Nums;
      }
      else if(counter < 3 && parseInt(str.charAt(i), 10) < 10){
        first3Nums = first3Nums + str.charAt(i);
        counter ++;
      }
      else{
        counter = 0;
      }
    }

    return false;



  },

  matchesPattern: function(str) {
    let matches = false
    if(str.length === 12 && str.charAt(3) === "-" && str.charAt(7) === "-"){
      for(var i = 0; i<str.length; i++){
        if((i !=3 || i!=7) && str.charAt(i) < 10){
          matches = true;
        }
        else if((i !=3 || i!=7) && str.charAt(i) < 0){
          return false;
        }
      }
    }

    return matches;
  },

  isUSD: function(str) {

    // let correctFormat = false;
    //
    // if(str.chartAt(0) === "$" && str.charAt(1) != "," && parseInt(str.charAt(str.length-1), 10)< 10 && parseInt(str.charAt(str.length-2), 10)< 10){
    //   correctFormat = true;
    //   for(var i = 1; i< str.length -2; i++){
    //
    //   }
    // }
    // else{
    //   return false;
    // }
    // return correctFormat;
  }

};
