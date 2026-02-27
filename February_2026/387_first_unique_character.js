function uniqueCharacter(s){
  let freq=new Map();
  for(let ch of s){
    freq.set(ch,(freq.get(ch)||0)+1);
  }

  let res=Array.from(freq.entries());
  for(let i=0;i<res.length;i++){
    if(res[i][1]<=1){
        for(let j=0;j<s.length;j++){
            if(res[i][0]===s[j]){
                return j;
                break;
            }
        }
    }
  }
  return -1;
}

let str="dddccdbba";
console.log(uniqueCharacter(str));