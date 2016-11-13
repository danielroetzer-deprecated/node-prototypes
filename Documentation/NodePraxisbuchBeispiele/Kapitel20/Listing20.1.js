function execute(command) {

    var allowedCommands = ['list', 'create', 'update', 'delete'];

    if (!allowedCommands.find((allowedCommand)  => allowedCommand === command.toLowerCase())) {
        throw new Error(`Command ${command} not allowed`);
    }

    console.log(`Running ${command}`);
}

execute('list');
execute('format');
