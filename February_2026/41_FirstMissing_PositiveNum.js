var firstMissingPoNum=function(arr){
    let n=arr.length;
    let resSet = new Set();
    for(let a of arr){
       if(a>0){
        resSet.add(a);
       }
    }

    let i=1;
    while(true){
        if(!resSet.has(i)){
            return i;
        }
        i++;
    }
}
const arr=[7,8,9,11,12];
console.log("the first missing positive number : "+firstMissingPoNum(arr));