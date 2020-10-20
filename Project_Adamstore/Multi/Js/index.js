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
     </div>
    `
  )
}

// mainPro.innerHTML = '';
// for (let i = 0; i < product.length; i++) {
//   soProduct(product[i].pic, product[i].name, product[i].des, product[i].price);
// }

// const showMore=document.getElementsByClassName("showMore");
// showMore.addEventListener('change', ()=>{

//   let sortProd = showMore.value;
//  console.log(sortProd);
// });
// show sp
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

// function cartNumber(){
//     let productNumber = localStorage.getItem('cartNumber');
//        let Number = parseInt(productNumber);
//         console.log(Number);
//     if( productNumber ){
//       localStorage.setItem('cartNumer', productNumber + 1);
//       document.querySelector('.value').textContent = productNumber + 1;
//     }else{
//       localStorage.setItem('cartNumer', 1);
//       document.querySelector('.value').textContent = 1;
//     }  
// }
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
