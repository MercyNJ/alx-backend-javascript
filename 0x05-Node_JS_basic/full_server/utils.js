const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, fileData) => {
      if (error) {
        reject(Error(error));
        return;
      }
      
      const lines = fileData.toString().split('\n');

      let studentRecords = lines.filter((line) => line);
      studentRecords = studentRecords.map((record) => record.split(','));

      const studentFields = {};
      for (const index in studentRecords) {
        if (index !== 0) {
          const field = studentRecords[index][3];
          if (!studentFields[field]) studentFields[field] = [];

          studentFields[field].push(studentRecords[index][0]);
        }
      }

      delete studentFields.field;

      resolve(studentFields);
    });
  });
}

module.exports = readDatabase;
