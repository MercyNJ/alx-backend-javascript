const fs = require('fs').promises;
const http = require('http');

const host = '127.0.0.1';
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8')
      .then((fileContent) => {
        const lines = fileContent.split('\n').filter((line) => line.trim() !== '');
        const dataLines = lines.slice(1);

        if (dataLines.length === 0) {
          reject(new Error('Cannot load the database'));
          return;
        }

        const fieldCounts = {};

        dataLines.forEach((line) => {
          const [firstname, , , field] = line.split(',');
          if (fieldCounts[field]) {
            fieldCounts[field].push(firstname);
          } else {
            fieldCounts[field] = [firstname];
          }
        });

        const NUMBER_OF_STUDENTS = dataLines.length;

        console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

        for (const key of Object.keys(fieldCounts)) {
          console.log(
            `Number of students in ${key}: ${fieldCounts[key].length}. List: ${fieldCounts[key].join(', ')}`,
          );
        }

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outString = output.slice(0, -1);
      res.end(outString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(port, host, () => {});

module.exports = app;
