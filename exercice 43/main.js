"use strict";
function show_magicians1(magicians) {
    for (const magician of magicians)
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
}
function show_magicians(magicians) {
    for (const magician of magicians)
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' The great';
    }
}
const magicians2 = ["nayab", "wajid", "bilal"];
make_great(magicians2);
show_magicians(magicians2);
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' The great');
    }
    return greatMagicians;
}
const magicians3 = ["khan", "bano", "areeba"];
const greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
