let promise= new Promise(function(resolve, reject){
    setTimeout((e)=>resolve("Promise is da beste"), 5000);
});
console.log(promise);