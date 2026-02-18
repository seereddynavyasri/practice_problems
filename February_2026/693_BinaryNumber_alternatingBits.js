function BNABits(n){
    let arr=[];
    while(n!==0){
        let temp=n;
        temp=n%2;
        arr.push(temp);
        n=Math.floor(n/2);
    }
    arr.reverse();

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]===arr[i+1]){
            return false;
        }    
    }
     return true;   
}

let n=11;
console.log(BNABits(n));