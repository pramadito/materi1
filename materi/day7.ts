


function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Budi");
      } else {
        reject("Terjadi Kesalahan");
      }
    }, 2000);
  });
}

fetchData()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("promise selesai");
  });

const fetchUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      console.log(users);
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchUser();

// cara baru
const getUserBudi = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUserBudi();

const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
    if (!response.ok){
        //throw "terkado kesalahan";
        throw new Error("Terjadi Kesalahan");
    }
  } catch (error) {
    console.log(error.message);
  }
};

getUsers();


// JSON ->javascript object notation

// ini javascript object -> tidak ada petik di value
const user = { // object biasa
    name: "budi",
    age: "32"
}

// const user2 = { // JSON
//     "name":"budi",
//     "age": "32"
// }


// convert object js to JSON
const userJSON = JSON.stringify(user);
console.log(userJSON);

// convert JSON to object js
const parseJSON = JSON.parse(userJSON);
console.log(parseJSON);

import helloWorld from "./test.js";
helloWorld();