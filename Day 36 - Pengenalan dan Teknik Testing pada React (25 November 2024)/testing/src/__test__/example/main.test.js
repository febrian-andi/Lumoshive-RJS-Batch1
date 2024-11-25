// Test file
jest.mock("axios"); // Mock axios before importing it
import axios from "axios";

import {
  add,
  fruitsList,
  user,
  promiseFunction,
  asyncFunction,
  asyncFunctionObject,
  errorTest,
  getUser,
  mockFunction,
  snapshotTest,
} from "./main";

// Mock axios behavior
axios.get.mockResolvedValue({
  data: {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
  },
});

// Basic tests
test("add 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("check fruitsList", () => {
  expect(fruitsList).toEqual(["apple", "banana", "cherry"]);
});

test("check user object", () => {
  expect(user).toEqual({
    name: "John Doe",
    age: 30,
    email: "john@example.com",
  });
});

// Promise function tests
test("promiseFunction resolves to 'Promise Test'", () => {
  return expect(promiseFunction()).resolves.toBe("Promise Test");
});

test("promiseFunction resolves to 'Promise Test' (manual check)", () => {
  return promiseFunction().then((res) => expect(res).toBe("Promise Test"));
});

// Async function tests
test("asyncFunction resolves to 'Async Test'", async () => {
  await expect(asyncFunction()).resolves.toBe("Async Test");
});

test("asyncFunction resolves to 'Async Test' (manual check)", async () => {
  const res = await asyncFunction();
  expect(res).toBe("Async Test");
});

test("asyncFunctionObject resolves to user object", async () => {
  const res = await asyncFunctionObject();
  expect(res).toMatchObject({
    name: "John Doe",
    age: 30,
    email: "john@example.com",
  });
});

// Error handling test
test("errorTest throws an error", () => {
  expect(() => errorTest()).toThrow("Error Test");
});

// Axios mocking test
test("test mocking user data", async () => {
  const user = await getUser(1);
  expect(user.name).toBe("John Doe");
});

// Mock function test
test("fetch mock data", async () => {
  const response = await mockFunction();
  expect(response.data).toBe("Mock Test");
});

// Snapshot testing
test("snapshot test", () => {
  expect(snapshotTest("John")).toMatchSnapshot();
});
