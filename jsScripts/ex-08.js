"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personFactory_1 = require("../exercicios/models-ex-08/personFactory");
var typeGuard_1 = require("../exercicios/models-ex-08/typeGuard");
var personFactory = new personFactory_1.PersonFactory();
var person1 = personFactory.getPerson(1, 'Ada Lovelace', "Ada's bio");
if ((0, typeGuard_1.typeGuardAda)(person1)) {
    console.log(person1.name);
    console.log(person1.bio);
    console.log(person1.whoCreatedAdaLanguage);
}
