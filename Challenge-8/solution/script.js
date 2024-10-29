function capitalizeWords() {
  let str = document.getElementById("inputString").value;
  
  let capitalizedStr = str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  document.getElementById("result").textContent = capitalizedStr;
}
