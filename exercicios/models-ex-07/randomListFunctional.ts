// 7 - Crie uma classe que receba uma lista (númerica ou não) e retorne outra contendo:
//   a) O maior valor;
//   b) O menor valor;
//   c) O valor médio.
// Demonstre essa classe com o paradigma funcional e imperativo


/**
 * RandomList
 * 
 * This class is responsible for receiving an array and implementing some methods to return its biggest,
 * medium and smallest element as an array
 */
export class RandomList{
    constructor(private _list : any[], private _biggestMediumSmallest : number[] = [] ){}
    
    /**
     * listIsEmpty
     * 
     * This method is responsible for verify if _list is empty
     * 
     * @returns true or false
     */
    private listIsEmpty () : boolean {
        if(this._list.length == 0) return true;
        else return false;
    }

    /**
     * filterElements
     * 
     * This method is reponsible for verify if the elements in _list are number or not
     * 
     * @returns a new array containing number elements or a new array empty
     */
    private filterElements() : number[] {
        if(!this.listIsEmpty()) {
            return this._list.filter((element : any) => !isNaN(element));
            
        }
        else return [];
    }

    /**
     * addElement
     * 
     * This method is responsible for adding new elements in array _biggestMediumSmallest
     * 
     * @param element 
     */
    private addElement(element : number) {
        this._biggestMediumSmallest.push(element);
    }

    /**
     * biggest
     * 
     * This method is reponsible for adding the biggest element in the array _biggestMediumSmallest
     */
    private biggest() : void {
        this.addElement((this.filterElements()).reduce((previousValue : number, currentValue) => Math.max(previousValue, currentValue)));
    }

    /**
     * medium
     * 
     * This method is reponsible for adding the medium element in the array _biggestMediumSmallest
     */
    private medium() : void {
        this.addElement(((this.filterElements()).reduce((previousValue : number, currentValue : number) => previousValue + currentValue)) / this.filterElements().length);
    }

    /**
     * smallest
     * 
     * This method is reponsible for adding the smallest element in the array _biggestMediumSmallest
     */
    private smallest() {
        this.addElement((this.filterElements()).reduce((previousValue : number, currentValue : number) => Math.min(previousValue, currentValue)));
    }

    /**
     * getBiggestMediumSmallest
     * 
     * @returns an array containing the biggest, medium e smallest element of the received list
     */
    public getBiggestMediumSmallest() : number[] {
        this.biggest();
        this.medium();
        this.smallest();
        return this._biggestMediumSmallest;
    }
}