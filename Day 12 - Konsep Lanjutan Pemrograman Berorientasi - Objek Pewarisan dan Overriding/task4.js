// Sistem Penilaian Akademik Online
// Buat sistem penilaian akademik untuk dua jenis pengguna, yaitu Dosen dan Mahasiswa, dengan aturan berikut:
// 1.	Dosen:
// a.	Dapat memberikan nilai kepada mahasiswa.
// b.	Hanya dapat melihat dan mengedit nilai mahasiswa.
// 2.	Mahasiswa:
// a.	Dapat melihat nilai yang diberikan oleh dosen.
// b.	Tidak bisa mengubah nilai.
// Tugas:
// •	Buat class User sebagai class induk dengan method getRole() untuk menampilkan peran pengguna.
// •	Buat subclass Dosen dan Mahasiswa dengan properti dan method tambahan yang sesuai.
// •	Simulasikan interaksi di mana dosen memberikan nilai kepada mahasiswa, dan
// mahasiswa dapat melihat nilai tersebut tetapi tidak bisa mengubahnya.

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  getRole() {
    return `Hello ${this.name}, your role: ${this.role}`;
  }
}

class Dosen extends User {
  constructor(name) {
    super(name, "dosen");
    this.studentGrades = {};
  }

  giveGrade(student, grade) {
    this.studentGrades[student.name] = grade;
  }

  editGrade(student, newGrade) {
    if (this.studentGrades[student.name] !== undefined) {
      this.studentGrades[student.name] = newGrade;
    }
  }

  viewGrade(student) {
    const grade = this.studentGrades[student.name] ?? "No grade yet";
    console.log(`Hello ${this.name}, ${student.name}'s grade: ${grade}`);
  }

  viewAllGrades() {
    const gradesList = Object.entries(this.studentGrades).map(
      ([student, grade]) => `${student}: ${grade}`
    );
    console.log("Grades List :")
    if (gradesList.length > 0) {
      console.log(gradesList.join("\n"));
    } else {
      console.log("No grades have been assigned yet.");
    }
  }
}

class Mahasiswa extends User {
  constructor(name) {
    super(name, "mahasiswa");
    this.grades = {};
  }

  viewGrade(dosen) {
    this.grades = dosen.studentGrades[this.name];
    console.log(`Hello ${this.name}, your grade: ${this.grades}`);
  }
}

const dosen = new Dosen("Pak Arif");
const student1 = new Mahasiswa("Andi");
const student2 = new Mahasiswa("Budi");

console.log(dosen.getRole());
console.log(student1.getRole());

dosen.giveGrade(student1, 90);
dosen.giveGrade(student2, 85);

student1.viewGrade(dosen);
student2.viewGrade(dosen);

dosen.editGrade(student1, 95);
student1.viewGrade(dosen);

dosen.viewGrade(student1);
dosen.viewAllGrades();
