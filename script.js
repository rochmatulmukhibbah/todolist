document.getElementById('addButton').addEventListener('click', function() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText) {
        addTodoItem(todoText);
        todoInput.value = ''; //fungsi pertama tambah list
    }else {
        alert ('please, write something!');
    }
});

function addTodoItem(text) {
    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            span.style.textDecoration = 'line-through';
            span.style.color = 'red'; 
        } else {
            span.style.textDecoration = 'none'; //fungsi checkbox
            span.style.color = 'black';
        }
    });
  

    const span = document.createElement('span');
    span.textContent = text;

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = text;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
        if (editInput.style.display === 'none') {
            editInput.style.display = 'inline';
            span.style.display = 'none';
            editButton.textContent = 'Simpan';
        } else {
            span.textContent = editInput.value;
            editInput.style.display = 'none';
            span.style.display = 'inline';
            editButton.textContent = 'Edit';//fungsi biar bisa edit
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(li);//fungsi tombol hapus
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editInput);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);//untuk menampilkan semua program yg telah dibuat
}


