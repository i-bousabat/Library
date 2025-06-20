const myLibrary = [];

function Book(title, author, pages, read, id) {
    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
  this.info = function() {
    return `${title}, ${author}, ${pages}, ${read}`
  };
}

function addBookToLibrary(title, author, pages, read) {

    const book = new Book(title, author, pages, read, crypto.randomUUID());
    myLibrary.push(book);

}

function display() {

    for (i of myLibrary) {
        
    }
}

// addBookToLibrary('a','auth1',10,true);
// addBookToLibrary('b','auth2',20,false);
// addBookToLibrary('c','auth3',30,true);
// addBookToLibrary('d','auth4',40,false);
// addBookToLibrary('e','auth5',50,true);

// console.log(myLibrary);

