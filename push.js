const animals = ["pigs", "goats", "sheep"];
console.log(animals);

Array.prototype.kpush = function(...args) {
  for(let i = 0; i < args.length; i++) {
    this[this.length] = args[i];
  }
  return this.length
}

Array.prototype.krpush = function (...args) {
  args.forEach(arg => (this[this.length] = arg));
  return this.length;
};

const moreVegs = ["celery", "beetroot"];
const result = animals.kpush(...moreVegs);
console.log(animals);
console.log(result);

const kresult = animals.krpush('forEach');
console.log(animals);
console.log(kresult);