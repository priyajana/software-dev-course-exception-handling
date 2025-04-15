const prompt = require("prompt-sync")();

/*
===========================================
🐾 Debugging & Exception Handling Activity
===========================================

🎯 Activity Overview:
Students will be presented with a partially written program containing
runtime and logic errors. Their goal is to debug the program, identify
exceptions, and implement appropriate try/catch blocks.

---

📘 Scenario:
You’ve been hired to help a local pet shelter digitize its animal adoption records.

The program is intended to:
- Allow users to enter an animal type and adoption fee
- Add the animal and fee to a list
- Retrieve the adoption fee for a specific animal

Unfortunately, the original developer left the program with bugs and missing error handling.
Your job is to fix it!

---

🧭 Instructions:

1️⃣ Understand the Errors:
   - Run the program
   - Observe any thrown exceptions
   - Document what went wrong and where

2️⃣ Write Exception Handling Code:
   - Use `try/catch` blocks to catch runtime issues

3️⃣ Test and Debug:
   - Try valid and invalid inputs
   - Ensure the program handles errors gracefully and continues running
*/

// ============================================
// 🐞 Initial Code with Bugs (to be debugged)
// ============================================

let animals = [];
let fees = [];

function addAnimal(name, fee) {
    if (name == "") {
        throw new Error("Please enter an animal name!");
    }
    else if (fee < 0 || fee == "" )
        {
            throw new Error ("Please enter a valid fee.");
        }
    
    animals.push(name);
    fees.push(fee);
}

function getAdoptionFee(animalName) {
    let index = animals.indexOf(animalName);
    if (index === -1) {
        throw new Error("Animal not found in records!");
    }
    return fees[index];
}

// ============================================
// 🚀 Main Program Logic
// ============================================

console.log("Welcome to the Pet Shelter System");

while (true) {
    try {
        let action = prompt("Choose an action: 'add', 'fee', or 'exit': ").toLowerCase();

        if (action === "exit") {
            console.log("Goodbye!");
            break;
        }

        if (action === "add") {
            let animal = prompt("Enter the animal's name: ");
            let fee = Number(prompt("Enter the adoption fee: "));

            try {
                addAnimal(animal, fee);
                console.log(`${animal} added with a fee of $${fee}.`);
            } catch (err) {
                console.log("Error adding animal:", err.message);
            }

        } else if (action === "fee") {
            let animal = prompt("Enter the animal's name to find its adoption fee: ");

            try {
                let fee = getAdoptionFee(animal);
                console.log(`${animal}'s adoption fee is $${fee}.`);
            } catch (err) {
                console.log("Error retrieving fee:", err.message);
            }

        } else {
            console.log("Invalid action. Please choose 'add', 'fee', or 'exit'.");
        }

     } catch (err) {
        console.log("Unexpected error:", err.message);
    }
}

// ============================================
// 🧩 Problems to Solve
// ============================================

/*  
    Errors Encountered
    ---------------------
    1.Original output was unexpected error for
    not installing the prompt module using npm.

    2.If animal field is left blank or if fee entered in negative,
    Error displayed : Error adding animal:Invalid animal name or adoption fee!

    3.If fee option chosen and if the entered animal name is not in records,
    Error displayed : Error retrieving fee: Animal not found in records!

    4. If action chosen is not add, fee, or exit,
    Error displayed : Invalid action. Please choose 'add', 'fee', or 'exit'.


🔹 Invalid Input Errors:
- What if the user enters a negative fee?
    Display an error msg to enter a valid fee
- What if the animal name is blank?
    Display an error msg to enter animal name
- What if an animal isn't found?
    Display a error msg animal not found.

🔹 Code Flow Problems:
- What happens when an exception is thrown?
    The error gets caught in the catch block and based on the error, a customized message is displayed on the console.
- Does the rest of the program continue?
    Yes, the rest of the program continues prompting the user to select an option to proceed.

🔹 Structured Exception Handling:
- Add `try/catch` blocks to catch these errors and allow the app to continue running.
*/


