function greet() {
    return `Hello my name is ${Person.name} & i am ${Person.age} year old.`
}
 
const Person = {
    name : "Aditya",
    age :28,
    greet,
};
console.log(Person.greet())

//----------------------------------

const human = {
    name : "Aditya Rawat",
    age : 28,
    info : function() {
        return `Hello my name is ${human.name} & i am ${human.age} year old.`
    }
}
console.log(human.info())