const Person = {
    "name": "Aditya Rawat",
    "age" : 28,
    "email" : "adityarawat@gmail.com",
    "isSubscribed" : true,
    "hobbies" : ["Reading, Walking, Running"],
    "address" : {
        "city" : "New York",
        "idk" : true
    }
} 
const jsonString = JSON.stringify(Person)
console.log(jsonString)
const jsonObject = JSON.parse(jsonString)   // It will return JavaScript Object.
console.log(jsonObject)