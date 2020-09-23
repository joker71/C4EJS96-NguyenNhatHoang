let movieObject={
    title: "The dark night rise",
    year: 2012,
    rate: 8.7,
};
// console.log(movieObject["rate"]);
// console.log(movieObject.rate);
// console.log(movieObject.derector);//undefined

// let list= ["Sport", "LOL", "BTS"];
// list.push("LON");
// console.log(list[0].toUpperCase()    );
// console.log(list[3].toUpperCase());

// let x;
// x= prompt('What want do you want');

// if (movieObject[x] == null || movieObject[x] == undefined) {

//     alert("x is null or undefined");

// } else {

//     alert(`${movieObject[x]} `);

// }

// movieObject.rate+= 0.5
// console.log(movieObject);
// let x;
// x= prompt('What want do you want to update');
// let c= prompt("What is the update")
// movieObject[x]= c;
// console.log(movieObject);

let x;
x= prompt('What want do you want');

if (movieObject[x] == null || movieObject[x] == undefined) {

    alert(`${x} is not exist, we will add new`);
    let u= prompt("Enter new data");
    movieObject[x]= u;
    console.log(movieObject);

} else {

    alert(`${movieObject[x]} `);

}
delete movieObject.year;


