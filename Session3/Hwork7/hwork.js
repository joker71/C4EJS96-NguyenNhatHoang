let arr = [-9, 99, 1, 2, 4];
let n = prompt("Enter number");
let res = arr.indexOf(n);
console.log(res);
if (res < 0) {
    alert("Not found!");
}
else {
    alert(`Number index ${res}`);
}
