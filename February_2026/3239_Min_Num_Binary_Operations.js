function min_Binary_operations(grid){
   let m=grid.length;
   let n= grid[0].length;
   let rowsFlips=0;
   for(let i=0;i<m;i++){
     let start=0,end=n-1;
     while(start<end){
        if(grid[i][start]!==grid[i][end]){
            rowsFlips++;
        }
        start++;
        end--;
     }
   }

   let colFlips=0;
   for(let j=0;j<n;j++){
    let left=0,right=m-1;
    while(left<right){
        if(grid[left][j]!==grid[right][j]){
            colFlips++;
        }
        left++;
        right--;
    }
   }
   return Math.min(rowsFlips,colFlips);
}

let arr=[[1,0,0],[0,0,0],[0,0,1]];
console.log(min_Binary_operations(arr));