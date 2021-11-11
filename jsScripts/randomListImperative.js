"use strict";
// 7 - Crie uma classe que receba uma lista (númerica ou não) e retorne outra contendo:
//   a) O maior valor;
//   b) O menor valor;
//   c) O valor médio.
// Demonstre essa classe com o paradigma funcional e imperativo
exports.__esModule = true;
exports.RandomListImperative = void 0;
/**
 * RandomListImperative
 *
 * This class is reponsible for receiving an array and implemeting some methods to return its biggest,
 * medium and smallest element as an aray
 */
var RandomListImperative = /** @class */ (function () {
    function RandomListImperative(_list, _biggestMediumSmallest) {
        if (_biggestMediumSmallest === void 0) { _biggestMediumSmallest = []; }
        this._list = _list;
        this._biggestMediumSmallest = _biggestMediumSmallest;
    }
    /**
     * listIsEmpty
     *
     * This method is responsible for verify if _list is empty
     *
     * @returns true or false
     */
    RandomListImperative.prototype.listIsEmpty = function () {
        if (this._list.length == 0)
            return true;
        else
            return false;
    };
    /**
     * filterElements
     *
     * This method is reponsible for verify if the elements in _list are number or not
     *
     * @returns a new array containing number elements or a new array empty
     */
    RandomListImperative.prototype.filterElements = function () {
        if (!this.listIsEmpty()) {
            this._list = this._list.filter(function (element) { return !isNaN(element); });
        }
    };
    /**
     * addElements
     *
     * This method is reposible for adding the biggest. medium and smallest element in the array _biggestMediumSmallest
     */
    RandomListImperative.prototype.addElements = function () {
        this.filterElements();
        var biggest = this._list[0];
        var medium = this._list[0];
        var smallest = this._list[0];
        for (var i = 0; i < this._list.length; i++) {
            if (this._list[i] > biggest)
                biggest = this._list[i];
            if (this._list[i] < smallest)
                smallest = this._list[i];
            medium += this._list[i];
        }
        medium = (medium / this._list.length);
        this._biggestMediumSmallest = [biggest, medium, smallest];
    };
    /**
     * getBiggestMediumSmallest
     *
     * @returns an array containing the biggest, medium e smallest element of the received list
     */
    RandomListImperative.prototype.getBiggestMediumSmallest = function () {
        this.addElements();
        return this._biggestMediumSmallest;
    };
    return RandomListImperative;
}());
exports.RandomListImperative = RandomListImperative;
