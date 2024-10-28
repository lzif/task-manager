function getTaskAnalytics(tasks) {
    return {
        completionRate: tasks.filter(t => t.completed).length / tasks.length,
        averageCompletionTime: calculateAverageCompletionTime(tasks),
        categoryDistribution: getCategoryDistribution(tasks)
    };
}
