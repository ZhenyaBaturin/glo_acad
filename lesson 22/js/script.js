'use strict';

class Todo {
    constructor(form, input, todoList, todoCompleted) {
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
    }
    addToStorage() {
        localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
    }

    render() {
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        this.todoData.forEach(this.createItem, this); 
        this.addToStorage();

    }
    createItem(todo){
        const li =document.createElement('li');
        li.classList.add('todo-item');
        li.key = todo.key;
        li.insertAdjacentHTML('beforeend', `
            <span class="text-todo">${todo.value}</span>
            <div class="todo-buttons">
                <button class="todo-edit"></button>
                <button class="todo-remove"></button>
                <button class="todo-complete"></button>
            </div>
        `); 
        if(todo.completed)  {
            this.todoCompleted.append(li);
        } else {
            this.todoList.append(li);
        }
    }
    

    addTodo(e) {
        e.preventDefault();
        if(this.input.value.trim()){
            const newTodo = {
                value: this.input.value,
                completed: false,
                key: this.generateKey(), 
            };
            this.todoData.set(newTodo.key, newTodo);
            this.input.value = '';
            this.render();
        } else {
            alert('Ммм...мне кажется стоит ввести какие-нибудь планы! Попробуйте еще раз!');
        }
        
    }
    generateKey() {
        return Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15);
    }
    deleteItem(key) {
        for(let keys of this.todoData.keys()){
            if (key === keys){
                this.todoData.delete(keys);
                this.render();
            }
        }
       
    }
    completedItem(key) {
        for(let keys of this.todoData.keys()){
            if(key === keys && this.todoData.get(keys).completed === false) {
                this.todoData.get(keys).completed = true;
                this.render();
            } else if (key === keys && this.todoData.get(keys).completed === true){
                this.todoData.get(keys).completed = false;
                this.render();
            }
        }

    }
    handler(container) {
        document.querySelector(container).addEventListener('click', (e) => {
            let target = e.target;
            if(target.classList.contains('todo-remove')) {
                this.deleteItem(e.path[2].key); 
            } else if(target.classList.contains('todo-complete')){
                this.completedItem(e.path[2].key);
            }
        });
    }

    init() {
        this.render();
        this.form.addEventListener('submit', this.addTodo.bind(this));
        
    }
}
const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');
todo.init();
todo.handler('.todo-container');

