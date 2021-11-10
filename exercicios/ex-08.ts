import { PersonFactory } from "./models-ex-08/personFactory";


const personFactory = new PersonFactory();
const person1 = personFactory.getPerson(1, 'Ada Lovelace', "Ada's bio");


console.log(person1.name)
console.log(person1.bio)