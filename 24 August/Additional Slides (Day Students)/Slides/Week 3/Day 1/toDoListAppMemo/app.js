document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    // Function to handle form submission
    function handleFormSubmit(event) {
      event.preventDefault();
      const todoText = todoInput.value.trim();
      if (todoText === '') return; // Prevent empty tasks from being added
  
      addTodoItem(todoText);
      todoInput.value = ''; // Clear input field after adding task
    }
  
    // Add event listener for form submission
    todoForm.addEventListener('submit', handleFormSubmit);
  
    // Function to create and add a new todo item
    function addTodoItem(todoText) {
      const li = document.createElement('li');
      li.textContent = todoText;
  
      // Create delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', handleDelete);
  
      // Create complete button
      const completeBtn = document.createElement('button');
      completeBtn.textContent = 'Complete';
      completeBtn.classList.add('complete-btn');
      completeBtn.addEventListener('click', handleComplete);
  
      li.appendChild(deleteBtn);
      li.appendChild(completeBtn);
      todoList.appendChild(li);
    }
  
    // Event handler for deleting a task
    function handleDelete(event) {
      const listItem = event.target.closest('li');
      if (listItem) {
        listItem.remove();
      }
    }
  
    // Event handler for completing a task
    function handleComplete(event) {
      const listItem = event.target.closest('li');
      if (listItem) {
        listItem.classList.toggle('completed');
      }
    }
  });
  