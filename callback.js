// function balsuccess()
// {
//     console.log("Success");
// }
// function balfail()
// {
//     console.log("Fail");
// }
// function balerror()
// {
//     console.log("Error");
// }
// function balprocess(data,callback)
// {
//     if(data>0)
//     {
//         console.log(`balance: ${data}`);
//     }
//     callback()
// }
// function trigger()
// {
//     const data=prompt("Enter the balance:")
//     if(data>0)
//     {
//         balprocess(data,balsuccess)
//     }
//     else if(data<=0)
//     {
//         balprocess(data,balerror)
//     }
//     else{
//         balprocess("Error",balerror)
//     }
// }
// trigger();

async function apicall()
{
    try{
    const res= await fetch('https://66e526e15cc7f9b6273c6b6e.mockapi.io/users');
    const data=await res.json();
   // console.table(data);
    return data;
    }
    catch(err)
    {
        console.warn(err);
    }
}
apidata()

async function apidata(){
    const apidata=await apicall();
    const stdata=apidata.map((data)=> {
        console.log(data)
    })
   // console.log(apidata)
}