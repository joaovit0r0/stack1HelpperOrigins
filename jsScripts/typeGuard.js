"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeGuardAda = void 0;
var typeGuardAda = function (person) {
    if (person.whoCreatedAdaLanguage) {
        return true;
    }
    else
        return false;
};
exports.typeGuardAda = typeGuardAda;
