document.getElementById("upper_btn").addEventListener(`click`, (e) =>
{
    let d= document.getElementById("name_input").value;
    // console.log(d);
    let x=d;
    // console.log(x);
    document.getElementById("div_res").innerHTML= x.toUpperCase();
})