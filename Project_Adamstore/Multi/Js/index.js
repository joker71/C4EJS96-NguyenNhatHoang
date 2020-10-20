let mainPro = document.getElementById("showList");
function soProduct(pic, name, des, price) {
  mainPro.insertAdjacentHTML('beforeEnd',
    `
    <div class="productItem">
      <div class="productPic"><img src="./Multi/img/${pic}" alt=""></div>
      <div class="productTit">
        <b>${name}</b> <br>
        <span>${des}</span>
      </div>
      <div class="productPrice">${price}</div>
      <button class="addPro">Add to cart</button>
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
function showProduct() {
  mainPro.innerHTML = '';
  for (let i = 0; i < product.length; i++) {
    soProduct(product[i].pic, product[i].name, product[i].des, product[i].price);
  }
}
showProduct();
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
  else
  {
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