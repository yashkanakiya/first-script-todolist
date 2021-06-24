const addButton = document.getElementById('addTodo');
const todoContainer = document.getElementById('todoContainer');
const inField = document.getElementById('inField');

//Event

addButton.addEventListener('click',
    // add data with create paragraph 
    () => {
    const paragraph = document.createElement('p');
    paragraph.classList.add('para'); 
    paragraph.style.backgroundColor = 'yellow';
    paragraph.innerText = inField.value;
    todoContainer.appendChild(paragraph);
    inField.value = "";

    // erase data of your list
    paragraph.addEventListener('click',
    () => {
        paragraph.style.textDecoration = 'line-through';
    })
    
    // delete 
    paragraph.addEventListener('dblclick',
    () => {
        paragraph.remove()
    })

})
