const data = {
  data: {
    username: "John Doe",
    age: 30,
    hobbies: ["membaca", "melukis", "bermain"],
    address: [
      {
        address: "123 Main St",
      },
      {
        address: "456 Elm St",
      },
    ],
  },
};

/*
    buatlah sebuah string seperti ini:
    "Hello, my name is John Doe, Hobby saya adalah membaca, melukis, dan bermain. Alamat saya di 456 Elm St"
*/
const result = `Hello, my name is ${data.data.username}, Hobby saya adalah ${data.data.hobbies[0]}, ${data.data.hobbies[1]}, dan ${data.data.hobbies[2]}. Alamat saya di ${data.data.address[1].address}`;

console.log(result);
