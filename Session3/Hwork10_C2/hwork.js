let str= prompt("Enter sequence of name, separated by commas (,)");
let arr= str.split(",");
let res= arr.map(element =>"<" +element +">");
alert(`${str} => ${res}`);