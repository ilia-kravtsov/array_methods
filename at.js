const array1 = [5, 12, 8, 130, 44];

Array.prototype.kat = function (index) {
  if (index < 0) {
    index = this.length + index
  }
  return this[index]
};

let arrayIndex = 2;
console.log(array1.kat(arrayIndex)); // 8
