"use strict";
exports.__esModule = true;
var randomListFunctional_1 = require("../exercicios/models-ex-07/randomListFunctional");
var randomListImperative_1 = require("../exercicios/models-ex-07/randomListImperative");
var list1 = new randomListFunctional_1.RandomList([1, 2, 'aaa', 3, 'bbb', 4, 5]);
console.log(list1.getBiggestMediumSmallest());
var list2 = new randomListImperative_1.RandomListImperative([1, 2, 'aaa', 3, 'bbb', 4, 5]);
console.log(list2.getBiggestMediumSmallest());
