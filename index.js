const tasks = [];

function addTask(title) {
    tasks.push({ title, completed: false });
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
