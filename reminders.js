function checkReminders() {
    const now = new Date();
    return tasks.filter(task => {
        if (task.dueDate && !task.completed) {
            const dueDate = new Date(task.dueDate);
            const diff = dueDate - now;
            return diff > 0 && diff <= 24 * 60 * 60 * 1000;
        }
        return false;
    });
}
