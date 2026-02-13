var trap=function(heights){
  let waterLevel=0;
  let n=heights.length;
  let leftMax=0;
  let rightMax=0;
  let l=0,r=n-1;
  while(l<r){
    if(heights[l]<heights[r]){
        if(heights[l]>=leftMax){
            leftMax=heights[l];
        }else{
            waterLevel+=leftMax-heights[l];
        }

        l++;
    }else{
        if(heights[r]>=rightMax){
            rightMax=heights[r];
        }else{
            waterLevel+=rightMax-heights[r];
        }
      r--;
    }
  }
  return waterLevel;
}

let heights=[0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(heights));