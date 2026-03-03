function maxSequence(arr){
  let n=arr.length;
  let max_XOR=0;
  for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        let XOR=arr[i]^arr[j];
        max_XOR=Math.max(XOR,max_XOR);
    }
  }
  return max_XOR;
}


let nums=[3,10,5,25,2,8];
console.log(maxSequence(nums));