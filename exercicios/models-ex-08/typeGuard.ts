import { Person } from "./person";
import { Ada } from "./ada";


export const typeGuardAda = (person : Person) : person is Ada => {
    if((person as Ada).whoCreatedAdaLanguage) {
        return true;
    }
    else return false;
}

