test("10 / 2", () => {
  const value = 10 / 2;
  expect(value).toBe(5);
  expect(value).toBeGreaterThan(2);
  expect(value).toBeGreaterThanOrEqual(5);
  expect(value).toBeLessThan(10);
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});
