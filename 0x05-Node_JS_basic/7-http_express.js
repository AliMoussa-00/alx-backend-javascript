const express = require('express');
const fs = require('fs').promises;

const args = process.argv;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    const lines = data.trim().split('\n');
    const header = lines.shift();

    if (!header) {
      return 'Number of students: 0';
    }

    const students = {};
    let totalStudents = 0;

    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      if (firstname && lastname && age && field) {
        totalStudents += 1;
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname.trim());
      }
    });

    let text = `Number of students: ${totalStudents}`;

    for (const [field, names] of Object.entries(students)) {
      text += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    }

    return text;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const path = args[2];

  try {
    const students = await countStudents(path);
    res.send(`This is the list of our students\n${students}`);
  } catch (err) {
    res.status = 500;
    res.send(err.message);
  }
});

app.listen(port);

module.exports = app;
