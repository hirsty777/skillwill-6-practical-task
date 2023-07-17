const modalWrapper = document.querySelector(".modal-wrapper");
const openModal = document.querySelector("#open-btn");
const closeModal = document.querySelector("#close-btn");
const modalBox = document.querySelector(".modal-box");

openModal.addEventListener("click", ()=>{
    modalWrapper.style.display = "flex"
});

closeModal.addEventListener("click", ()=>{
    modalWrapper.style.display = "none"
});

//close modal if background is clicked (make sure it doesnt close when modal box or tex inside it clicked)
modalWrapper.addEventListener("click", (e)=>{
    if(e.target.className!="modal-box"&&e.target.className!="modal-text"){
        modalWrapper.style.display = "none"
    }
});