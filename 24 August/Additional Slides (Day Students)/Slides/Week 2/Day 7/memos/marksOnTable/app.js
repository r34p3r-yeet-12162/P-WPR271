
// Function to create and display the table
function createMarksTable() {
    // Create a table element
    const table = document.createElement('table');

    // Create the table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Student', 'Marks'];
    
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement('tbody');
    for (let i = 1; i <= 5; i++) {
        const studentName = prompt(`Enter the name of student ${i}:`);
        const studentMarks = prompt(`Enter the marks for ${studentName}:`);

        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = studentName;
        row.appendChild(nameCell);

        const marksCell = document.createElement('td');
        marksCell.textContent = studentMarks;
        row.appendChild(marksCell);

        tbody.appendChild(row);
    }

    table.appendChild(tbody);

    // Append the table to the div
    const container = document.querySelector('#marksContainer');
    container.innerHTML = ''; // Clear previous content if any
    container.appendChild(table);
}


