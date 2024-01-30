const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

// Middleware to set the Content-Type header for all responses
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  next();
});

// Route for '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for '/students'
app.get('/students', async (req, res) => {
  try {
    const databaseFilePath = process.argv[2];
    const fileContent = await fs.readFile(databaseFilePath, 'utf-8');
    const lines = fileContent.split('\n').filter((line) => line.trim() !== '');
    const dataLines = lines.slice(1);

    if (dataLines.length === 0) {
      throw new Error('Cannot load the database');
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

    let response = `Number of students: ${NUMBER_OF_STUDENTS}\n`;

    Object.entries(fieldCounts).forEach(([key, value]) => {
      response += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
    });

    res.send(`This is the list of our students\n${response.trim()}`);
  } catch (error) {
    res.status(404).send(`Cannot load the database: ${error.message}`);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Export the Express app
module.exports = app;
