import { RandomList } from "./models-ex-07/randomListFunctional";
import { RandomListImperative } from "./models-ex-07/randomListImperative";


const list1 = new RandomList([1, 2, 'aaa', 3, 'bbb', 4, 5])
console.log(list1.getBiggestMediumSmallest())


const list2 = new RandomListImperative([1, 2, 'aaa', 3, 'bbb', 4, 5])
console.log(list2.getBiggestMediumSmallest())