const fs = require('fs').promises;

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

module.exports = countStudents;
