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
console.log(arr.ksort()); // [1, 2, 3, 5, 8];

Array.prototype.ksort_2 = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }

  return this;
};

const arr_2 = [5, 3, 8, 1, 2];
console.log(arr_2.ksort()); // [1, 2, 3, 5, 8];