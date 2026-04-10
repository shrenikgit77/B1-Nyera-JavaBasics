let promise = new Promise((resolve, reject)=>{
    let success = false;
    
    if(success){
        resolve("Success!");
    }else {
        reject("Failure!");
    }
});


promise
    .then(result=>console.log(result))
    .catch(error=>console.log(error))
    .finally(()=>console.log("done"));