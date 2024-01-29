const promptMessage = 'Welcome to Holberton School, what is your name?';
const closingMessage = 'This important software is now closing';

process.stdout.write(`${promptMessage}\n`);

function processInput(data) {
  const name = data.toString().trim();
  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
  }
  process.exit();
}

if (process.stdin.isTTY) {
  process.stdin.on('data', processInput);
} else {
  process.stdin.on('data', processInput);
  process.on('exit', () => {
    process.stdout.write(`${closingMessage}\n`);
  });
}
