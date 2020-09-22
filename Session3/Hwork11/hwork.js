let str= prompt("Enter sequence of number, separated by commas (,)");
let arr= str.split(",");
let res=[];
for(let i=0; i<arr.length; i++)
{
    if(Number(arr[i])%2==1)
    {
        res.push(arr[i]);
    }
}
alert(`${str} => ${res}`);