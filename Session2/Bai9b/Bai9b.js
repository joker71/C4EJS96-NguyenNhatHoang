let n = Number(prompt("Enter n"));
let b = n / 2;
let countL = 0;
let countH = 0;
for (let i = 0; i < n; i++) {
   if (i < b) {
      console.log("L"); // thay vì in ra nhiều H sẽ in ra (khoanh tròn số) L
   }
   else if (i > b) {
      console.log("H");
   }
}
