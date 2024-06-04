const http = require('http');
const fs = require('fs').promises;

const args = process.argv;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').slice(1, -1);

    const header = data.split('\n').slice(0, 1)[0].split(',');
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
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const path = args[2];
    try {
      const studentList = await countStudents(path);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${studentList}`);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(1245, '127.0.0.1');

module.exports = app;
