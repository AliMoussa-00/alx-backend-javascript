interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Ali',
	lastName: 'Moussa',
	age: 23,
	location: 'mdiq',
};
const student2: Student = {
	firstName: 'Ahmed',
	lastName: 'Moussa',
	age: 21,
	location: 'tetouan',
};

const studentList: Student[] = [student1, student2];

/**
 * using DOM to create table from 'studentList'
 * @param {Student[]} - list of students
 * @returns {void}
 */
const createStudentsTable = (studentList: Student[]): void => {
	const table = document.createElement('table');
	// creating the table header
	const header = document.createElement('thead');
	const headerRow = document.createElement('tr');

	const headerFirstName = document.createElement('th');
	headerFirstName.textContent = 'First Name';
	const headerLocation = document.createElement('th');
	headerLocation.textContent = 'Location';

	headerRow.appendChild(headerFirstName);
	headerRow.appendChild(headerLocation);
	header.appendChild(headerRow);
	table.appendChild(header);

	// creating the table body and populating it with data:
	const tableBody = document.createElement('tbody');

	studentList.forEach((student) => {
		const trow = document.createElement('tr');

		const firstNameCell = document.createElement('td');
		firstNameCell.textContent = student.firstName;

		const locationCell = document.createElement('td');
		locationCell.textContent = student.location;

		trow.appendChild(firstNameCell);
		trow.appendChild(locationCell);
		tableBody.appendChild(trow);
	});

	// Append the table body to the table
	table.appendChild(tableBody);

	// Appending the table to the document Body
	document.body.appendChild(table);
};

createStudentsTable(studentList);

// Creating the <style> element
const styleElement = document.createElement('style');
styleElement.innerHTML = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;
document.head.appendChild(styleElement);
document.title = 'Task 0';
