let totalCost = 0; // Initialize total cost

// Function to calculate rental days
function calculateRentalDays(hireDate, returnDate) {
    const hire = new Date(hireDate);
    const returnD = new Date(returnDate);
    const differenceInTime = returnD.getTime() - hire.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // Convert milliseconds to days
    return differenceInDays;
}

// Function to add a new car booking
function addBooking(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const carModel = document.querySelector('#carModel').value;
    const hireDate = document.querySelector('#hireDate').value;
    const returnDate = document.querySelector('#returnDate').value;
    const dailyRate = document.querySelector('#dailyRate').value;

    // Calculate rental days
    const rentalDays = calculateRentalDays(hireDate, returnDate);

    // Calculate total cost
    const bookingCost = rentalDays * dailyRate;
    totalCost += bookingCost;

    // Create new list item with HTML for line breaks
    const para = document.querySelector('#carBooking');
    para.innerHTML = `
        Car Model: ${carModel}<br>
        Hire Date: ${hireDate}<br>
        Return Date: ${returnDate}<br>
    `;
 

    // Create new table row
    const tableContainer = document.querySelector('#tableContainer');
    let table = document.querySelector('#bookingTable');

    if (!table) {
        table = document.createElement('table');
        table.id = 'bookingTable';

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['Car Model', 'Hire Date', 'Return Date', 'Rental Days', 'Daily Rate', 'Total Cost'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        table.appendChild(document.createElement('tbody'));
        tableContainer.appendChild(table);
    }

    const tbody = table.querySelector('tbody');
    const row = document.createElement('tr');

    const modelCell = document.createElement('td');
    modelCell.textContent = carModel;
    row.appendChild(modelCell);

    const hireCell = document.createElement('td');
    hireCell.textContent = hireDate;
    row.appendChild(hireCell);

    const returnCell = document.createElement('td');
    returnCell.textContent = returnDate;
    row.appendChild(returnCell);

    const daysCell = document.createElement('td');
    daysCell.textContent = rentalDays;
    row.appendChild(daysCell);

    const rateCell = document.createElement('td');
    rateCell.textContent = `R${dailyRate}`;
    row.appendChild(rateCell);

    const costCell = document.createElement('td');
    costCell.textContent = `R${bookingCost.toFixed(2)}`;
    row.appendChild(costCell);

    tbody.appendChild(row);

    // Update total cost display
    let totalContainer = document.querySelector('#totalContainer');
    if (!totalContainer) {
        totalContainer = document.createElement('div');
        totalContainer.id = 'totalContainer';
        tableContainer.appendChild(totalContainer);
    }
    totalContainer.textContent = `Total Rental Cost: R${totalCost.toFixed(2)}`;

    // Clear form fields
    //document.querySelector('#carHireForm').reset();
}

// Attach the form submission handler
document.querySelector('#carHireForm').onsubmit = addBooking;
