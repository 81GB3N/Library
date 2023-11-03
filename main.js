const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add-book");
const closeButton = document.querySelector(".submit");
const main = document.querySelector(".main");

let allBooks = [];
let book = {};

function addBook(){
  book = {};
  book.title = document.querySelector("#title").value;
  book.author = document.querySelector("#author").value;
  book.pages = document.querySelector("#pages").value;
  document.querySelector("#read").checked ? book.read = 'read' : book.read = 'not read';
  allBooks.push(book);
}

function displayBooks(){
  main.innerHTML = ``;
  for(let i = 0; i < allBooks.length; i++){
    main.innerHTML +=
  `<div class="card card${i+1}">
    <div class="title">Title: ${allBooks[i].title}</div>
    <div class="author">Author: ${allBooks[i].author}</div>
    <div class="pages">Pages: ${allBooks[i].pages}</div>
    <div class="read">Read: ${allBooks[i].read}</div>
    <button class="remove">Remove</button>
  </div>`
  }
}

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
  addBook();
  displayBooks();
  console.log(allBooks); 
})

main.addEventListener('click', e =>{
  const underMouse = document.elementFromPoint(e.clientX, e.clientY);
  if(underMouse.classList.value == 'remove'){
    console.log(underMouse.parentElement.classList[1].split('card')[1]-1 );
    allBooks.splice(underMouse.parentElement.classList[1].split('card')[1]-1, 1);
    displayBooks();
  }
})
//overflow