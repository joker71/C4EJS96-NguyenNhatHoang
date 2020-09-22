let myArr = [5, 7, 300, 90, 24, 50, 75];
function shave(arr) {
    let flag;
    let maxWeight = 0;
    // for(let i=0; i< arr.leght; i++)
    // {
    //     if(arr[i]>maxWeight)
    //     {
    //         flag=i;
    //         maxWeight=arr[i];
    //     }
    // }
    maxWeight = Math.max(...arr);
    flag = arr.indexOf(maxWeight);
    arr[flag] = 8;
    console.log(`Now, My biggest sheep has size ${maxWeight}, let shave it \n`);
    console.log("After shaving, here is my flock \n");
    console.log(...arr);
    console.log("\n");
}
function WeightGain(arr) {
    console.log("After one month, sheep in your flock grow, they have their size ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 50;
    }
    console.log(...arr);
    console.log("\n");
}

//main

console.log("Hi, my name is Nhat Hoang and here is my sheeps size: \n");
console.log(...myArr);
console.log("\n");
for (let i = 1; i < 4; i++) {
    shave(myArr);
    console.log(`MONTH ${i}`);
    WeightGain(myArr);

}
let sumWeight = 0;
//console.log(...myArr);
for (let i = 0; i < myArr.length; i++) {
    sumWeight = sumWeight + myArr[i];
}
console.log(`My flock has size in total: ${sumWeight}`);
console.log(`I will get ${sumWeight} * 2$: ${sumWeight * 2}`)