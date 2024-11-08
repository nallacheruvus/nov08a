import str from "./moda";
import ffa from "./modb";
import BankAccount from "./modc";
import Books from "./modd";
import { first, sec, third, fourth, fifth } from "./mode";
import test from "./tester/myfile";

console.log(str);
ffa();
const obj = new BankAccount("SBI", "Pankaj Sheth");
console.log(JSON.stringify(obj));
const bObj = new Books("Quiet sigh of moor", "Salman Rushdie");
console.log(JSON.stringify(bObj));
first();
sec();
third();
fourth();
fifth();

console.log(test(2));