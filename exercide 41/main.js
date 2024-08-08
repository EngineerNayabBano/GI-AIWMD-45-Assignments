"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
let magician_name = ["wajid", "nayab", "bilal"];
show_magicians(magician_name);
