// brute force approach
function min_Operations(s){
    function binaryToDec(s){
    let res=0;
    for(let digit of s){
        res= res*2+Number(digit);
    }
    return res;
  }
  let count=0;
  let n=binaryToDec(s);
  while(n>1){
    if(n%2===0){
        n=n/2;
        count++;
    }else{
        n+=1;
        count++;
    }
  }
  return count;

}

let s="1101";
console.log(min_Operations(s));

// optimal solution

