const tasks = [];

function addTask(title) {
    tasks.push({ title, completed: false, priority: "normal" });
}
function listTasks() {
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.title}`);
    });
}
function completeTask(index) {
    if (tasks[index]) {
        tasks[index].completed = true;
    }
}
function deleteTask(index) {
    if (tasks[index]) {
        tasks.splice(index, 1);
    }
}
function setPriority(index, priority) {
    if (tasks[index]) {
        tasks[index].priority = priority;
    }
}
function addCategory(index, category) {
    if (tasks[index]) {
        tasks[index].category = category;
    }
}
function setDueDate(index, date) {
    if (tasks[index]) {
        tasks[index].dueDate = date;
    }
}
function filterTasks(criteria) {
    return tasks.filter(task => {
        return (!criteria.completed || task.completed === criteria.completed) &&
               (!criteria.priority || task.priority === criteria.priority) &&
               (!criteria.category || task.category === criteria.category);
    });
}
function searchTasks(query) {
    return tasks.filter(task => 
        task.title.toLowerCase().includes(query.toLowerCase())
    );
}
