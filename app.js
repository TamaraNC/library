const addBtn = document.querySelector(".add");
const modal = document.querySelector(".modal__container");

addBtn.addEventListener("click", () => {
    modal.style.display = "block";
    const cancel = document.querySelector(".cancel");
    cancel.addEventListener("click", ()=> {
        modal.style.display = "none";
    })
})