function reverseWords(str){
   let words=str.trim().split(/\s+/);
   let n=words.length;
   let res=[];
   for(let i=n-1;i>=0;i--){
    res.push(words[i]);
   }
   return(res.join(" "));
}

let str="the sky is blue";
console.log(reverseWords(str));