const inputVal = document.querySelector("input[name='numbersInp']");
const avrRes = document.querySelector(".calculate-res");
//selectin button with id is better way.it`s just for practice
const calcBtn = document.querySelector(".wrapper").querySelector("button");

calcBtn.addEventListener("click",()=>{
    //first we check if input value contains only number, if not we throw alert
    const regex = /[a-zA-Z]/;
    if(regex.test(inputVal.value)){
        alert("Please enter only numbers seperated by ':'") 
        return
    }
    //then we split it by : 
    const numArr = inputVal.value.split(":");

    //solution 1 (reduce Func)
    avrRes.textContent=numArr.reduce((acc, curr)=>acc+Number(curr),0)/numArr.length
    //solution 2 (forEach Func)
    // let counter = 0;
    // //we need + in front of el to convert it into number,since input value gives string.
    // numArr.forEach(el=>{counter+=+el})
    // avrRes.textContent = counter/numArr.length
});