let d= document.getElementById("button1");
d.addEventListener("click", (e)=>{
   console.log(e);
}
)
document.getElementById("button2").addEventListener("click", (e) =>
{
   console.log(e);
})
 
document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}