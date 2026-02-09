// the array contains duplicate values
// we need to sort the array 
var CombinationSum2=function(arr,target){
    arr.sort((a,b)=>a-b);
    let result=[];
    let currArr=[];
    backtrack(arr,target,result,currArr,0);
    return result;
}

function backtrack(arr,target,res,ans,idx){
    if(target===0){
        res.push([...ans]);
        return;
    }
    for(let j=idx;j<arr.length;j++ ){
        if(j>idx && arr[j]===arr[j-1]) continue;
        if(arr[j]>target) break;

        ans.push(arr[j]);
        backtrack(arr,target-arr[j],res,ans,idx+1);
        ans.pop();
    }
}

const arr=[10,1,2,7,6,1,5,];
let target=8;
console.log(CombinationSum2(arr,target));