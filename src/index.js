exports.min = function min (array) {
    return array && array.length != 0 ? Math.min(...array) : 0;
  }
  
  exports.max = function max (array) {
    return array && array.length != 0 ? Math.max(...array) : 0;
  }
  
  exports.avg = function avg (array) {
        if (array && array.length != 0) {
          const arraySum = array.reduce((previousValue, currentValue) => {
              return previousValue + currentValue;
          });
  
          return arraySum / array.length;
      } else {
          return 0;
      }
  }
