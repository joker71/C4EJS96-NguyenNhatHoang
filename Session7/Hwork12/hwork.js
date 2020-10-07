let belonging=[];
let addButton=`<button class="remove_btns">Remove</button>`
let item= document.getElementsByTagName("li");
let item_list= document.getElementById("item_list_ul")
let add_btn= document.getElementById("add_btn");
let input_iteem= document.getElementById("new_item")


for(let i=0; i< item.length; i++)
{
    belonging.push(item[i].innerHTML);
}
console.log(belonging);

for(let i=0; i< belonging.length; i++)
{
   // item_list.removeChild(item_list[i]);
    item_list.insertAdjacentHTML("beforeend", ` <li>${belonging[i]} ${addButton}</li>`);
    //item_list.removeChild(item_list[i]);
}
console.log(item_list);
console.log(add_btn);
add_btn.addEventListener('click', (e)=>
{
    console.log("aadd new itme");
    let newValue= input_iteem.value;
    if(newValue !="");
    {
        belonging.push(newValue);
        item_list.insertAdjacentHTML("beforeend", ` <li>${newValue}${addButton}</li>`);

    }
    input_iteem.value="";
    console.log(belonging);
})
let removeButton= document.getElementsByClassName("remove_btns")
console.log(removeButton.length);
for(let i=0; i< removeButton.length; i++)
{
    let j;
    removeButton[i].addEventListener('click', (e)=>{
        console.log("remove");
        belonging.splice(j, 1);
        item_list.removeChild(item_list.childNodes[i]);
       // console.log(item_list.childNodes[i]);
        j=i-1;
        console.log(belonging);
    });


}