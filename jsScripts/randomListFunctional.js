"use strict";
// 7 - Crie uma classe que receba uma lista (númerica ou não) e retorne outra contendo:
//   a) O maior valor;
//   b) O menor valor;
//   c) O valor médio.
// Demonstre essa classe com o paradigma funcional e imperativo
exports.__esModule = true;
exports.RandomList = void 0;
/**
 * RandomList
 *
 * This class is responsible for receiving an array and implementing some methods to return its biggest,
 * medium and smallest element as an array
 */
var RandomList = /** @class */ (function () {
    function RandomList(_list, _biggestMediumSmallest) {
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
    RandomList.prototype.listIsEmpty = function () {
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
    RandomList.prototype.filterElements = function () {
        if (!this.listIsEmpty()) {
            return this._list.filter(function (element) { return !isNaN(element); });
        }
        else
            return [];
    };
    /**
     * addElement
     *
     * This method is responsible for adding new elements in array _biggestMediumSmallest
     *
     * @param element
     */
    RandomList.prototype.addElement = function (element) {
        this._biggestMediumSmallest.push(element);
    };
    /**
     * biggest
     *
     * This method is reponsible for adding the biggest element in the array _biggestMediumSmallest
     */
    RandomList.prototype.biggest = function () {
        this.addElement((this.filterElements()).reduce(function (previousValue, currentValue) { return Math.max(previousValue, currentValue); }));
    };
    /**
     * medium
     *
     * This method is reponsible for adding the medium element in the array _biggestMediumSmallest
     */
    RandomList.prototype.medium = function () {
        this.addElement(((this.filterElements()).reduce(function (previousValue, currentValue) { return previousValue + currentValue; })) / this.filterElements().length);
    };
    /**
     * smallest
     *
     * This method is reponsible for adding the smallest element in the array _biggestMediumSmallest
     */
    RandomList.prototype.smallest = function () {
        this.addElement((this.filterElements()).reduce(function (previousValue, currentValue) { return Math.min(previousValue, currentValue); }));
    };
    /**
     * getBiggestMediumSmallest
     *
     * @returns an array containing the biggest, medium e smallest element of the received list
     */
    RandomList.prototype.getBiggestMediumSmallest = function () {
        this.biggest();
        this.medium();
        this.smallest();
        return this._biggestMediumSmallest;
    };
    return RandomList;
}());
exports.RandomList = RandomList;
