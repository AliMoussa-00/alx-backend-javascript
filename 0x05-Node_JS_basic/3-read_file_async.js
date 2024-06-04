const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n');
    const header = lines.shift();

    if (!header) {
      console.log('Number of students: 0');
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

    console.log(text);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
