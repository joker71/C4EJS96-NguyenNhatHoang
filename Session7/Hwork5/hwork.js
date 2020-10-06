function myFunction() {
  let d= document.getElementsByClassName("singer");
  document.getElementById("Demo").innerHTML= d[1].innerHTML;
  for(let x of d)
  {
     console.log(x.innerHTML);
  }
 }
