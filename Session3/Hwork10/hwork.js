let str= prompt("Enter sequence of name, separated by commas (,)");
let arr= str.split(",");
for(let i=0; i<arr.length; i++)
{
    arr[i]= "<" +arr[i]+ ">";
}
alert(`${str} => ${arr}`);