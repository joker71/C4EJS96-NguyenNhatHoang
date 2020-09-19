
let movie = ['Tenet', 'Inception', 'Dark knight', 'Doraemon', 'Naruto'];
console.log(movie);
function creatArray() {
    let newItem = prompt('Enter new movie you like');
    movie.push(newItem);
    console.log(movie)
}
function readArray() {
    let i = prompt('Enter item you want to see');
    alert(movie[i]);
}
function deleteOne()
{
    let pos= prompt('Enter item posttion you want to delete');
    movie.splice(pos, 1);
    console.log(movie);
}
function deleteMore()
{
    let pos=  prompt('Enter item posttion you want to delete');
    let n =  prompt('How many items do you want to delete');
    movie.splice(pos, n);
    console.log(movie);
}
//creatArray();
//readArray();
//deleteOne();
deleteMore();