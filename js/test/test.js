let arr = [
  { name: 'jenny', age: 18 },
  { name: 'tom', age: 10 },
  { name: 'mary', age: 40 }
];

let arrStr = arr.map(
  function (params) {
    return params.name;
  }
)
console.log(arrStr.join() + ",");