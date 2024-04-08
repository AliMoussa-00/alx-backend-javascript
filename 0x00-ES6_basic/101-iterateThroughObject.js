export default function iterateThroughObject(reportWithIterator) {
  let employees = '';

  for (const employee of reportWithIterator) {
    employees += `${employee} | `;
  }

  employees = employees.slice(0, -2);
  return employees;
}
