exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {

      // var i = start;


    window.setTimeout(function(){



      for(var i = start; i < end; i++ ){
        console.log(i);
      }

    }, 100);

    return {
      cancel: function(){
        clearTimeout();
      }
    }
  }

};



// window.setTimeout(function(){
//
//
//
//   if(i < end){
//     i++;
//     console.log(i);
//     ;
//   }
//
// }, 100);
