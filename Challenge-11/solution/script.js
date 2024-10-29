function mergeArrays() {
  let array1 = document.getElementById("array1").value;
  let array2 = document.getElementById("array2").value;

  // Convert the input strings to arrays of numbers
  let arr1 = array1.split(",").map(Number);
  let arr2 = array2.split(",").map(Number);

  // Merge arrays and remove duplicates using Set
  let mergedArray = [...new Set([...arr1, ...arr2])];

  // Display the result
  document.getElementById("result").textContent = "Merged Array: " + mergedArray.join(", ");
}
