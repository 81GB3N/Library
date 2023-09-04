const addPressed = document.querySelector('.button');
const darker = document.querySelector('.darker');
let title, author, pages, read;

addPressed.addEventListener('click', () => {
darker.classList.add('dark');
document.querySelector('.add-book').innerHTML += 
`<div class="title">
<label for="title" class="title">Title</label>
<input type="text" name="title" id="title" />
</div>
<div class="author">
<label for="author" class="author">author</label>
<input type="text" name="author" id="author" />
</div>
<div class="pages">
<label for="pages" class="pages">pages</label>
<input type="number" name="pages" id="pages" min="1" />
</div>
<div class="read">
<label for="read" class="read">Read</label>
<input type="checkbox" name="read" id="read" />
</div>
<button class="btn">Submit</button>`;
document.querySelector('.add-book').style.border = "2px solid black";
 const submitPressed = document.querySelector('.btn');
    console.log(submitPressed);
    submitPressed.addEventListener('click', () =>{
        title = document.querySelector('#title').value;
        author = document.querySelector('#author').value;
        pages = document.querySelector('#pages').value;
        read = document.querySelector('#read').value;
        // console.log('submit');
        darker.classList.remove('dark');
        document.querySelector('.add-book').innerHTML = '';
        document.querySelector('.add-book').style.border = '';
        addBook();
    })
})

const main = document.querySelector('.main');
// console.log(title, author, pages, read);

function addBook(){
    // console.log(document.querySelector('#title').value);
    main.innerHTML += 
    `<div class="card">
    <div class="ans-title"></div>
    <div class="ans-author"></div>
    <div class="ans-pages"></div>
    <div class="ans-read"></div>
    <div class="remove"></div>
  </div>`;
  document.querySelector('.ans-title').innerHTML = title;
  document.querySelector('.ans-author').innerHTML = author;
  document.querySelector('.ans-pages').innerHTML = pages;
  read === 'on' ? document.querySelector('.ans-read').innerHTML = 'read' : document.querySelector('.ans-read').innerHTML = 'not read';
  main.querySelector('.card').style.border = "2px solid black";
}