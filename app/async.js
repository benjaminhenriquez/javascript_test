exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {

    let promise = new Promise(function(resolve, reject){

    });

    promise.then(function(value){
      return value;
    }, function(){
      return false;
    })



  },

  manipulateRemoteData: function(url) {

  }
};
