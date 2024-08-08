"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// Define the list of current usernames
const currentUsers = ['wajid', 'nayab', 'bilal', 'areeba', 'samina'];
// Define the list of new usernames
const newUsers = ['Wajid', 'Nayab', 'Bilal', 'Areeba', 'Samina'];
// Function to check if a username is available
function checkUsernameAvailability(currentUsers, newUsers) {
    // Convert all current usernames to lowercase for case-insensitive comparison
    const lowercaseCurrentUsers = currentUsers.map(user => user.toLowerCase());
    // Loop through each new username to check availability
    for (const newUser of newUsers) {
        // Convert the new username to lowercase
        const lowercaseNewUser = newUser.toLowerCase();
        // Check if the username is already in use
        if (lowercaseCurrentUsers.includes(lowercaseNewUser)) {
            console.log(`The username "${newUser}" is already taken. Please choose a different username.`);
        }
        else {
            console.log(`The username "${newUser}" is available.`);
        }
    }
}
// Run the function to check usernames
checkUsernameAvailability(currentUsers, newUsers);
