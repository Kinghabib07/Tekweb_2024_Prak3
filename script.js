
document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput === '') {
        alert('Please add a task');
        return;
    }
    const taskList = document.createElement('div');
    taskList.textContent = taskInput;
    document.body.appendChild(taskList); 
    document.getElementById('taskInput').value = '';  
});


document.getElementById('bgColorSelector').addEventListener('change', function() {
    const selectedColor = document.getElementById('bgColorSelector').value;
    document.body.style.backgroundColor = selectedColor;
});


document.getElementById('increaseFont').addEventListener('click', function() {
    const currentFontSize = parseInt(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentFontSize + 2) + 'px';
});


document.getElementById('decreaseFont').addEventListener('click', function() {
    const currentFontSize = parseInt(window.getComputedStyle(document.body).fontSize);
    if (currentFontSize > 10) {  
        document.body.style.fontSize = (currentFontSize - 2) + 'px';
    }
});


document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});


document.getElementById('changeFontStyle').addEventListener('click', function() {
    const currentFont = window.getComputedStyle(document.body).fontFamily;
    if (currentFont === '"Arial", sans-serif') {
        document.body.style.fontFamily = '"Courier New", monospace';
    } else {
        document.body.style.fontFamily = '"Arial", sans-serif';
    }
});