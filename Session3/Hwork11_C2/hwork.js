let str= prompt("Enter sequence of number, separated by commas (,)");
let arr= str.split(",");
let res= arr.filter(item => (item%2) > 0);
alert(`${str} => ${res}`);