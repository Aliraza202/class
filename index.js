"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class car {
    company = "google inc";
    price = 212;
    color = "black";
    constructor(a, b, c) {
        this.company = a;
        this.price = b;
        this.color = c;
    }
}
var carObject = new car("honda", 500, "white");
var carObject1 = new car("kia", 200, "blue");
var carObject2 = new car("toyota", 700, "black");
console.log(carObject);
console.log(carObject1);
console.log(carObject2);
