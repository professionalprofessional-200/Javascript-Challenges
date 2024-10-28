function is_palindrome(){
    let str=prompt("Enter sentence:")
    
    str=str.toLowerCase()
    
    let reversedStr=str.split("").reverse().join("");
    
    if (str===reversedStr){
        alert("It is palindrome");
    }else{
        alert("It is not a palindrome");
    }
}

is_palindrome();
