function checkUnique() {
  let str = document.getElementById("inputString").value;
  let charSet = new Set();
  
  for (let char of str) {
    if (charSet.has(char)) {
      document.getElementById("result").textContent = "The string does not contain unique characters.";
      document.getElementById("result").style.color = "red";
      return;
    }
    charSet.add(char);
  }
  
  document.getElementById("result").textContent = "The string contains only unique characters!";
  document.getElementById("result").style.color = "green";
}
