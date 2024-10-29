function findIntersection() {
  let array1 = document.getElementById("array1").value;
  let array2 = document.getElementById("array2").value;

  // Convert the input strings to arrays of numbers
  let arr1 = array1.split(",").map(Number);
  let arr2 = array2.split(",").map(Number);

  // Find the intersection of both arrays
  let intersection = arr1.filter(num => arr2.includes(num));

  // Display the result
  document.getElementById("result").textContent = "Intersection: " + (intersection.length ? intersection.join(", ") : "No common elements");
}
