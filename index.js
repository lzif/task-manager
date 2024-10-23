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
function addNote(index, note) {
    if (tasks[index]) {
        if (!tasks[index].notes) tasks[index].notes = [];
        tasks[index].notes.push({
            text: note,
            date: new Date().toISOString()
        });
    }
}
function exportTasks(format) {
    if (format === 'csv') {
        return tasks.map(t => `${t.title},${t.completed},${t.priority}`).join('\n');
    }
    return JSON.stringify(tasks, null, 2);
}
function importTasks(data, format) {
    if (format === 'csv') {
        const lines = data.split('\n');
        lines.forEach(line => {
            const [title, completed, priority] = line.split(',');
            tasks.push({ title, completed: completed === 'true', priority });
        });
    }
}
function sortTasks(by = 'title') {
    return [...tasks].sort((a, b) => {
        if (by === 'dueDate') {
            return new Date(a.dueDate) - new Date(b.dueDate);
        }
        return a[by].localeCompare(b[by]);
    });
}
function addTag(index, tag) {
    if (tasks[index]) {
        if (!tasks[index].tags) tasks[index].tags = new Set();
        tasks[index].tags.add(tag);
    }
}
function addDependency(taskIndex, dependsOnIndex) {
    if (tasks[taskIndex] && tasks[dependsOnIndex]) {
        if (!tasks[taskIndex].dependencies) tasks[taskIndex].dependencies = [];
        tasks[taskIndex].dependencies.push(dependsOnIndex);
    }
}
