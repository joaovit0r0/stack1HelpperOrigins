"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(_id, _name, _bio) {
        this._id = _id;
        this._name = _name;
        this._bio = _bio;
    }
    Object.defineProperty(Person.prototype, "bio", {
        get: function () {
            return this._bio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
