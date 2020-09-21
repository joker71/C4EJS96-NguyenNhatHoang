let order;
let arr = ["T-Shirt", "Jeans", "Shocks"];
for (let i = 1; i <= 2; i++) {
    order = prompt("Hi there, welcome to admin shop panel, what do you want to do(C, R, U, D)");
    if (order == "C" || order == "c") {
        let newItem = prompt("Enter new Item");
        arr.push(newItem);
        alert("THe curent list is:")
        alert(arr);
        alert("Done!");
    }
    else
        if (order == "r" || order == "R") {
            alert("THe curent list is:")
            alert(arr);
            alert("Done!");
        }
        else
            if (order == "u" || order == "U") {
                let pos = prompt("Enter position you want to update");
                let Item = prompt("Enter the item");
                arr[pos + 1] = Item;
                alert("THe curent list is:")
                alert(arr);
                alert("Done!");
            }
            else
                if (order == "u" || order == "U") {
                    let pos = prompt("Enter position you want to delete");
                    arr.splice(pos);
                    alert("THe curent list is:")
                    alert(arr);
                    alert("Done!");
                }
                else {
                    alert("this comand is not supported!");
                }
}