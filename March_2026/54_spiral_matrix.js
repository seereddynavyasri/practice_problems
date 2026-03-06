function spiralMatrix(mat){
    let res=[];
  let topRow=0,left=0;
  let bottom=mat[0].length-1,right=mat.length-1;

  while(topRow<=bottom && left<=right){
    // left -> right
    for(let i=left;i<=right;i++){
        res.push(mat[topRow][i]);
    }
    topRow++;

    // top -> bottom (up -> down)
    for(let i=topRow;i<=bottom;i++){
        res.push(mat[i][right]);
    }
    right--;

    if(topRow<=bottom){
        for(let i=right;i>=left;i--){
          res.push(mat[bottom][i]);
       }
       bottom--;
    }
    if(left<=right){
         for(let i=bottom;i>=topRow;i--){
            res.push(mat[i][left]);
         }
         left++;
    }
  }
  return res;

}

let mat=[[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralMatrix(mat));