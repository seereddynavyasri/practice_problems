// the array contains unique values -(no duplicates)
var CombinationSum=function(arr,target){
    let result=[];
    let currArr=[];
    backtrack(arr,target,result,currArr,0);
    return result;
}

function backtrack(arr,target,res,curr,i){
    if(target===0){
        res.push([...curr]);
        return;
    }
    if(target>0 && i<arr.length){
        curr.push(arr[i]);
        backtrack(arr,target-arr[i],res,curr,i);
        curr.pop();

        backtrack(arr,target,res,curr,i+1);
    }
}

const arr=[2,3,6,7];
let target=7;
console.log(CombinationSum(arr,target));