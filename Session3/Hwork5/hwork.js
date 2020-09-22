let str= prompt("Enter sequence number, separated by (,)");
let a= str.split(",");
let sum=0;
//console.log(a.length);
for(let i=0; i<a.length; i++){
    sum+=Number(a[i]);
}
alert(`Sum ${sum}`);