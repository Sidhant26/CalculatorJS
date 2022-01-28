let numbers=document.querySelectorAll(".number");
let operations=document.querySelectorAll(".operator");
let allclear=document.querySelector(".clear");
let del=document.querySelector(".delete");
let equals=document.querySelector(".equal");
let curr=document.querySelector(".sdisplay");
let prev=document.querySelector(".fdisplay");
let decimal=document.querySelector(".decimal");
let firstDisplay="";
let secondDisplay="";
let hasDecimal=false;       /* to prevent the display from having multiple decimal points*/
let lastOp="";              /* last operation*/
let finalResult="";         /* temporary result  to be used in operations*/

numbers.forEach(no=>{
no.addEventListener("click",(e)=>{
    if(e.target.innerText==="." && !hasDecimal)
    hasDecimal=true;
    else if(e.target.innerText==="." && hasDecimal)
    return;                                            /* does not allow you to add a decimal, simply skips that altogether*/
    secondDisplay+=e.target.innerText;
    curr.innerText=secondDisplay;
    })
});

operations.forEach((op)=>{
    op.addEventListener("click",(e)=>{
        if(!secondDisplay)
        return;
        hasDecimal=false;           /* because the new number we input after clicking an operation won't have a decimal*/
        let operationname=e.target.innerText;
        if(firstDisplay && secondDisplay && lastOp) /* if true, it means we have entered a new operand*/
        doOperation();
        else
        finalResult=parseFloat(secondDisplay);  /* because the display has a string, not a number*/
        clear(operationname);
        lastOp=operationname;
    })
});

function clear(v="")           /* moves whatever is shown on the "main" display to the first line in the display*/
{
    firstDisplay+=secondDisplay+" "+v+" ";      /*adds previous operand*/
    prev.innerText=firstDisplay;
    curr.innerText="";
    secondDisplay="";
}

function doOperation()
{
    parseFloat(finalResult);
    parseFloat(secondDisplay);
    switch(lastOp)
    {
        case "/":finalResult=parseFloat(finalResult)/parseFloat(secondDisplay);
                 break;
        case "*":finalResult=parseFloat(finalResult)*parseFloat(secondDisplay);
                 break;
        case "+":finalResult=parseFloat(finalResult)+parseFloat(secondDisplay);
                 break;
        case "-":finalResult=parseFloat(finalResult)-parseFloat(secondDisplay);
                 break;
        case "%":finalResult=parseFloat(finalResult)%parseFloat(secondDisplay);
                 break;
    }
}

equals.addEventListener("click",(e)=>{
    if(!firstDisplay || !secondDisplay)
    return;                             /* nothing to show in the display*/
    hasDecimal=false;
    doOperation();
    clear();
    prev.innerText=finalResult;
    secondDisplay=finalResult;
    firstDisplay="";
});

allclear.addEventListener("click",(e)=>{
    curr.innerText="0";
    prev.innerText="0";
    firstDisplay="";
    secondDisplay="";
});

del.addEventListener("click",(e)=>{
    curr.innerText="0";
    secondDisplay="";
});