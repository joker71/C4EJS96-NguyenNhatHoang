let d= document.getElementById("name_input");
console.log(d);
let b= document.getElementById("upper_btn");
b.addEventListener('click', (e) =>
{
    let n= d.v;
    n= n.toUpperCase();
    document.getElementById("div_res").innerHTML= n;
})