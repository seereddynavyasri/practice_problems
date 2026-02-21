function numberProd(arr){
   let n=arr.length;
   let prod=1;
   let result=new Array(n).fill(1);
   for(let i=0;i<n;i++){
     result[i]*=prod;
     prod*=arr[i];
   }
   prod=1;
   for(let i=n-1;i>=0;i--){
    result[i]*=prod;
    prod*=arr[i];
   }
   return result;
}

let arr=[1,2,3,4];
console.log(numberProd(arr));