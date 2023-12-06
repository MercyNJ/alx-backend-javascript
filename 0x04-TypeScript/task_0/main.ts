// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "Mercy",
    lastName: "Njuguna",
    age: 16,
    location: "Mombasa"
};

const student2: Student = {
    firstName: "June",
    lastName: "Doll",
    age: 22,
    location: "Nakuru"
};

const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement('table');

// Create the table header
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
const locationHeader = document.createElement('th');

firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);
table.appendChild(thead);

// Create the table body
const tbody = document.createElement('tbody');
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);

document.body.appendChild(table);
