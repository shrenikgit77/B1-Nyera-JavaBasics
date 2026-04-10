let step1 = () => {
    return Promise.resolve("Step1 done");
}

let step2 = () => {
    return Promise.resolve("Step2 done");
}

step1()
    .then(result=>{
        console.log(result);
        return step2();
    })
    .then(result=>{
        console.log(result);
    })