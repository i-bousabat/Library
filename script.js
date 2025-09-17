let myLibrary = [];

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
    return `${title}, ${author}, ${pages}, ${read}`;
  };
}

function addBookToLibrary(title, author, pages, read) {

    const book = new Book(title, author, pages, read, crypto.randomUUID());
    myLibrary.push(book);

}

const tbody = document.querySelector('tbody');

function display() {
  tbody.innerHTML = '';
    for (let i of myLibrary) {
      const row = document.createElement('tr');
      row.dataset.id = i.id;

      row.innerHTML =
      `
      <td>${i.title}</td>
      <td>${i.author}</td>
      <td>${i.pages}</td>
      <td>${i.read === "yes" ? "Yes" : "No"}</td>
      <td class="delete">🗑️</td>
      `;
      tbody.appendChild(row);
        
    }
}

tbody.addEventListener('click', (e) => {

  if (e.target.classList.contains('delete')) {
    let row = e.target.closest("tr");

    let bookId = row.dataset.id;
    row.remove();

    myLibrary = myLibrary.filter(book => book.id !== bookId);
  }
});



const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const title = form.elements["book-title"].value;
  const author = form.elements["author"].value;
  const pages = form.elements["pages"].value;
  const read = form.elements["read"].value;

  addBookToLibrary(title, author, pages, read);
  display();

  form.reset(); //clear form
  //alert(myLibrary)

});




addBookToLibrary('Clean Code', 'Robert C. Martin', 464, 'yes');
addBookToLibrary('Introduction to Algorithms', 'Thomas H. Cormen', 1312, 'no');
addBookToLibrary('Design Patterns', 'Erich Gamma', 395, 'yes');
addBookToLibrary('The Pragmatic Programmer', 'Andrew Hunt', 352, 'no');
addBookToLibrary('Structure and Interpretation of Computer Programs', 'Harold Abelson', 657, 'yes');

addBookToLibrary('Operating Systems: Three Easy Pieces', 'Remzi H. Arpaci-Dusseau', 832, 'no');
addBookToLibrary('Computer Systems: A Programmer\'s Perspective', 'Randal E. Bryant', 1120, 'yes');
addBookToLibrary('Artificial Intelligence: A Modern Approach', 'Stuart Russell', 1132, 'no');

display();

