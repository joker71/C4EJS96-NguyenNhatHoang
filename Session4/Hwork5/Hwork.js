let arr = [
  {
    name: "Xiaomi portable charger 20000mah",
    brand: "Xioami",
    price: 482,
    color: "while",
    category: "charger",
    providers: " Phukienzero,Dientuccc",
  },
  {
    name: 'VSmart Active 1',
    brand: "Vsmart",
    price: 5487,
    color: "black",
    category: "phone",
    providers: "tgdd, dddghn, vh Store",
  },
  {
    name: "Iphone X",
    brand: "Apple",
    price: "21490",
    color: "Gray",
    category: "phone",
    providers: "Tgdd",
  },
  {
    name: "Samsung Galaxy A9",
    brand: "Samsung",
    price: 8490,
    color: "blue",
    category: "phone",
    providers: "tgdd",
  },
];
//3,2
let n = prompt("Enter product Position:");
console.log(arr[n - 1]);
//3.3
let cat = prompt("Enter your Caelory");
cat = cat.toLowerCase(cat);
let ct = 0;
for (let i = 0; i < arr.length; i++) {
  let tmp = arr[i].category;
  if (tmp == cat) {
    console.log("-----------------");
    console.log(`Name: ${tmp.name}`);
    console.log(`Price: ${tmp.price}`);
    ct++;
  }
}
if (ct == 0) { console.log("Not found!"); }
//3.5
for (let i = 0; i < arr.length; i++) {
  console.log(`#${i}. ${arr[i].name}`);
  console.log(`       Price: ${arr[i].price}`);
  console.log(`       Providers: ${arr[i].providers}`)
}