function plusOne(nums){
    let n=nums.length;
    for(let i=n-1;i>=0;i--){
        if(nums[i]+1!==10){
            nums[i]+=1;
            return nums;
        }
        nums[i]=0;
    }

    let arr=new Array(n+1).fill(0);
    arr[0]=1;
    return arr;

}
let nums=[1,2,3];
console.log(plusOne(nums))