"use strict";
exports.__esModule = true;
exports.PersonFactory = void 0;
var ada_1 = require("./ada");
var alan_1 = require("./alan");
var nikola_1 = require("./nikola");
var nicolau_1 = require("./nicolau");
var PersonFactory = /** @class */ (function () {
    function PersonFactory() {
    }
    PersonFactory.prototype.getPerson = function (id, name, bio) {
        if (name.toLowerCase() === "ada lovelace") {
            return new ada_1.Ada(id, name, bio, name);
        }
        else if (name.toLowerCase() === "alan turing") {
            return new alan_1.Alan(id, name, bio);
        }
        else if (name.toLowerCase() === "nikola tesla") {
            return new nikola_1.Nikola(id, name, bio);
        }
        else if (name.toLowerCase() === "nicolau copernico") {
            return new nicolau_1.Nicolau(id, name, bio);
        }
    };
    return PersonFactory;
}());
exports.PersonFactory = PersonFactory;
