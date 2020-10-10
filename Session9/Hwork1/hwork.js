let promise= new Promise(function(resolve, reject){
    setTimeout((e)=>resolve("Promise is da beste"), 5000);
});
promise 
    .then(function(successMessage) { 
       //success handler function is invoked 
        console.log(successMessage); 
    }, function(errorMessage) { 
        console.log(errorMessage); 
    }) 
