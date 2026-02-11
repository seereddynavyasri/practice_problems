var distributeCookies=function(c,b){
     c.sort((a,b)=>a-b);
     b.sort((a,b)=>a-b);
    let countChild=0;
    let i=0,j=0;

    while(i<c.length && j<b.length){
        if(b[j]>=c[i]){
            countChild++;
            i++;
        }
        j++;
    }
    return countChild;
}

let children=[1,2,3];
let biscuits=[1,1];
console.log(distributeCookies(children,biscuits));