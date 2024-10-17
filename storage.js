const fs = require('fs');

function saveData(tasks) {
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
}

function loadData() {
    try {
        return JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
    } catch (e) {
        return [];
    }
}
