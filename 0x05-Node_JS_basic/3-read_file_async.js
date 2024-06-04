const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }
      const lines = data.trim().split('\n');
      const header = lines.shift();
      if (!header) {
        return resolve('Number of students: 0');
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
        text += '\n';
        text += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }
      console.log(text);
      return resolve();
    });
  });
}

module.exports = countStudents;
