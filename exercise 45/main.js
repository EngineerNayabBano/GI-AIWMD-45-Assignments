"use strict";
function createCar(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
const mycar = createCar("Toyota", "Fortuner", { color: "white", Year: 2024 });
console.log(mycar);
