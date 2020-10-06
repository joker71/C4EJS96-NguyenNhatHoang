function myFunction() {
   var d= document.getElementsByTagName("li");
   document.getElementById("demo").innerHTML= d[1].innerHTML;
   // innerHTML lay noi dung the html: methol
   for(let x of d)
   {
      console.log(x);
   }
 }
