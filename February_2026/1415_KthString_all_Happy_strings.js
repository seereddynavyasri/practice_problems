function kHappyString(n,k){
    const letters=['a','b','c'];
    const res=[];
    function generate(path){
        if(path.length===n){
            res.push(path);
            return;
        }
        for(const ch of letters){
        if(path.length>0 && path[path.length-1]===ch) continue;
        generate(path+ch);
        }
    }

    generate('');
    return k<= res.length ? res[k-1] : "";
}

let n=2,k=5;
console.log(kHappyString(n,k));