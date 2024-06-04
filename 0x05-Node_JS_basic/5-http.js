const http = require('http');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n');
    lines.shift();

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
      text += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(
        ', ',
      )}`;
    }

    return text;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') res.end('Hello Holberton School!');
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((data) => {
        res.write(data);
        res.end();
      })
      .catch((err) => {
        res.end(err.message);
      });
  }
});

app.listen(1245, '127.0.0.1');

module.exports = app;
