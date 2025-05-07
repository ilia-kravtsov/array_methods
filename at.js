const array1 = [5, 12, 8, 130, 44];
let arrayIndex = 2;
Array.prototype.kat = function (index) {
  if (index < 0) {
    index = this.length + index
  }
  return this[index]
};

console.log(array1.kat(arrayIndex));
