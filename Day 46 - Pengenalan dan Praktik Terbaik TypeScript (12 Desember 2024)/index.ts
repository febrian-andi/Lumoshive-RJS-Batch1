// 1. Deklarasikan variabel berikut dengan tipe data yang sesuai:
// Variabel username yang berisi string "Alice".
// Variabel age yang berisi angka 25.
// Variabel isAdmin yang berisi nilai boolean true.
// Variabel colors yang berisi array string ["red", "green", "blue"].
const username: string = "Alice";
const age: number = 25;
const isAdmin: boolean = true;
const colors: string[] = ["red", "green", "blue"];
console.log("Nomor 1: ", username, age, isAdmin, colors);

// 2. Buat fungsi bernama multiply yang menerima dua parameter bertipe number dan
// mengembalikan hasil perkalian keduanya.
function multiply(a: number, b: number): number {
  return a * b;
}
console.log("Nomor 2: ", multiply(2, 3));

// 3. Buat interface Car dengan properti:
// brand (string)
// model (string)
// year (number)
// Lalu, buat variabel bernama myCar yang sesuai dengan interface tersebut.
type Car = {
  brand: string;
  model: string;
  year: number;
};

const myCar: Car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};
console.log("Nomor 3: ", myCar);

// 4. Buat variabel bernama userId yang dapat bertipe string atau number.
// Berikan nilai awal "123".
type UserId = string | number;
const userId: UserId = "123";
console.log("Nomor 4: ", userId);

// 5. Buat class bernama Animal dengan properti name (string) dan
// method makeSound yang mencetak "Some generic sound".
// Lalu, buat instance dari class tersebut.
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Some generic sound");
  }
}
const animal = new Animal("Cat");
console.log("Nomor 5: ", animal.name);

// 6. Buat class Dog yang mewarisi dari class Animal.
// Override method makeSound untuk mencetak "Woof!".
class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}
const dog = new Dog("Husky");
console.log("Nomor 6: ", dog.name);

// 7. Buat fungsi generic bernama identity yang menerima satu parameter dan
// mengembalikan parameter tersebut.
function identity<T>(value: T): T {
  return value;
}
console.log("Nomor 7: ", identity<string>("Hello"));

// 8. Buat type alias Point untuk mendefinisikan objek dengan properti:
// x (number)
// y (number)
// Lalu buat variabel pointA dengan nilai { x: 10, y: 20 }.
type Point = {
  x: number;
  y: number;
};
const pointA: Point = { x: 10, y: 20 };
console.log("Nomor 8: ", pointA);

// 9. Buat class BankAccount dengan:
// Properti private balance (number).
// Method deposit untuk menambah saldo.
// Method getBalance untuk mendapatkan saldo.
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}
const account = new BankAccount(100);
account.deposit(50);
console.log("Nomor 9: ", account.getBalance());

// 10. Buat interface User dengan properti:
// id (readonly, number)
// name (string)
type User = {
  readonly id: number;
  name: string;
};
const user: User = { id: 1, name: "Alice" };
console.log("Nomor 10: ", user);

// 11. Buat interface Profile dengan properti:
// name (string)
// age (number)
// Gunakan Partial untuk membuat variabel profileUpdate di mana semua properti opsional.
type Profile = {
  name: string;
  age: number;
};
const profileUpdate: Partial<Profile> = { name: "Bob" };
console.log("Nomor 11: ", profileUpdate);

// 12.	Buat enum Role dengan nilai:
// Admin
// User
// Guest
// Lalu buat variabel currentRole dengan nilai Role.User.
enum Role {
  Admin,
  User,
  Guest,
}
const currentRole: Role = Role.User;
console.log("Nomor 12: ", currentRole);

// 13.	Buat dua type alias Employee dan Manager,
// lalu gabungkan keduanya menggunakan intersection type.
type Employee = {
  employeeId: number;
  department: string;
};
const employee: Employee = {
  employeeId: 100,
  department: "Sales",
};

type Manager = {
  teamSize: number;
  hasDirectReports: boolean;
};

type ManagerEmployee = Employee & Manager;
const manager: ManagerEmployee = {
  employeeId: 101,
  department: "Engineering",
  teamSize: 5,
  hasDirectReports: true,
};
console.log("Nomor 13: ", manager);

// 14. Buat sebuah objek person dengan properti opsional address.
// Gunakan optional chaining untuk mengakses city di dalam address.
const person: { address?: { city?: string } } = {
  address: { city: "New York" },
};
const city = person.address?.city;
console.log("Nomor 14: ", city);

// 15. Buat fungsi calculateDiscount yang menerima dua parameter:
// price (number)
// discount (number, default: 10)
// Fungsi mengembalikan harga setelah diskon.
function calculateDiscount(price: number, discount: number = 10): number {
  return price - (price * discount) / 100;
}
const discountedPrice = calculateDiscount(100);
console.log("Nomor 15: ", discountedPrice);
