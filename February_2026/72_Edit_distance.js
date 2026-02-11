var editDistance=function(str1,str2){
   let m=str1.length;
   let n=str2.length;
   let dp=Array.from({length:m+1},()=>Array(n+1).fill(0));

   for(let i=0;i<=m;i++){
    dp[i][0]=i;
   }

   for(let j=0;j<=n;j++){
    dp[0][j]=j;
   }

   for(let i=1;i<=m;i++){
    for(let j=1;j<=n;j++){
        if(str1.charAt(i-1)===str2.charAt(j-1)){
            dp[i][j]=dp[i-1][j-1];
        }else{
            dp[i][j]=Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1])+1;
        }
    }
   }
   return dp[m][n];
}

let word1="horse";
let word2="ros";
console.log(editDistance(word1,word2));