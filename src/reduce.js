Array.prototype.myReduce = function (cb, init) {
  let acc = init;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
}

const myArray = [1, 2, 3, 4, 5];
const newArray = myArray.myReduce((acc, curr) => {
  return acc + curr
}, 0);
console.log("Result Of Polyfils of Reduce :-", newArray);