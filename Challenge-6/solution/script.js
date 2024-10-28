function countChars(){
    let str=prompt("Enter a string:");
    
    let counts={};
    
    for(let char of str){
        counts[char]=(counts[char] || 0) + 1;
    }
    
    alert("Character counts: " + JSON.stringify(counts));
}

countChars();
