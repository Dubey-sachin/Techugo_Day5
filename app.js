/* create a promise resolving after 2 seconds
 create a promise rejecting on invalid input
 write async function using await
 handle rejection with try/catch
 chain 2 async steps */

 // create a promise resolving after 2 seconds

//  let oddEven=new Promise((resolve,reject)=>{

//     let number=4;
//     if(number%2===0)
//     {
//         resolve("even");
//     }
//     else{
//         reject("odd");
//     }
//  })

//  oddEven.then((message)=>console.log(message)).catch((error)=>console.error(error));

// create a promise resolving after 2 seconds

let resolvingAfterTwoSeconds=new Promise((resolve,reject)=>{
    let number=4;
    if(number%2==0)
    {
        setTimeout(()=>resolve("This is even Number And this will print on screen after 2 seconds"),2000);
    }
    else{
        setTimeout(()=>reject("This is odd number"),2000);
    }
})

resolvingAfterTwoSeconds.then((message)=>console.log(message)).catch((message)=>console.log(message));

// create a promise rejecting on invalid input

function addTwoToEvenNumber(input)
{
    return new Promise((resolve,reject)=>{
        if(input%2!==0)
        {
            reject("This is not even number");
        }
        else{
            resolve(input+2);
        }
    })
}

addTwoToEvenNumber(5).then((message)=>console.log(message)).catch((error)=>console.log(error));

// write async function using await
async function Exmaple(){

    try{
        const timedelay=await exampleFunction();
    console.log("This is async await example",timedelay);
    }
    catch(error){
            console.error("error message ",error);
    }

}

function exampleFunction()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(6)},3000);
    })
}
Exmaple();

// handle rejection with try/catch

async function rejectionExample(){
    try {
        const response=await getInfo();
    } catch (error) {
        console.error(error)
    }
}

function getInfo()
{
    return new Promise((resolve,reject)=>{
        reject("This is error message");
    })
}

rejectionExample();

// chain 2 async steps 

async function fun(input)
{
    return new Promise((resolve,reject)=>{
        resolve(input)
    })
}


fun("fun1").then((result)=>{
    console.log(result);
    return fun("fun2")
}).then((result)=>{console.log(result);}).catch((error)=>{console.error(error)})
