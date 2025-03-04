const spawnChildProcess = async (args) => {
    const { spawn } = require('child_process');
    const child = spawn('node', ['script.js', ...args], {
        stdio: [process.stdin, process.stdout, process.stderr, 'ipc']
    });

    child.on('message', (message) => {
        console.log(`Message from child: ${message}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
