import { PersonFactory } from "./models-ex-08/personFactory";
import { typeGuardAda } from "./models-ex-08/typeGuard";


const personFactory = new PersonFactory();
const person1 = personFactory.getPerson(1, 'Ada Lovelace', "Ada's bio")


if(typeGuardAda(person1)) {
    console.log(person1.name);
    console.log(person1.bio);
    console.log(person1.whoCreatedAdaLanguage);
}
