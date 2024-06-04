const fs = require('fs').promises;

const readDatabase = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');

    const lines = data.trim().split('\n');
    const header = lines.shift();

    if (!header) {
      return 'Number of students: 0';
    }

    const students = {};

    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      if (firstname && lastname && age && field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname.trim());
      }
    });

    return students;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = readDatabase;
