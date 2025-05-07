Array.prototype.ksort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
      }
    }
  }

  return this; 
};

const arr = [5, 3, 8, 1, 2];
console.log(arr.ksort());
