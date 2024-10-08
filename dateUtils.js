function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

function isValidDate(date) {
    return !isNaN(new Date(date));
}

module.exports = { formatDate, isValidDate };
