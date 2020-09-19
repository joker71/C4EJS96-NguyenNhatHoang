
let movie = ['Tenet', 'Inception', 'Dark knight', 'Doraemon', 'Naruto'];
//console.log(movie);
function creatArray() {
    let newItem = prompt('Enter new movie you like');
    movie.push(newItem);
    console.log(movie)
}
function readArray() {
    let i = prompt('Enter item you want to see');
    alert(movie[i]);
}
function deleteOne() {
    let pos = prompt('Enter item posttion you want to delete');
    movie.splice(pos, 1);
    console.log(movie);
}
function deleteMore() {
    let pos = prompt('Enter item posttion you want to delete');
    let n = prompt('How many items do you want to delete');
    movie.splice(pos, n);
    console.log(movie);
}
function updateFirstItem() {
    let movieTitle = prompt("Enter new moveTitle for fist item");
    movie[0] = movieTitle;
}
function updateItem() {
    let pos = prompt("Enter item position you want to change");
    let movieTitle = prompt(`Enter new moveTitle for ${pos} item`);
    movie[Number(pos)] = movieTitle;
}
function readAll()
{
    let len= movie.length;
    for(let i=0; i<len; i++)
    {
        console.log(movie[i]);
    }

  

}
function updateAll2()
{
    let len= movie.length;
    // console.log(len);
    for(let i=0; i<len; i++)
    {
        //movie[i].toString();
        movie[i]=movie[i].toLowerCase();
        console.log(movie[i]);
    }
    
}
function readHalf()
{
    let len= movie.length;
    for(let i=0; i<len/2; i++)
    {
        console.log(`${i}. ${movie[i]}`);
    }
}
function readAllDetail()
{
    
    let len= movie.length;
    for(let i=0; i<len; i++)
    {
        console.log(`${i}. ${movie[i]}`);
    }
}
//creatArray();
//readArray();
//deleteOne();
//updateItem();
//updateFirstItem();
//readHalf();
//readAll();
updateAll2();



