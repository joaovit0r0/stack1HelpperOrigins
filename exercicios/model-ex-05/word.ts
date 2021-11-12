/**
 * Word
 * 
 * This classe is responsible for receiving a word and implementing some methods for count its vowels
 */
 export class Word{
    constructor(private _name : string, private wordLength : number = 0) {}

    /**
     * countVowels
     * 
     * This method is resposible for counting vowels of a word
     * @returns the number of vowels in a word
     */
    public countVowels = () : number => {
        // convert to lower, break as an array to be able to use filter
        this.wordLength = this._name.toLowerCase().split('').filter((caractere : string) =>{
            return 'aeiou'.includes(caractere);
        }).length;
        return this.wordLength;
    }

    /**
     * activate
     * 
     * This method is responsible for getting a word through html form and show how many
     * vowels it has
     */
    public activate = () : void => {
        this._name = (document.getElementById("usuario").value) ;
        alert(this.countVowels) ;
    }
}