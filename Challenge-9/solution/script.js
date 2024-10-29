function sortNumbers() {
  let input = document.getElementById("inputArray").value;
  
  // Convert the input string to an array of numbers
  let numbers = input.split(",").map(Number);
  
  // Sort the array in ascending order
  numbers.sort((a, b) => a - b);

  // Display the sorted array
  document.getElementById("result").textContent = "Sorted: " + numbers.join(", ");
}
