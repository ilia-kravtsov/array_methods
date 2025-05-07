const array1 = [1, 2, 3, 4, 5, 6];

Array.prototype.kshift = function() {
  if (this.length === 0) return undefined;
  const firstElement = this[0]
  for(let i = 0; i < this.length; i++) {
    this[i] = this[i+1]
  }
  
  this.length = this[this.length-3]
  return firstElement
}

const firstElement = array1.kshift();

console.log(array1);
console.log(firstElement);
