
console.log("Hello");
//How we access the types in TS
const number: number = 5;
const string: string = "Petah";
const boolean: boolean = true;
const anything: any = 3// it can get any types like number or string ...
// const neverType: never = 4;
const me: unknown = false;//null type
// const notDefined: undefined = "names";
// const nullType: null = 0;

const together: [number, string, boolean] = [4, 'anything', false];

// Functions in TS

const sayWord = (word: string) => {
    console.log(word);
    return word
}

const sayWords = (word: string): string => {
    return word
}

const sayBoth = (word: string | number): string => {
    return "both";
}

const sayWordNum = (WordNum: number): number => {
    return 5;
}

//Optional parametre

const sayOptionalParametre = (word?: string): string => {
    return word || 'hello'
}

//You don't need to say the type when you do like this as default parametre

const sayNotype = (word = 'noTypeHere'): string => {
    return word;
}

//default parameter and rest parameter together

const sayRestParams = (word = 'noTypeHere', ...otherStuff): string => {
    return word;
}

const sayDeclareArr = (word = 'noTypeHere', ...otherStuff: number[]): string => {
    return word;
}

sayWord('names');
sayOptionalParametre();
sayRestParams('notype', 'saywords', 'otherStuff');
sayDeclareArr('string', 3, 5);

//explicit means it is clear but implicit is nature thing that you have known already

//This is implicit type

let newName = 'Esline';
newName = 'Rasoanirina';

let otheName = newName;
otheName = 'Razafindratsiava'; //not otherName = 3;

//Implicit Type in TS

let newNames: string | number | boolean = 'whatever';

newNames = 'letter';
newNames = 5;
newNames = true;

// Union Types with |

const makeMargin = (x): string => {
    return `margin: ${x}px`;
}

makeMargin(20);
makeMargin('string');
makeMargin(false);

//Good to know 
const makeMargins = (x: string | number): string => {
    return `margin: ${x}px`;
}

//The boolean gives error beacuse it is explicity or unclear

makeMargins(20);
makeMargins('string');

// makeMargins(false); Here is throwing errors

//Type NULL

let dog: string;
dog = null; // it works
console.log('dog', dog);
dog = 'boby';

dog = undefined; // works also

// instead we can use

let dogs: string | undefined = 'itsName';


