const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log('\n1. Add Task');
    console.log('2. List Tasks');
    console.log('3. Complete Task');
    console.log('4. Exit');
}
function handleUserInput() {
    showMenu();
    rl.question('Choose an option: ', (answer) => {
        if (answer === '4') {
            rl.close();
        } else {
            handleUserInput();
        }
    });
}
