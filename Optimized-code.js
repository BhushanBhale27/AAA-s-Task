const arr = ["vaibhav", "almanac", "button", "fat", "is", "aabaca"];
const countOfA = new Map();

for (let i = 0; i < arr.length; i++) {
  let words = arr[i];
  let count = 0;
  for (let word of words) {
    if (word === "a") {
      count = count + 1;
    }
  }
  countOfA.set(arr[i], count);
}

arr.sort((a, b) => {
  const aCount = countOfA.get(a);
  const bCount = countOfA.get(b);
  if (aCount === bCount) {
    return a.length - b.length;
  }
  return bCount - aCount;
});

console.log(arr);
