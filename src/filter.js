Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
}

const myArray = [1, 2, 3, 4, 5];
const newArray = myArray.myFilter((num) => num % 2 == 0);
console.log("Result Of Polyfils of Filter :-", newArray);