"use strict";
exports.__esModule = true;
var interfacesLessons_1 = require("./interfacesLessons");
var sayName = function(name, age) {
    console.log(name);
    return name;
};
sayName('name&numberMustGoHere', 3);
// sayName(4, 'itisNeedtoBeOrdered')
// instead we can do this
// interface Person {
// name: string;
// age?: number;
// }
var sayPerson = function(_a) {
    var name = _a.name,
        age = _a.age;
    console.log(age);
    return { name: name, age: age };
};
sayPerson({
    name: "Sandy",
    age: 50
});
sayPerson({
    name: "Sandy"
}); //without one of the objec
//ENUMS
var createContent = function(contentType) {};
console.log(interfacesLessons_1["default"].Quiz);
var createContentWithStringEnums = function(contentType) {};
console.log(interfacesLessons_1.TypeString.BlogPost);