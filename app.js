/* create a promise resolving after 2 seconds
 create a promise rejecting on invalid input
 write async function using await
 handle rejection with try/catch
 chain 2 async steps */

 // create a promise resolving after 2 seconds

 let oddEven=new Promise((resolve,reject)=>{

    let number=4;
    if(number%2===0)
    {
        resolve("even");
    }
    else{
        reject("odd");
    }
 })

 oddEven.then((message)=>console.log(msg)).catch((error)=>console.error(error));