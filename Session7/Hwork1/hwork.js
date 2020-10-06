const container= document.getElementById("list");
for(let i=1; i<=3; i++){
container.insertAdjacentHTML("afterend", `<li>${i}</li>`);
}
console.log(container);
console.log("beforebegin-D");
console.log("afterbegin-A");
console.log("beforeend-C");
console.log("afterend_B")