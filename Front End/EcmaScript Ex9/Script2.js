let fetchData = () => {
    let promise = new Promise(resolve=> {
        setTimeout(()=>console.log("Data Resolved"), 3000);
    });

    return promise;
}

//returning Promise Object
let answer = fetchData();
console.log(answer);

//Consuming Promise Object
fetchData()
    .then(result=>console.log(result));