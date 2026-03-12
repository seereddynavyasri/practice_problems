function contructStr(r,mag){
  let m = r.length;
  let n = mag.length;

  let map = new Map();
  for(let i=0;i<n;i++){
   let char = mag[i];
   map.set(char,(map.get(char)||0)+1);
  }

  for(let j=0;j<m;j++){
    let ch=r[j];
    if(!map.has(ch) || map.get(ch)===0){
        return false;
    }
    map.set(ch,map.get(ch)-1);
  }
  return true;
}

let ransomNote="aa",magazine="aab";
console.log(contructStr(ransomNote,magazine));