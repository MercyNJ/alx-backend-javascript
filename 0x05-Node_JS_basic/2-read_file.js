/*
const fs = require('fs');

function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf-8');

    const lines = fileContent.split('\n').filter((line) => line.trim() !== '');

    let NUMBER_OF_STUDENTS = -1;
    const fieldCounts = {};

    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      if (firstname && lastname && age && field) {
        NUMBER_OF_STUDENTS += 1;

        fieldCounts[field] = (fieldCounts[field] || 0) + 1;
      }
    });

    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const count = fieldCounts[field];
        const list = lines

          .filter((line) => line.split(',')[3] === field)
          .map((line) => line.split(',')[0])
          .join(', ');

        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
*/

const fs = require('fs');

function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf-8');

    const lines = fileContent.split('\n').filter((line) => line.trim() !== '');

    let NUMBER_OF_STUDENTS = 0;
    const fieldCounts = {};
    const dataLines = lines.slice(1);

    dataLines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      if (firstname && lastname && age && field && field !== 'firstname') {
        NUMBER_OF_STUDENTS += 1;

        if (fieldCounts[field]) {
          fieldCounts[field].push(firstname);
        } else {
          fieldCounts[field] = [firstname];
        }
      }
    });

    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

    for (const key of Object.keys(fieldCounts)) {
      console.log(
        `Number of students in ${key}: ${fieldCounts[key].length}. List: ${fieldCounts[key].join(', ')}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
