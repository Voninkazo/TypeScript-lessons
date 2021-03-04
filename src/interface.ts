import Type, { Person, TypeString } from "./interfacesLessons";

const sayName = (name: string, age: number): string => {
    console.log(name);
    return name;
}

sayName('name&numberMustGoHere', 3);
// sayName(4, 'itisNeedtoBeOrdered')

// instead we can do this

// interface Person {
    // name: string;
    // age?: number;
// }

const sayPerson = ({ name, age }: Person): Person => {
    console.log(age);
    return { name, age };
}

sayPerson({
    name: 'petah',
    age: 50
});
sayPerson({
    name: 'petah'
});//without one of the objec

//ENUMS

const createContent = (contentType: Type) => {}
console.log(Type.Quiz);

const createContentWithStringEnums = (contentType: TypeString) => {}
console.log(TypeString.BlogPost);
