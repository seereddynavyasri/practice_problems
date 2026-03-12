function wordBreak(str,dict){
   let s=str.length;
   let set = new Set(dict);
   let result=[];

   function dfs(i,path){
    if(i===s){
        result.push(path.join(" "));
        return;
    }
    for(let j = i+1 ;j<=s;j++){
        let word=str.slice(i,j);
        if(set.has(word)){
            path.push(word);
            dfs(j,path);
            path.pop();
        }
    }
   }
   dfs(0,[]);
   return result;
}

let str="catsanddog";
let dict=["cat","cats","and","sand","dog"];
console.log(wordBreak(str,dict));