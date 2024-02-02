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

        const studentsList = [];
        for (const key of Object.keys(fieldCounts)) {
          studentsList.push(
            `Number of students in ${key}: ${fieldCounts[key].length}. List: ${fieldCounts[key].join(', ')}`
          );
        }

        // Resolve with the list of students
        resolve({
          total: NUMBER_OF_STUDENTS,
          list: studentsList
        });
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
    countStudents(process.argv[2].toString())
      .then((studentsData) => {
        res.write(`This is the list of our students\n`);
        res.write(`Number of students: ${studentsData.total}\n`);
        studentsData.list.forEach((line, index) => {
          res.write(`${line}${index < studentsData.list.length - 1 ? '\n' : ''}`);
        });
        res.end();
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

app.listen(port, host, () => {});

module.exports = app;
