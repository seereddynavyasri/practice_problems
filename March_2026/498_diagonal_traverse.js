function diagonalTraverse(mat){
   // diagonals= m+n-1
   let m=mat.length;
   let n=mat[0].length;
   let res=[];
   for(let d=0; d<m+n-1 ;d++){
    let temp=[];
      let r= d<n ? 0 : d-n+1;
      let c= d<n ? d : n-1;
      while(r<m && c>=0){
        temp.push(mat[r][c]);
        r++;
        c--;
      }
      if(d%2==0){
        temp.reverse();
      }

      res.push(...temp);

   }
   return res;
}

let mat=[[1,2,3],[4,5,6],[7,8,9]];
console.log(diagonalTraverse(mat));