const arr = ["vaibhav", "almanac" , "button" ,"fat", "is","aabaca"];
const countOfA = []

for(let i=0;i<arr.length;i++){
  let words = arr[i]
  let count = 0
  for(let word of words){
    if(word==="a"){
      count=count+1
    }
  }
  countOfA.push(count);
  
}
//bubble sort for sorting:- 
for(let i=0;i<countOfA.length;i++){
  for(let j=i+1;j<countOfA.length;j++){
    if(countOfA[i]<countOfA[j] || countOfA[i]===countOfA[j] && arr[i].length<arr[j].length){
      
      let temp = countOfA[i]
      countOfA[i] = countOfA[j]
      countOfA[j] = temp

      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      
    }
  }
}
console.log(arr)
