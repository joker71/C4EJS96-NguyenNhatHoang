document.getElementById("add").addEventListener("click", (e) =>
{
    let d= document.getElementById("number").innerHTML;
    d= Number(d);
   d++;
    document.getElementById("number").innerHTML= d;
})
document.getElementById("sub").addEventListener("click", (e) =>
{
    let d= document.getElementById("number").innerHTML;
    d= Number(d);
    d--;
    document.getElementById("number").innerHTML= d;

})
