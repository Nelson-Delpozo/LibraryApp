let myLibrary = [];

function Book(title, author){
  this.title = title
  this.author = author
}

function addBookToLibrary(book){
  myLibrary.push(book)
}

function addBookFromForm(){
  let bookTitle = document.getElementById("title")
  let bookAuthor = document.getElementById("author")
  let newBook = new Book(bookTitle, bookAuthor)
  myLibrary.push(newBook)
  // location.reload()
  showBooks(myLibrary)
}

let book1 = new Book("For Whom the Bell Tolls", "Hemingway")
let book2 = new Book("On the Road", "Kerouac")
let book3 = new Book("Journey to the East", "Hesse")

function showBooks(array) {
  for (let i = 0; i < myLibrary.length; i++) {
    document.getElementById("books").innerHTML += "<tr><td>" + array[i].title + "</td><td>" + array[i].author + "</td></tr>"
  }
}

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)

showBooks(myLibrary);
