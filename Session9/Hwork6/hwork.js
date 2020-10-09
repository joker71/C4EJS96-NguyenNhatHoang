function distance(x1, y1, x2, y2) {
  let l1 = Math.pow((x1 - x2), 2)
  let l2 = Math.pow((y1 - y2), 2);
  return (Math.sqrt(l1 + l2))

}
let x = distance(3, 10, 0, 6);
if (x !== 5) {
  console.log("Failed: the calculation is wrong");
} else {
  console.log("Passed, bravo");
}

