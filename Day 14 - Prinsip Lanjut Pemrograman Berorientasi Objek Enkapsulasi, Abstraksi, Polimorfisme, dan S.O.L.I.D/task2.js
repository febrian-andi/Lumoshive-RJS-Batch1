// Class untuk mengelola produk
class Product {
    #name;
    #price;
    #stock;
    constructor(name, price, stock) {
        this.#name = name;  // Encapsulation: Properti disimpan secara pribadi
        this.#price = price;
        this.#stock = stock;
    }

    // Getter untuk nama produk
    get name() {
        return this.#name;
    }

    // Getter untuk harga produk
    get price() {
        return this.#price;
    }

    // Getter untuk stok produk
    get stock() {
        return this.#stock;
    }

    // Setter untuk stok produk
    set stock(value) {
        if (value >= 0) {
            this.#stock = value;  // Validasi untuk memastikan stok tidak negatif
        } else {
            throw new Error("Stok tidak bisa negatif.");
        }
    }

    // Metode untuk mengurangi stok produk setelah transaksi
    reduceStock(quantity) {
        if (quantity > this.#stock) {
            throw new Error("Stok tidak cukup.");
        }
        this.stock -= quantity;  // Mengurangi stok
    }
}

// Class untuk produk digital yang mewarisi dari Product
class DigitalProduct extends Product {
    #downloadLink;
    constructor(name, price, stock, downloadLink) {
        super(name, price, stock);  // Memanggil constructor Class induk
        this.#downloadLink = downloadLink;  // Encapsulation
    }

    // Getter untuk link unduhan
    get downloadLink() {
        return this.#downloadLink;
    }
}

// Class untuk mengelola transaksi
class Transaction {
    constructor() {
        this.transactions = [];  // Mengelola daftar transaksi
    }

    // Metode untuk menambahkan transaksi
    addTransaction(product, quantity) {
        product.reduceStock(quantity);  // Mengurangi stok produk
        const total = product.price * quantity;  // Menghitung total harga
        const transactionDetail = {
            product: product.name,
            total: total,
        };
        this.transactions.push(transactionDetail);  // Menyimpan detail transaksi
        return transactionDetail;  // Mengembalikan detail transaksi
    }
}

// Class untuk menyimpan laporan penjualan
class Report {
    constructor() {
        this.salesReport = [];  // Mengelola laporan penjualan
    }

    // Metode untuk menambahkan laporan penjualan
    addReport(transaction) {
        this.salesReport.push(transaction);  // Menyimpan transaksi ke laporan
    }

    // Metode untuk menampilkan laporan
    displayReport() {
        this.salesReport.forEach((transaction, index) => {
            console.log(`Transaksi ${index + 1}: ${transaction.product} - Total: ${transaction.total}`);
        });
    }
}

const laptop = new Product("Laptop", 30000000, 10);  // Membuat objek produk
const ebook = new DigitalProduct("E-book", 50000, 100, "https://example.com/download");  // Membuat objek produk digital

const transactionManager = new Transaction();  // Membuat objek pengelola transaksi
const reportManager = new Report();  // Membuat objek pengelola laporan

const transaction1 = transactionManager.addTransaction(laptop, 1);  // Menambahkan transaksi
reportManager.addReport(transaction1);  // Menambahkan laporan transaksi

const transaction2 = transactionManager.addTransaction(ebook, 1);  // Menambahkan transaksi
reportManager.addReport(transaction2);  // Menambahkan laporan transaksi

// Menampilkan laporan penjualan
reportManager.displayReport();
