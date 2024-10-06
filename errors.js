class TaskError extends Error {
    constructor(message) {
        super(message);
        this.name = 'TaskError';
    }
}

module.exports = { TaskError };
