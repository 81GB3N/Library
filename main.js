const addPressed = document.querySelector('.button');
const darker = document.querySelector('.darker');
const submitPressed = document.querySelector('.book-button');

console.log(darker);
console.log(addPressed);

addPressed.addEventListener('click', () => {
darker.classList.add('dark');
document.querySelector('.add-book').innerHTML += 
`<div class="title">
<label for="title" class="title">Title</label>
<input type="text" name="title" class="title" />
</div>
<div class="author">
<label for="author" class="author">author</label>
<input type="text" name="author" class="author" />
</div>
<div class="pages">
<label for="pages" class="pages">pages</label>
<input type="number" name="pages" class="pages" min="1" />
</div>
<div class="read">
<label for="read" class="read">Read</label>
<input type="checkbox" name="read" class="read" />
</div>`;
submitPressed.innerHTML += '<button>Submit</button>';
document.querySelector('.add-book').style.border = "2px solid black";
console.log('dark');
    // addBook();

})

console.log(submitPressed);

submitPressed.addEventListener('click', () =>{
    console.log('submit');
    darker.classList.remove('dark');
    document.querySelector('.add-book').innerHTML = '';
})

function addBook(){
    
}