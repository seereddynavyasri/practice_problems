function findMedian(subSeq){
    subSeq.sort((a,b)=>a-b);
    return subSeq[1];
}

function maxSubsequence(arr){
    arr.sort((a,b)=>a-b);
    let total=0;
    let n=arr.length;
    let i=0,j=n-2,k=n-1;
    while(i<j && j<k){
        let subSeq=[nums[i],nums[j],nums[k]];
        let median=findMedian(subSeq);
        total+=median;
        i++;
        j -= 2;
        k -=2;
    }
    return total;
}

let nums=[2,1,3,2,1,3];
console.log(maxSubsequence(nums));