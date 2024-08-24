function displayTable() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    // Create student object
    const studentData = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email
    };
    // Get the output div
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear any existing content

    // Create a paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = `First Name: ${studentData.firstName} Last Name: ${studentData.lastName} | Age: ${studentData.age} | Email: ${studentData.email}`;

    // Append paragraph to output div
    outputDiv.appendChild(paragraph);
    
}
