const inputValue = document.querySelector("input[name=colorInput]");
const submitBtn = document.querySelector("#submit-btn");
const bodyEl = document.body.style;

//solution 1 
// submitBtn.addEventListener("click",()=>{
//     inputValue.value.toLowerCase()=="red"? bodyEl.backgroundColor="red":
//     inputValue.value.toLowerCase()=="blue"? bodyEl.backgroundColor="blue":
//     inputValue.value.toLowerCase()=="green"? bodyEl.backgroundColor="green":
//     inputValue.value.toLowerCase()=="black"? bodyEl.backgroundColor="black":
//     inputValue.value.toLowerCase()=="white"? bodyEl.backgroundColor="white":
//     alert("Choose right color")
// });

//solution 2 || check if entered color exist in validColors array, if it does give it to body
const validColors = ["red","blue","green","black","white"];

submitBtn.addEventListener("click",()=>{
    validColors.includes(inputValue.value.toLowerCase())?bodyEl.backgroundColor=inputValue.value.toLowerCase()
    :alert("Choose right color")
});