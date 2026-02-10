 /* 
Example 2:
Input: nums = [3,2,2,5,4]
Output: 5

Explanation:
The longest balanced subarray is [3, 2, 2, 5, 4].
It has 2 distinct even numbers [2, 4] and 2 distinct odd numbers [3, 5]. 
Thus, the answer is 5.
 */

var Longest_BSA=function(arr){
    let n=arr.length;
    let maxLen=0;

    // let res=[];

    for(let i=0;i<n;i++){
        let evenSet=new Set();
        let oddSet=new Set();
        for(let j=i;j<n;j++){
            if(arr[j]%2===0){
                evenSet.add(arr[j]);
            }else{
              oddSet.add(arr[j]);
            }

            if(evenSet.size===oddSet.size){
                let len=j-i+1;
                maxLen=Math.max(len,maxLen);
            }

            //  to print the longest balanced subarray

            //   if(evenSet.size===oddSet.size){
            //     let len=j-i+1;
            //     if(len>maxLen){
            //         maxLen=len;
            //         res=arr.slice(i,j+1);
            //     }
               
            // }
        }
    }
    return maxLen;
    // return {maxLen,res};
}

const arr=[2,3,2,4];
const result=Longest_BSA(arr);
console.log("the longest subarray lenth is : "+result);
// console.log("the longest subarray lenth is : "+result.maxLen);
// console.log("the subarray is :"+result.res);