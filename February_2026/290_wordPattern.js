function wordPattern(p,s){
   let words=s.split(" ");
   if(p.length!==words.length){
    return false;
   }
   const charToWord=new Map();
   const wordToChar=new Map();

   for(let i=0;i<p.length;i++){
    let ch=p[i];
    let word=words[i];

    if(charToWord.has(ch)){
        if(charToWord.get(ch)!==word){
            return false;
        }
    }else{
        if(wordToChar.has(word)){
            return false;
        }
        charToWord.set(ch,word);
        wordToChar.set(word,ch);
    }
   }
   return true;
}

let p="abba";
let s="dog cat cat dog";
console.log(wordPattern(p,s));