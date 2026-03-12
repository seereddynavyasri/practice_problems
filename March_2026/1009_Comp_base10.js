function binaryComplement(n){
  let temp=n;
  let res=[];
  let i=0;
  while(temp!=0){
    let bit=temp%2;
    res[i]=bit;
    temp=Math.floor(temp/2);
    i++;
  }
  // reverse the res =[0,1,0,1]
  res.reverse();
  // res = [1,0,1,0]

  for(let i=0;i<res.length;i++){
     res[i]= (res[i]===0) ? 1 : 0 ;
  }

  // res = [0 ,1,0,1]
  // convert the binary complement into integer

  let power=0;
  let out=0;
  for(let i=res.length-1;i>=0;i--){
    out += res[i]* Math.pow(2,power);
    power++;
  }
  return out;
}

let n=10;
console.log(binaryComplement(n));