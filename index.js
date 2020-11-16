// FUNCTION IMPLEMENTATION
function sumItems(array) {
  let n = 0;
  array.forEach((element) => {
    if (Array.isArray(element)) {
      n += sumItems(element);
    } else {
      n += element;
    }
  });
  return n;
}

// EXPORT FILE
module.exports = sumItems;
