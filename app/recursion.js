exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var results = [];

    function list(data, dirName){
    var dir = dirName || "app"
    for (var key in data) {
      if( data[key] === dir){
        data.files.forEach(function(v){
          if(typeof v === "string"){
            results.push(v);
          }
          else {

            list(v, v["dir"]);
          }
        })
      }

      else{
        data["files"].forEach(function(v){
          if(typeof v != "string"){
            list(v, dir);
          }
        })
      }

    }}

    
    list(data, dirName);
    return results;
},

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
