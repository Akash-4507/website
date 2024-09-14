function balsuccess()
{
    console.log("Success");
}
function balfail()
{
    console.log("Fail");
}
function balerror()
{
    console.log("Error");
}
function balprocess(data,callback)
{
    if(data>0)
    {
        console.log(`balance: ${data}`);
    }
    callback()
}
function trigger()
{
    const data=prompt("Enter the balance:")
    if(data>0)
    {
        balprocess(data,balsuccess)
    }
    else if(data<=0)
    {
        balprocess(data,balerror)
    }
    else{
        balprocess("Error",balerror)
    }
}
trigger();