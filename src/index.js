module.exports = function reverse (n) {
  let array = ('' + n).split('');
  let result = '';

  if (array[0] == '-') {
    for (let i = 1; i < array.length; i++) {
      result = array[i] + result
    }
    return +result;
  } else {
    for (let i = 0; i < array.length; i++) {
      result = array[i] + result;
    }
    return +result;
  }

}
