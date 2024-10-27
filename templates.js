const taskTemplates = {
    meeting: { title: 'Meeting', priority: 'high', category: 'work' },
    shopping: { title: 'Shopping', priority: 'normal', category: 'personal' }
};

function createFromTemplate(templateName, customTitle) {
    const template = taskTemplates[templateName];
    if (template) {
        return { ...template, title: customTitle || template.title };
    }
}
