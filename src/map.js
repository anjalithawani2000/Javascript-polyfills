Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this))
  }
  return temp;
}

const arr = [1, 2, 3, 4, 5];
const newArray = arr.myMap((num) => num * 2);
console.log(newArray)
