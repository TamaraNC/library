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
   
   hideModal();
   render();
}

function render() {
    library.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        //Book container
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book__container");
        //Book
        const mainBook = document.createElement("div");
        mainBook.classList.add("book");
        //Title
        const titleContent = document.createElement("div");
        titleContent.classList.add("title__content");
        const spanTitle = document.createElement("span");
        spanTitle.classList.add("main");
        spanTitle.textContent = "Title :";
        const title = document.createElement("span");
        title.classList.add("book__title");
        title.textContent = ` ${myLibrary[i].title}`;
        titleContent.appendChild(spanTitle);
        titleContent.appendChild(title);
        mainBook.appendChild(titleContent);
        //Author
        const authorContent = document.createElement("div");
        authorContent.classList.add("author__content");
        const spanAuthor = document.createElement("span");
        spanAuthor.classList.add("main");
        spanAuthor.textContent = "Author :";
        const author = document.createElement("span");
        author.classList.add("book__author");
        author.textContent = ` ${myLibrary[i].author}`;
        authorContent.appendChild(spanAuthor);
        authorContent.appendChild(author);
        mainBook.appendChild(authorContent);
        //Pages
        const pagesContent = document.createElement("div");
        pagesContent.classList.add("pages__content");
        const spanPages = document.createElement("span");
        spanPages.classList.add("main");
        spanPages.textContent = "Pages :";
        const pages = document.createElement("span");
        pages.classList.add("book__pages");
        pages.textContent = ` ${myLibrary[i].pages}`
        pagesContent.appendChild(spanPages);
        pagesContent.appendChild(pages);
        mainBook.appendChild(pagesContent);
        bookContainer.appendChild(mainBook);
        library.appendChild(bookContainer);
        //Read 
        const readContent = document.createElement("div");
        readContent.classList.add("book__read-elements");
        const spanRead = document.createElement("span");
        spanRead.classList.add("book__read");
        spanRead.textContent = "Read";
        readContent.appendChild(spanRead);
        mainBook.appendChild(readContent);
        bookContainer.appendChild(mainBook);
        //Check button
        const check = document.createElement("div");
        check.innerHTML = '<a href="#"><i class="fas fa-check"></i></a>';
        readContent.appendChild(check);
        //Uncheck
        const uncheck = document.createElement("div");
        uncheck.innerHTML = '<a href="#"><i class="fas fa-times"></i></a>';
        readContent.appendChild(uncheck);
        //Trash
        const trash = document.createElement("div");
        trash.innerHTML = '<a href="#"><i class="fas fa-trash-alt"></i></a>';
        readContent.appendChild(trash);
    }
}

