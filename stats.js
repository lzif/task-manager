function getTaskStats(tasks) {
    return {
        total: tasks.length,
        completed: tasks.filter(t => t.completed).length,
        overdue: tasks.filter(t => t.dueDate && new Date(t.dueDate) < new Date()).length
    };
}
