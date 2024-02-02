process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.once('data', (chunk) => {
  const name = chunk.trim();
  process.stdout.write(`Your name is: ${name}\n`);

  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }

  process.exit();
});
