const addBtn = document.querySelector(".add");
const modal = document.querySelector(".modal__container");
const library = document.querySelector(".library__container");
const submitBook = document.querySelector(".add__book");
const deleteBtn = document.querySelector(".fas fa-trash-alt");
//Modal inputs
const modalTitle = document.querySelector("#title");
const modalAuthor = document.querySelector("#author");
const modalPages = document.querySelector("#pages");
const isRead = document.querySelector("#read-status");

//Toggle Modal
const hideModal = () => {
    modal.style.display = "none";
 };
 const showModal = () => {
    modal.style.display = "block";
    const cancel = document.querySelector(".cancel");
    cancel.addEventListener("click", (e) => {
        e.preventDefault();
        hideModal();
    });
 };
 addBtn.addEventListener("click", showModal);

let myLibrary = [];
let index = 0;

class Book {
    constructor(title, author, pages, read) {
        this.title = title,
            this.author = author,
            this.pages = pages,
            this.read = read;
    }
}


submitBook.addEventListener("click", addBookToLibrary);

function addBookToLibrary(e) {
    e.preventDefault();
   let bookTitle = modalTitle.value;
   let bookAuthor = modalAuthor.value;
   let bookPages = modalPages.value;
   let bookStatus = isRead.checked;

   //Display error message if inputs are empty
   if (bookTitle === "" || bookAuthor === "" || bookPages === "") {
       const errorMessage = document.querySelector(".error__message--container");
       hideModal();
       errorMessage.style.display = "block";
       const errorBtn = document.querySelector(".error-btn");
       errorBtn.addEventListener("click", () => {
           errorMessage.style.display = "none";
           showModal();
       })
   } else {
    let book = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
    myLibrary.push(book);
    
    hideModal();
    render();
   }

}

function render() {
    library.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].read){
        library.innerHTML += 
        '<div class="book__container">' +
        '<div class="book">' +
            '<div class="title__content">' +
                '<span class="main">Title : </span><span class="book__title">' +` ${myLibrary[i].title}`+'</span>' +
            '</div>' +
            '<div class="author__content">' +
                '<span class="main">Author : </span><span class="book__author">'+` ${myLibrary[i].author}`+'</span>' +
            '</div>' +
            '<div class="pages__content">' +
                '<span class="main">Pages : </span><span class="book__pages">'+` ${myLibrary[i].pages}`+'</span>' +
            '</div>' +
            '<div class="book__read-elements">' +
                '<span class="book__read yes">I read it</span>' +
                '<a href="#"><i class="fas fa-check"></i></a>' +
                '<a href="#"><i class="fas fa-trash-alt"></i></a>' +
            '</div>' +
        '</div>' +
    '</div>';
    
            
    }else {
    library.innerHTML += 
        '<div class="book__container">' +
        '<div class="book">' +
            '<div class="title__content">' +
                '<span class="main">Title : </span><span class="book__title">' +` ${myLibrary[i].title}`+'</span>' +
            '</div>' +
            '<div class="author__content">' +
                '<span class="main">Author : </span><span class="book__author">'+` ${myLibrary[i].author}`+'</span>' +
            '</div>' +
            '<div class="pages__content">' +
                '<span class="main">Pages : </span><span class="book__pages">'+` ${myLibrary[i].pages}`+'</span>' +
            '</div>' +
            '<div class="book__read-elements">' +
                '<span class="book__read no">I have not read it</span>' +
                '<a href="#"><i class="fas fa-check"></i></a>' +
                '<a href="#"><i class="fas fa-trash-alt"></i></a>' +
            '</div>' +
        '</div>' +
    '</div>';

   }

   const buttons = document.querySelectorAll("i");
   buttons.forEach(button => {
       button.addEventListener("click", function(e) {
        const bookContainer = document.querySelector(".book__container");
           if (e.target.classList.contains("fa-trash-alt")) {
               bookContainer.remove();
           }
           if (e.target.classList.contains("fa-check")) {
               if (e.target.parentNode.parentNode.firstChild.classList.contains("no")) {
                e.target.parentNode.parentNode.firstChild.classList.toggle("yes");
                if (e.target.parentNode.parentNode.firstChild.textContent === "I have not read it") {
                    e.target.parentNode.parentNode.firstChild.textContent = "I read it";
                } else {
                    e.target.parentNode.parentNode.firstChild.textContent = "I have not read it"
                }
               } else {
                e.target.parentNode.parentNode.firstChild.classList.toggle("no");
               }
           }
       })
   })


    
    modalTitle.value = "";
    modalAuthor.value = "";
    modalPages.value = "";
    isRead.checked = false;
   }
}

const bookContainer = document.querySelectorAll(".book__container");
   const filterBtn = document.querySelectorAll(".filter-btn");
   myLibrary.style.display = "flex";
   filterBtn.forEach(button => {
    button.addEventListener("click", function(e) {
        const filter = e.target.dataset.filter;
        for (let i = 0; i < myLibrary.length; i++) {
            if (filter == "all") {
                bookContainer.forEach(item => {
                    item.style.display = "flex";
                })
            } else if (filter === "read") {
                if (myLibrary[i].read) {
                    myLibrary[i].style.display = "flex";
                } else {
                    library.style.display = "none";
                }
            }
        }
    })
})
