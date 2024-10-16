// Soal Palindrom
// Buat sebuah fungsi bernama isPalindrome yang menerima satu parameter string 
// dan mengembalikan true jika string tersebut adalah 
// palindrom (dibaca sama dari depan dan belakang), 
// dan false jika tidak. 
// Fungsi ini harus mengabaikan huruf besar/kecil dan karakter selain huruf (misalnya tanda baca).

function isPalindrome(str) {
    const cleanStr = str.replace(" ", "").toLowerCase();
    
    const strReverse = cleanStr.split("").reverse().join("");
    
    return cleanStr === strReverse;
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("hello"));
