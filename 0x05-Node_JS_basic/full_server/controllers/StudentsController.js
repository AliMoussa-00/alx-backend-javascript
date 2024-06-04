const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((students) => {
        let text = 'This is the list of our students';

        Object.keys(students).sort().forEach((field) => {
          text += `\nNumber of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`;
        });
        // console.log(text);

        response.status(200);
        response.send(text);
      })
      .catch((err) => {
        response.status(500);
        response.send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((students) => {
        response.status(200);
        response.send(`List: ${students[major].join(', ')}`);
      })
      .catch((err) => {
        response.status(500);
        response.send(err.message);
      });
  }
}

module.exports = StudentsController;
