// the array index is started from 1 , and we need to return the indexes of those elements
//  which summation is equals to given target 
// they given sorted array
function twoSum(arr,t){
   let n=arr.length;
   let left=0,right=n-1;
   while(left<right){
    let sum=arr[left]+arr[right];
    if(sum===t){
        return [left+1,right+1];
    }else if(sum<t){
        left++;
    }else{
        right--;
    }
   }
}

let arr=[2,7,11,15];
let target=13;
console.log(twoSum(arr,target));