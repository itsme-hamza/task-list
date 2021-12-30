window.addEventListener('load', () => {
    let today = document.querySelector('.today');

    let dateFunction = new Date();

    let date = dateFunction.getDate();
    let month = dateFunction.getMonth() + 1;
    let year = dateFunction.getFullYear();
    
    let currentDate = `${date} / ${month} / ${year}`;
    today.innerText = currentDate;
    
    const form = document.querySelector('.new-task-form');
    const input = document.querySelector('.new-task-input');
    const list = document.querySelector('.tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newTask = input.value;

        const newTaskEl = document.createElement('div');
        newTaskEl.classList.add('task');
        console.log('new task created');

        const newTaskInput = document.createElement('input');
        newTaskInput.classList.add('new-task');
        newTaskInput.type = 'text';
        newTaskInput.value = newTask;
        newTaskInput.setAttribute('readonly', 'readonly');
        newTaskInput.setAttribute('autocomplete', 'off')

        newTaskEl.appendChild(newTaskInput);

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.innerText = 'Edit';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerText = 'Delete';

        newTaskEl.appendChild(editBtn);
        newTaskEl.appendChild(deleteBtn);

        list.appendChild(newTaskEl);

        input.value = '';

        editBtn.addEventListener('click', (e) => {
            if(editBtn.innerText.toLowerCase() == 'edit'){
                editBtn.innerText = 'Save';
                newTaskInput.removeAttribute('readonly');
                newTaskInput.removeAttribute('autocomplete');
                newTaskInput
                newTaskInput.focus();
            }
            else{
                editBtn.innerText = "Edit";
                newTaskInput.setAttribute('readonly', 'readonly');
                newTaskInput.setAttribute('autocomplete', 'off');
            }
        });

        deleteBtn.addEventListener('click', (e) => {
            list.removeChild(newTaskEl);
        });

    });
});