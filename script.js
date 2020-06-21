const addBtn = document.querySelector(".add");
const modal = document.querySelector(".modal__container");
const library = document.querySelector(".library__container");
const submitBook = document.querySelector(".add__book");
const deleteBtn = document.querySelector(".fas fa-trash-alt");
//Modal inputs
const modalTitle = document.querySelector("#title");
const modalAuthor = document.querySelector("#author");
const modalPages = document.querySelector("#pages");

//Toggle Modal
const hideModal = () => {
    modal.style.display = "none";
 };
 const showModal = () => {
    modal.style.display = "block";
    const cancel = document.querySelector(".cancel");
    cancel.addEventListener("click", hideModal);
 };
 addBtn.addEventListener("click", showModal);

let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead
}

submitBook.addEventListener("click", addBookToLibrary);

function addBookToLibrary(e) {
    e.preventDefault();
   let bookTitle = modalTitle.value;
   let bookAuthor = modalAuthor.value;
   let bookPages = modalPages.value;

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
    let book = new Book(bookTitle, bookAuthor, bookPages);
    myLibrary.push(book);
    
    hideModal();
    render();
   }

}

function render() {
    library.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
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
                '<span class="book__read">Read</span>' +
                '<a href="#"><i class="fas fa-check"></i></a>' +
                '<a href="#"><i class="fas fa-times"></i>' +
                '<a href="#"><i class="fas fa-trash-alt"></i></a>' +
            '</div>' +
        '</div>' +
    '</div>'
    }
    modalTitle.value = "";
    modalAuthor.value = "";
    modalPages.value = "";
}

//Read functionality and buttons
//Local storage






