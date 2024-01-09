let text= document.querySelector("#text");
let date= document.querySelector("#date");
let buttons= document.querySelector("button");

let todoArrayList=JSON.parse(localStorage.getItem('todoList')) || [];
function displayOnScreen(){
let displayText='';

    todoArrayList.forEach((todoObj, index)=>{
        todoObj= todoArrayList[index];
        // destructuring in object
        const {name, dueDate}= todoObj;
        let textInHtml=`
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoArrayList.splice(${index},1);
            displayOnScreen();
            " class="btn">
            Delete
        </button>`;
        displayText+= textInHtml;
        document.querySelector(".todo-grid").innerHTML=displayText;
    });
} 
buttons.addEventListener('click',()=>{
    addInTodoList();
});
function addInTodoList(){
    let name=text.value;
    let dueDate= date.value;

    // shorthand property
    todoArrayList.push({
        // name: name,
        // dueDate: dueDate

        name, dueDate
    });
    displayOnScreen();
    savedTheData();
    text.value='';
    date.value='';
}
function savedTheData(){
    localStorage.setItem('todoList', JSON.stringify(todoArrayList));
}