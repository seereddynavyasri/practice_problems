function binarySubstringsCount(s){
   let prevCount=0;
   let currCount=1;
   let res=0;

   for(let i=1;i<s.length;i++){
    if(s[i]===s[i-1]){
        currCount++;
    }else{
        res+=Math.min(prevCount,currCount);
        prevCount=currCount;
        currCount=1;
    }
   }
   res+=Math.min(prevCount,currCount);
   return res;
}

let s="10101"
console.log(binarySubstringsCount(s));