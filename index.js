function commandBuilder(commands = {}) {
  return function(command = "", ...args) {
    if (!commands[command])
      console.error(`${command} not found in commands object`);
    return commands[command].apply(this, args);
  };
}
module.exports = commandBuilder;
