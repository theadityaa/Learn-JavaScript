let songs = [
    {name : "Zindagi ke Safar me", singer : "Kishore Kumar", duration : 4.30},
    {name : "Likhe jo Khat tuje", singer : "Mohammed Rafi", duration : 5.10},
    {name : "kisi ki muskurahaton pe", singer : "Mukesh Chand Mathur", duration : 6.05},
    {name : "Gori tera gaon bada pyara", singer : "YashuDas", duration : 4.40},
    {name : "Toone Dil Ke Rakibon Sang", singer : "Sonu Nigam", duration : 5.30},
]

const [, , , {singer : s}] = songs
console.log(s);
//-----------------------------------------------------------------------------------------

// Nested Destructuring 

const data = {
  user: {
    id: 123,
    name: "John wick",
    age: 30,
    email: "john.wick@example.com",
    address: {
      city: "New York",
      country: "USA",
    },
    hobbies: ["Reading", "Painting", "Cooking"],
    scores: {
      math: 95,
      science: 88,
      history: 75,
    },
  },
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
  ],
  settings: {
    darkMode: true,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
  },
};

// Extracting data using object destructuring
const {
  user: {
    name,
    age,
    address: { city, country },
    hobbies,
    scores: { math, science, history },
    email,
  },
  products: [product1, product2, product3],
  settings: {
    darkMode,
    notifications: {
      email: emailNotifications,
      sms: smsNotifications,
      push: pushNotifications,
    },
    language,
  },
} = data;

// Logging the extracted data using template literals
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Address: ${city}, ${country}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Math Score: ${math}`);
console.log(`Science Score: ${science}`);
console.log(`History Score: ${history}`);
console.log(`Product 1: ${product1.name} - $${product1.price}`);
console.log(`Product 2: ${product2.name} - $${product2.price}`);
console.log(`Product 3: ${product3.name} - $${product3.price}`);
console.log(`Dark Mode: ${darkMode}`);
console.log(`Email Notifications: ${emailNotifications}`);
console.log(`SMS Notifications: ${smsNotifications}`);
console.log(`Push Notifications: ${pushNotifications}`);
console.log(`Language: ${language}`);