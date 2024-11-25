// Main Code
export function add(a, b) {
    return a + b;
  }
  
  export const fruitsList = ["apple", "banana", "cherry"];
  
  export const user = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
  };
  
  export function promiseFunction() {
    return new Promise((resolve, reject) => {
      resolve("Promise Test");
    });
  }
  
  export async function asyncFunction() {
    return "Async Test";
  }
  
  export async function asyncFunctionObject() {
    return {
      name: "John Doe",
      age: 30,
      email: "john@example.com",
    };
  }
  
  export function errorTest() {
    throw new Error("Error Test");
  }
  
  // Mocking axios
  import axios from "axios";
  export const getUser = async (id) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
  };
  
  // Mock function for testing
  export const mockFunction = jest.fn().mockResolvedValue({ data: "Mock Test" });
  
  // Snapshot testing
  export const snapshotTest = (name) => {
    return `Hello, ${name}`;
  };
  