let mainPro= document.getElementById("showList");
function soProduct(pic, name, des, price)
{
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
mainPro.innerHTML = '';
for(let i=0; i< product.length; i++)
{
    soProduct(product[i].pic, product[i].name, product[i].des, product[i].price);
}
// mainPro.insertAdjacentHTML