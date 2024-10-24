// 1. Single Responsibility Principle (SRP)
// Setiap class atau fungsi hanya boleh memiliki satu tanggung jawab.
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// Tanggung jawab UserValidator adalah untuk memeriksa apakah user valid.
class UserValidator {
  isValid(user) {
    return user.name !== "" && user.email !== "";
  }
}

// Tanggung jawab UserRepository adalah untuk menangani penyimpanan data user.
class UserRepository {
  save(user) {
    console.log(`${user.name} disimpan ke database.`);
  }
}

const user1 = new User("Alice", "alice@example.com");
const validator = new UserValidator();
const repository = new UserRepository();

if (validator.isValid(user1)) {
  repository.save(user1);
}


// 2. Open/Closed Principle (OCP)
// class harus terbuka untuk perluasan tetapi tertutup untuk modifikasi.
class Shape {
  area() {
    throw new Error("Metode area harus diimplementasikan!");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach((shape) => console.log(`Luas: ${shape.area()}`));


// 3. Liskov Substitution Principle (LSP)
// Subclass harus dapat menggantikan class induk tanpa merusak aplikasi.
class Bird {
  fly() {
    console.log("Burung ini bisa terbang.");
  }
}

class Penguin extends Bird {
  fly() {
    console.log("Penguin tidak bisa terbang, tetapi mereka bisa berenang!");
  }
}

const bird = new Bird();
const penguin = new Penguin();
bird.fly();
penguin.fly();


// 4. Interface Segregation Principle (ISP)
// Tidak boleh dipaksa untuk mengimplementasikan metode yang tidak digunakan.
class Printer {
  print(document) {
    console.log(`Mencetak: ${document}`);
  }
}

class Scanner {
  scan() {
    console.log("Memindai dokumen...");
  }
}

const printer = new Printer();
printer.print("DokumenSaya.pdf");


// 5. Dependency Inversion Principle (DIP)
// Modul tingkat tinggi harus bergantung pada abstraksi, bukan pada implementasi konkret.
class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  saveUser(user) {
    if (user.name) {
      this.repository.save(user);
    }
  }
}

const userRepo = new UserRepository();
const userService = new UserService(userRepo);
userService.saveUser(user1);

// Prinsip OOP
// 1. Encapsulation: Mengelompokkan data dan metode yang terkait, menyembunyikan kompleksitas dari luar.
class BankAccount {
  #balance
  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;

    this.deposit = function (amount) {
      if (amount > 0) {
        this.#balance += amount;
      }
    };

    this.getBalance = function () {
      return this.#balance;
    };
  }
}

const myAccount = new BankAccount("Bob", 1000);
console.log(myAccount.getBalance());
myAccount.deposit(500);
console.log(myAccount.getBalance());


// 2. Inheritance: Subclass mewarisi perilaku dari class induk.
class Animal {
  speak() {
    console.log("Suara hewan.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Anjing menggonggong.");
  }
}

const myDog = new Dog();
myDog.speak();


// 3. Polymorphism: Kemampuan objek untuk mengambil banyak bentuk.
class Shape2 {
  draw() {
    console.log("Menggambar bentuk.");
  }
}

class Circle2 extends Shape2 {
  draw() {
    console.log("Menggambar lingkaran.");
  }
}

class Square2 extends Shape2 {
  draw() {
    console.log("Menggambar persegi.");
  }
}

const shapes2 = [new Circle2(), new Square2()];
shapes2.forEach((shape) => shape.draw());


// 4. Abstraction: Menyediakan antarmuka sederhana tanpa mengekspos detail implementasi.
class Car {
  start() {
    this.#startEngine();
  }

  #startEngine() {
    console.log("Mesin dihidupkan.");
  }
}

const myCar = new Car();
myCar.start();