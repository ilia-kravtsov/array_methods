Array.prototype.kfind = function(func) {
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      return this[i];
    }
  }
  return undefined;
}

const numbers = [1,2,3,4,5]
console.log(numbers.kfind((number) => number % 2 === 0)); // 2
