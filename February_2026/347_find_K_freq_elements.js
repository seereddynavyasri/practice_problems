function mostFreqElements(nums,k){
   let freq= new Map();
   for(let num of nums){
     freq.set(num,(freq.get(num)|| 0)+1);
   }

   let result=Array.from(freq.entries());
   // freq.entries() -> [key,freq]
   result.sort((a,b)=>b[1]-a[1]);
   result=result.slice(0,k).map((item)=>item[0]);
   return result;
}

let arr=[1,1,1,2,2,3];
let k=2;
console.log(mostFreqElements(arr,k));