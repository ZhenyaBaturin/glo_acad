'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoComplete = document.querySelector('.todo-completed');
const todoData = [
    {
        value: 'Сварить кофе',
        completed: false
    },
    {
        value: 'Помыть посуду',
        completed: true
    }
];

const render = function() {
    todoList.textContent = '';
    todoComplete.textContent = '';
    todoData.forEach((item, i) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `
            <span class="text-todo">${item.value}</span>
            <div class="todo-buttons">
                <button class="todo-remove"></button>
			    <button class="todo-complete"></button>
		    </div>
        `;
        if(item.completed ) {
            todoComplete.append(li);
        } else {
            todoList.append(li);
        } 
        const todoRemove = li.querySelector('.todo-remove');
        todoRemove.addEventListener('click', () => {
            delete todoData[i];
            render();
        });

        const todoCompeleted = li.querySelector('.todo-complete');
            todoCompeleted.addEventListener('click', () => {
                item.completed = !item.completed;
                render();
            });
        
    });
};
todoControl.addEventListener('submit', (e) => {
    e.preventDefault();
    const newObj = {
        value: headerInput.value,
        completed: false
    };
    if (newObj.value.trim() === '') {
        alert('Ммм...мне кажется стоит ввести какие-нибудь планы! Попробуйте еще раз!');
    } else {
        todoData.push (newObj);
        render();
        document.querySelector('.header-input').placeholder = 'Нужный текст';
    }
   
});
render();