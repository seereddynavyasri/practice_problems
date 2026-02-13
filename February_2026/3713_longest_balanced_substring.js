var longestBalanced=function(s){
   let n=s.length;
   let maxLen=0;

   for(let i=0;i<n;i++){

    let freq=new Array(26).fill(0);
    let distinct=0;
    let maxFreq=0;

    for(let j=i;j<n;j++){
        const idx=s.charCodeAt(j)-97;
        if(freq[idx]===0){
            distinct++;
        }
        freq[idx]++;
        maxFreq=Math.max(maxFreq,freq[idx]);

        let len=j-i+1;
        if(maxFreq*distinct===len){
            maxLen=Math.max(maxLen,len);
        }
    }
   }
   return maxLen;
}

let s="abba";
console.log(longestBalanced(s));