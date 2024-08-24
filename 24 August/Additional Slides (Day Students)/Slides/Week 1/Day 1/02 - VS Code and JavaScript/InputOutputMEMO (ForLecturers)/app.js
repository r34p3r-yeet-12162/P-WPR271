function showPrompt() {
    // Using prompt to get user input
    let userInput = prompt("Enter your name:");

    // Check if user entered something
    if (userInput !== null && userInput !== "") {
        // Output using console.log
        console.log("User input:", userInput);

        // Output using document.write
        document.write("<p>Hello, " + userInput + "! Welcome to WPR2X1.</p>");

        // Output using alert ()
        alert(`Hello, ${userInput} ! Welcome to WPR2X1.`);
    } else {
        alert("You didn't enter anything.");
    }
}