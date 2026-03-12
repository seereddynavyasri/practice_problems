// the majority element from array is the element which occurence must be greater than n/2
// n = length of the array
function majorityElement(arr){
  let n=arr.length;
  let freq= new Map();
  for(let i=0;i<n;i++){
    freq.set(arr[i],(freq.get(arr[i])|| 0) + 1);
  }
  for(const[key,value] of freq){
    if(value > n/2){
        return key;
    }
  }
}

let arr=[2,2,1,1,1,2,2];
console.log(majorityElement(arr));