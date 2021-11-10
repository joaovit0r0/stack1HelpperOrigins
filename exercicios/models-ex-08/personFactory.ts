import { Person } from "./person";
import { Ada } from "./ada"
import { Alan } from "./alan"
import { Nikola } from "./nikola"
import { Nicolau } from "./nicolau"


export class PersonFactory {
    public getPerson(id : number, name : string, bio : string) : Person {
        if(name.toLowerCase() === "ada lovelace") {
            return new Ada(id, name, bio);
        }
        else if(name.toLowerCase() === "alan turing") {
            return new Alan(id, name, bio);
        }
        else if(name.toLowerCase() === "nikola tesla") {
            return new Nikola(id, name, bio);
        }
        else if(name.toLowerCase() === "nicolau copernico") {
            return new Nicolau(id, name, bio);
        }
        else {
            return new Person(-1, '-1', '-1')
        }
    }
}