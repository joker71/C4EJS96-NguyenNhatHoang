let str = prompt("enter sequence number, separated by (,)");
let arr = str.split(",");
let minNum = Number.MAX_VALUE;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
        minNum = arr[i];
    }
}
alert(`The smallest number is ${minNum}`);
