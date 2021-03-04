const outPutInput = <T>(arg: T): T => {
    return arg;
}

const outPut = outPutInput('hi'); 
outPutInput('hi');
outPutInput(10);

// Duck Typing

// class Dancer implements Person {
//     name: string;
//     age?: number;
// }

// let ELNio: Person = new Dancer();

// const fake = {
//     name: "Sandy",
//     year: 20
// }
