exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {

    return arr.indexOf(item);

  },

  sum: function(arr) {
    let sum = 0;
    arr.forEach(function(v){sum = sum + v;});
    return sum;
  },

  remove: function(arr, item) {
    let removeArray = [];

    arr.forEach(function(v){
      if(v != item){
        removeArray.push(v);
    }});

    return removeArray;

  },

  removeWithoutCopy: function(arr, item) {


    for(var i = 0; i < arr.length; i++){
      if( arr[i] === item){
        arr.splice(arr.indexOf(item), 1)
        i = i-1;
      }
    }

    return arr;

  },

  append: function(arr, item) {
      arr.push(item)
      return arr;
  },

  truncate: function(arr) {
    arr.pop()
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift()
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)

    return arr;

  },

  count: function(arr, item) {
    let i = 0;
    arr.forEach(function(v){
      if(v === item){
        i++;
      }
    })

    return i;

  },

  duplicates: function(arr) {

    let duplicateArray = [];
    arr.sort();

    for(var i = 0; i< arr.length -1; i++){
      if(arr[i] === arr[i++] && duplicateArray.indexOf(arr[i]) === -1){
        duplicateArray.push(arr[i]);
      }
    }
    return duplicateArray;
  },

  square: function(arr) {
    for(var i = 0; i<arr.length; i++){
      arr.splice(i, 1, Math.pow(arr[i],2));
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    let targetIndexArray = [];
    arr.forEach(function(v,index){
      if(v === target ){
        targetIndexArray.push(index);
      }
    })
    return targetIndexArray;
  }
};
