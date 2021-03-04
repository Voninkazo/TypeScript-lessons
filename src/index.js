console.log("Hello");
//How we access the types in TS
var number = 5;
var string = "Sandy";
var boolean = true;
var anything = 3; // it can get any types like number or string ...
// const neverType: never = 4;
var me = false; //null type
// const notDefined: undefined = "names";
// const nullType: null = 0;
var together = [4, 'anything', false];
// Functions in TS
var sayWord = function(word) {
    console.log(word);
    return word;
};
var sayWords = function(word) {
    return word;
};
var sayBoth = function(word) {
    return "both";
};
var sayWordNum = function(WordNum) {
    return 5;
};
//Optional parametre
var sayOptionalParametre = function(word) {
    return word || 'hello';
};
//You don't need to say the type when you do like this as default parametre
var sayNotype = function(word) {
    if (word === void 0) { word = 'noTypeHere'; }
    return word;
};
//default parameter and rest parameter together
var sayRestParams = function(word) {
    if (word === void 0) { word = 'noTypeHere'; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    return word;
};
var sayDeclareArr = function(word) {
    if (word === void 0) { word = 'noTypeHere'; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    return word;
};
sayWord('names');
sayOptionalParametre();
sayRestParams('notype', 'saywords', 'otherStuff');
sayDeclareArr('string', 3, 5);
//explicit means it is clear but implicit is nature thing that you have known already
//This is implicit type
var newName = 'Esline';
newName = 'Rasoanirina';
var otheName = newName;
otheName = 'Razafindratsiava'; //not otherName = 3;
//Implicit Type in TS
var newNames = 'whatever';
newNames = 'letter';
newNames = 5;
newNames = true;
// Union Types with |
var makeMargin = function(x) {
    return "margin: " + x + "px";
};
makeMargin(20);
makeMargin('string');
makeMargin(false);
//Good to know 
var makeMargins = function(x) {
    return "margin: " + x + "px";
};
//The boolean gives error beacuse it is explicity or unclear
makeMargins(20);
makeMargins('string');
// makeMargins(false); Here is throwing errors
//Type NULL
var dog;
dog = null; // it works
console.log('dog', dog);
dog = 'boby';
dog = undefined; // works also
// instead we can use
var dogs = 'itsName';