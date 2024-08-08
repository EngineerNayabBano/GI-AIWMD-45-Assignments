"use strict";
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magician_names = ["wajid", "nayab", "bilal"];
let great_magicians = make_great(magician_names);
console.log(great_magicians);
