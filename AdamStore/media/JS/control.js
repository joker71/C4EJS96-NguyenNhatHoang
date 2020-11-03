// show
let mainPro = document.getElementById("showList");
function soProduct(pic, name, des, price, id) {
  mainPro.insertAdjacentHTML('beforeEnd',
    `
      <div class="productItem">
        <div class="productPic"><img src="./media/img/./${pic}" alt=""></div>
        <div class="productTit">
          <b>${name}</b> <br>
          <span>${des}</span>
        </div>
        <div class="productPrice">₫${price}</div>
        <div class="AddProduct"><button onclick="AddProduct(${id})" class="btn_item">Thêm vào giỏ hàng</button></div>
        <div class="showitem"><button onclick="showitem(${id})" class="btn_item">Chi tiết </button></div>
        <div class="showde>
       </div>
      
      `
  )
}
function showList() {
  mainPro.innerHTML = "";
  for (let i = 0; i < product.length; i++) {
    soProduct(product[i].pic, product[i].name, product[i].des, product[i].price);
  }
}
showList();
let showAll = document.getElementsByClassName("showAll");
console.log(showAll);
showAll[0].addEventListener('click', () => {
  console.log("Show all");
  showList();
});

let showKind = document.getElementsByClassName("sidebarMenuKind");
console.log(showKind);
for (let k = 0; k < showKind.length; k++) {
  let condition = showKind[k].innerHTML;
  showKind[k].addEventListener('click', (e) => {
    console.log(e);
    mainPro.innerHTML = "";
    for (let i = 0; i < product.length; i++) {
      if (product[i].kind == condition) {
        soProduct(product[i].pic, product[i].name, product[i].des, product[i].price);
      }
    }
  });
}

let showCaretory = document.getElementsByClassName("sidebarMenucaretory");
console.log(showCaretory);
for (let k = 0; k <showCaretory.length; k++) {
  let condition = showCaretory[k].innerHTML;
  showCaretory[k].addEventListener('click', (e) => {
    console.log(e);
    mainPro.innerHTML = "";
    for (let i = 0; i < product.length; i++) {
      if (product[i].caretory == condition) {
        soProduct(product[i].pic, product[i].name, product[i].des, product[i].price);
      }
    }
  });
}

let showRot = document.getElementsByClassName("sidebarMenurot");
console.log(showRot);
for (let k = 0; k <showRot.length; k++) {
  let condition = showRot[k].innerHTML;
  showRot[k].addEventListener('click', (e) => {
    console.log(e);
    mainPro.innerHTML = "";
    for (let i = 0; i < product.length; i++) {
      if (product[i].rot == condition) {
        soProduct(product[i].pic, product[i].name, product[i].des, product[i].price);
      }
    }
  });
}
//sort
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
   showList();
  }
  else {
    product.sort(function (a, b) {
      let keyA = a.price;
      let keyB = b.price;
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
    showList();

  }
});
// Cart
var LIST_PRODUCT = [];
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