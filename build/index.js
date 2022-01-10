"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// number
var numbersCollection = new NumbersCollection_1.NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
// character
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);
// linkedList
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
