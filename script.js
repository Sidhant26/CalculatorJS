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
let finalResult="";

numbers.forEach(no=>{
no.addEventListener("click",(e)=>{
    if(e.target.innerText==="." && !hasDecimal)
    hasDecimal=true;
    else if(e.target.innerText==="." && hasDecimal)
    return;                                            /* does not allow you to add a decimal, simply skips that altogether*/
    secondDisplay+=e.target.innerText;
    curr.innerText=secondDisplay;
    })
})

operations.forEach(op=>{
    operations.addEventListener("click",(e)=>{
        if(!secondDisplay)
        return;
        hasDecimal=false;           /* because the new number we input after clicking an operation won't have a decimal*/
        let operationname=e.target.innerText;
        if(firstDisplay && secondDisplay && lastOp)
        doOperation();
    })
})