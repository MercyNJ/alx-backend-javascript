// Create two student objects
var student1 = {
    firstName: "Mercy",
    lastName: "Njuguna",
    age: 16,
    location: "Mombasa"
};
var student2 = {
    firstName: "June",
    lastName: "Doll",
    age: 22,
    location: "Nakuru"
};
var studentsList = [student1, student2];
// Create a table element
var table = document.createElement('table');
// Create the table header
var thead = document.createElement('thead');
var headerRow = document.createElement('tr');
var firstNameHeader = document.createElement('th');
var locationHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);
table.appendChild(thead);
// Create the table body
var tbody = document.createElement('tbody');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
