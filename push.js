const animals = ["pigs", "goats", "sheep"];

Array.prototype.kpush = function(...args) {
  for(let i = 0; i < args.length; i++) {
    this[this.length] = args[i];
  }
  return this.length
}

Array.prototype.kpush_2 = function(...args) {
  args.forEach(arg => (this[this.length] = arg));
  return this.length;
};

const moreVegs = ["celery", "beetroot"];
const result = animals.kpush(...moreVegs);
console.log(animals); // ["pigs", "goats", "sheep", "celery", "beetroot"]
console.log(result); // 5

const kresult = animals.kpush_2('forEach');
console.log(animals); // ["pigs", "goats", "sheep", "celery", "beetroot", "forEach"]
console.log(kresult); // 6