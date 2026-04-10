/* 
Promise
----------------------------
    1) Promise is Class with actual Implemention
    2) Promises in EcmaScript are a core abstraction for handling asynchronous operation
    3) Prerequisites of Promises
        a) JavaScript Execution Model
                -> Javascript is a single threaded and uses event loop

        b) Callbacks
                -> Functions passed as argument to be executed later
                -> setTimeout(()=>{ console.log("Done") }, 1000);
        
        c) Asynchronous Operations
                -> Tasks like calls, file reads, timers
                -> They dont return results immediately
        
        d) Error Handling
                -> In callbacks, errors often passed as argument
                -> Promises unify success and error handling

    
    -> A Promise is an object representing the eventual completion of an asynchronous function
    -> "Promise" has following states
            -> Pending      : Initial State
            -> Fulfilled    : Operation completed Successfully
            -> Rejected     : Operation Failed

    -> Example
            let promise = new Promise((resolve, reject)=>{
                let success = true;
                
                if(success){
                    resolve("Success!");
                }else {
                    reject("Failure!");
                }
            });

        
            Consume Promise Object
            ------------------------
            promise
                .then(result=>console.log(result))
                .catch(error=>console.lo(error))
                .finally(()=>console.log("done"));

    -> Promise Utilities
    
        a) Promise.all          : Waits for all promies to resolve
        b) Promise.race         : resolves/rejects as soon as one promise settles.
        c) Promise.any          : Reslves with first successfull promise

*/