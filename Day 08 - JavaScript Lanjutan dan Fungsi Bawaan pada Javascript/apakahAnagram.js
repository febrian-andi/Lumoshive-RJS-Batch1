// Buat sebuah fungsi bernama apakahAnagram yang menerima dua parameter, yaitu dua buah string. 
// Fungsi ini harus mengembalikan nilai true jika kedua string tersebut adalah 
// anagram (memiliki jumlah dan jenis huruf yang sama meskipun urutannya berbeda), 
// dan mengembalikan false jika tidak. 
// Fungsi harus mengabaikan perbedaan huruf kapital dan spasi.

// Contoh:
// apakahAnagram("listen", "silent") → true
// apakahAnagram("hello", "world") → false

function apakahAnagram(str1, str2) {
  const cleanStr1 = str1.replace(" ", "").toLowerCase();
  const cleanStr2 = str2.replace(" ", "").toLowerCase();

  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

console.log(apakahAnagram("listen", "silent"));
console.log(apakahAnagram("hello", "world"));
