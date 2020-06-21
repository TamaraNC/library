const addBtn = document.querySelector(".add");
const modal = document.querySelector(".modal__container");
const library = document.querySelector(".library__container");
const submitBook = document.querySelector(".add__book");
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

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
}

submitBook.addEventListener("click", addBookToLibrary);

function addBookToLibrary(e) {
    e.preventDefault();
   let bookTitle = modalTitle.value;
   let bookAuthor = modalAuthor.value;
   let bookPages = modalPages.value;

   let book = new Book(bookTitle, bookAuthor, bookPages);
   myLibrary.push(book);
   console.log(myLibrary)
   hideModal();
   
}


let book1 = new Book("La sombra del viento", "Carlos Ruiz Zafon", "345");
myLibrary.push(book1);


