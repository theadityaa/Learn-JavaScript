const person = {
    firstName: "ADITYA",
    lastName: "RAWAT",
    age: 28,
    location: ["BHARAT", "UNIVERSE"],
    isProgrammer: true, 
};
console.log(person)

    //  Accessing items form object
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["age"])
console.log(person["isProgrammer"])

// adding new property || Array in object 

person.CGPA = 7.07
person.region = ["Madhya Pradesh", "Rajsthan"]

// delete property || Array in object
delete person.region;
console.log(person)

//  Task 12✅

const car = {
    type: "SUV",
    modal: "LandRover",
    color: "White",
};
console.log(typeof car)
car.type = "TOYOTA"
car.wheels = "jett Round"
console.log(car)

