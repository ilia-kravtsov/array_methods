const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

Array.prototype.kpop = function () {
  if (this.length === 0) return
  const lastElement = this[this.length-1]
  this.length = this.length - 1
  return lastElement;
};

const last = plants.kpop()
console.log(last); // "tomato"
console.log(plants); // ["broccoli", "cauliflower", "cabbage", "kale"]


