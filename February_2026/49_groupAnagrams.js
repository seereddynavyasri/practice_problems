function GroupAnagrams(strs){
    let freq=new Map();
    
   for(let word of strs){
     const key=word.split('').sort().join('');
     if(!freq.has(key)){
        freq.set(key,[]);
     }
     freq.get(key).push(word);
   }
   return Array.from(freq.values());
}

let strs=["eat","tea","tan","ate","nat","bat"];
console.log(GroupAnagrams(strs));