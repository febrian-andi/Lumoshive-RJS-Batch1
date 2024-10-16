/*
1. Callback Functions (Fungsi Panggilan Balik)
Analoginya: Bayangkan kamu memesan makanan di restoran cepat saji. Setelah memesan, kamu mendapatkan nomor antrian dan duduk menunggu. Ketika pesananmu sudah siap, pelayan memanggil nomor antrianmu, dan kamu mengambil makanan.
*/
// trik programmer callback
// function pesanMakanan(ketikaSelesai) {
//   setTimeout(() => {
//     ketikaSelesai("pesanan selesai");
//   }, 1000); // menunda eksekusi kode
//   // dibawah
//   console.log("mohon tunggu")
// }
 
// pesanMakanan((pesan)=>{
//   console.log(pesan)
// });
 
/*
2. Promises (Janji)
Analoginya: Janji (promise) adalah seperti memesan barang secara online. Kamu melakukan pesanan dan menunggu barang tiba. Jika barang tiba sesuai janji, kamu menerimanya. Jika terjadi masalah (barang rusak atau hilang), kamu mendapatkan pengembalian uang.
*/
 
// function pesananBarang() {
//   return new Promise((berhasil, gagal) => {
//     setTimeout(() => {
//       berhasil("Barang sudah sampai");
//     }, 2000);
//   });
// }
 
// pesananBarang()
//   .then((pesan) => {
//     console.log(pesan); // barang sudah sampai
//   })
//   .catch((error) => {
//     console.log(error);
//   });
 
/*
3. Async/Await
Analoginya: Ini seperti menunggu temanmu yang sudah berjanji untuk datang mengunjungi rumahmu. Kamu tahu dia akan datang, jadi kamu bisa menunggu dengan tenang, dan ketika dia sampai, kalian bisa langsung berbicara tanpa perlu bolak-balik mengecek.
*/
 
async function tungguKedatanganTeman() {
    const pesan = await new Promise((berhasil, gagal) => {
      setTimeout(() => {
        berhasil("Teman sudah sampai");
      }, 2000);
    });
   
    console.log(pesan);
  }
   
  tungguKedatanganTeman()
   
  // fungsi bawaan javascript
   
  /*
  4. Promise.all() (Menunggu Beberapa Hal Sekaligus)
  Analoginya: Ini seperti memesan makanan dari beberapa restoran berbeda melalui aplikasi. Kamu menunggu semua pesanan tiba di rumahmu, lalu kamu baru mulai makan ketika semuanya sudah siap.
  */
   
  // async function pesanDariBeberapaRestoran() {
  //   const [pesanan1, pesanan2] = await Promise.all([
  //     new Promise((berhasil, gagal) => {
  //       setTimeout(() => {
  //         berhasil("pesanan 1 sudah sampai");
  //       }, 1000);
  //     }),
  //     new Promise((berhasil, gagal) => {
  //       setTimeout(() => {
  //         berhasil("pesanan 2 sudah sampai");
  //       }, 4000);
  //     }),
  //   ]);
   
  //   console.log(pesanan1);
  //   console.log(pesanan2);
  // }
   
  // pesanDariBeberapaRestoran();
   
  // Fungsi asinkronus dengan Promise
  // function prosesAsinkronus() {
  //   return new Promise((resolve, reject) => {
  //     console.log("Proses dimulai...");
  //     // Simulasi proses asinkronus dengan setTimeout
  //     setTimeout(() => {
  //       const sukses = false; // Ganti ini dengan logika nyata
  //       if (sukses) {
  //         resolve("Proses selesai dengan sukses!");
  //       } else {
  //         reject("Proses gagal!");
  //       }
  //     }, 2000); // Proses akan selesai dalam 2 detik
  //   });
  // }
  // // Fungsi asinkronus menggunakan async/await
  // async function jalankanProses() {
  //   try {
  //     const hasil = await prosesAsinkronus();
  //     console.log(hasil); // Akan dipanggil jika promise di-resolve
  //   } catch (error) {
  //     console.eror(error); // Akan dipanggil jika promise di-reject
  //   }
  // }
  // // Memanggil fungsi asinkronus
  // jalankanProses();
   
   
  function sum(n) {
    // Base case: jika n adalah 1, hentikan rekursi dan kembalikan 1
    if (n === 1) {
        return 1;
    }
    // Recursive case: tambahkan n dengan hasil sum dari n-1
    return n + sum(n - 1);
  }
   
  console.log(sum(5)); // Output: 15


  /*
Buat sebuah fungsi bernama fizzBuzz yang menerima satu parameter n (bilangan bulat). Fungsi ini harus mencetak angka dari 1 sampai n.
 
- Untuk setiap angka yang habis dibagi 3, cetak "Fizz" sebagai pengganti angka.
- Untuk setiap angka yang habis dibagi 5, cetak "Buzz" sebagai pengganti angka.
- Untuk angka yang habis dibagi 3 dan 5, cetak "FizzBuzz" sebagai pengganti angka.
- Jika tidak memenuhi syarat di atas, cetak angka tersebut.
*/
 
// habis / 3 = fizz
// habis / 5 = buzz
// habis / 3 dan 5 = fizzbuzz
// tidak habis / 3 dan 5 = angka
 
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
 
console.log(4 % 3)
 
// fizzBuzz(15);