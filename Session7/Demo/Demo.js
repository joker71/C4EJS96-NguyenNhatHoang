// function hiNam(){
//     alert("Hi Nam");
//     alert("Hi, function is great");
// }
// function hihi(name)
// {
//     alert(`Hi ${name}`);
//     alert(`${name}, fuction is great`);
// }
// function hiH2(name, coment)
// {
//     alert(`Hi ${name}`);
//     alert(`${name}, ${coment}`);
// }
// function testSay(f){
//     alert(`Here i say`);
//     f("hihi");
// }
// testSay(hihi);
// testSay(hiNam);
// const sayHi= (name) =>{
//     alert(`Hello + ${name}`);
// }
// sayHi("hihihi");

// function run(){
//     alert("Dmmmm");
// }
// setTimeout(run, 10000);
// setTimeout (() =>{
//     alert("jiiiii");
// }, 10000);

const d= document.getElementById('msg');
// d.addEventListener('click', function(){
//    d.textContent="Hi There";
//  });
d.insertAdjacentHTML(`beforeend`, `<div>colll</div>`);

