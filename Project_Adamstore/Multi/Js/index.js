let mainPro = document.getElementById("showList");
function soProduct(pic, name, des, price, id) {
  mainPro.insertAdjacentHTML('beforeEnd',
    `
    <div class="productItem">
      <div class="productPic"><img src="./Multi/img/${pic}" alt=""></div>
      <div class="productTit">
        <b>${name}</b> <br>
        <span>${des}</span>
      </div>
      <div class="productPrice">${price}</div>
      <div class="AddProduct"><button onclick="AddProduct(${id})" class="btn">Thêm vào giỏ hàng</button></div>
      <div class="showde>
     </div>
    
    `
  )
}
function showProduct() {
  mainPro.innerHTML = '';
  for (let i = 0; i < product.length; i++) {
    soProduct(product[i].pic, product[i].name, product[i].des, product[i].price, product[i].id);
  }
}
showProduct();
//sắp xếp theo giá
const sortPro = document.getElementById("sortbyprice");
sortPro.addEventListener('change', (e) => {
  let sortType = sortPro.value;
  console.log(sortType);
  console.log(typeof (sortType));
  if (sortType == "hight_to_low") {
    product.sort(function (a, b) {
      let keyA = a.price;
      let keyB = b.price;
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    showProduct();
  }
  else {
    product.sort(function (a, b) {
      let keyA = a.price;
      let keyB = b.price;
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
    showProduct();

  }
});

//giỏ hàng
var LIST_PRODUCT=[];
let carts = document.querySelectorAll('.btn');

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumber();
    console.log(carts[i]);
  });
}
function cartNumber() {
  let pro = localStorage.getItem('cartNumber');
  localStorage.setItem('cartNumber', 1);
  console.log(pro);
}



function AddProduct(id) {
  var myProduct = product.filter(pr => pr.id == id);
  LIST_PRODUCT.push(myProduct);
  console.log(LIST_PRODUCT);

  document.getElementById("totalCardProduct").innerHTML = LIST_PRODUCT.length;
}
console.log(LIST_PRODUCT);
//show gio hang 
let buttonShowCart= document.getElementsByClassName("cart_icon_show");

//visual
//Automatic slide Image
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}
carousel();
// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}