function jumpGame(nums){
    let n=nums.length;
    let maxReached=0;
    for(let i=0;i<n;i++){
      if(i>maxReached){
        return false;
      }
      maxReached=Math.max(maxReached,i+nums[i]);
      if(maxReached>=n-1){
        return true;
      }
    }

}

let nums=[2,3,1,1,4];
console.log(jumpGame(nums));