"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        // get the length of the data
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    // compare method to compare if left number is greater than right number.
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    // swap method swap the number
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
