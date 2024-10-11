function validateTask(title) {
    if (!title || title.trim().length === 0) {
        throw new Error('Task title cannot be empty');
    }
    if (title.length > 100) {
        throw new Error('Task title too long');
    }
}
