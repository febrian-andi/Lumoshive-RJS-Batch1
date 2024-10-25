// Base class Developer yang lebih generik untuk semua peran developer
// Developer sebagai class dasar mewakili tugas umum yang dapat dilakukan semua developer.
// Penerapan SRP: class Developer hanya menangani tugas umum yang berlaku untuk semua developer.
// Penerapan OCP: Developer bersifat umum sehingga class turunan dapat menambahkan detail tanpa memodifikasi Developer.
class Developer {
  constructor(role) {
    this.role = role;
  }

  performTask(taskName) {
    console.log(`${this.role} melakukan tugas: ${taskName}`);
  }

  testFunctionality() {
    console.log(`${this.role} menguji fungsionalitas...`);
  }

  deploy() {
    console.log(`${this.role} mendeploy hasil kerja ke server...`);
  }
}

// class FrontendDeveloper mewarisi Developer, mengkhususkan tugas frontend.
// SRP: Menangani tugas frontend tanpa mencampur tugas backend atau UI/UX.
// LSP: FrontendDeveloper dapat menggantikan Developer di semua konteks Developer.
class FrontendDeveloper extends Developer {
  constructor() {
    super("Frontend Developer");
  }

  createUI() {
    this.performTask("Membangun UI dengan HTML, CSS, dan JavaScript...");
  }

  addAnimation() {
    this.performTask("Menambahkan animasi ke UI dengan CSS/JavaScript...");
  }

  optimizePerformance() {
    this.performTask("Mengoptimalkan performa frontend...");
  }
}

// BackendDeveloper mengkhususkan diri pada tugas backend, tetap mengikuti SRP dan LSP seperti FrontendDeveloper.
class BackendDeveloper extends Developer {
  constructor() {
    super("Backend Developer");
  }

  setupDatabase() {
    this.performTask("Mengatur database dengan SQL...");
  }

  manageAPI() {
    this.performTask("Mengelola API untuk komunikasi data...");
  }

  ensureSecurity() {
    this.performTask("Menjamin keamanan data pengguna...");
  }
}

// UIUXDesigner fokus pada tugas desain UI/UX tanpa mencampur tugas lain, sesuai dengan SRP dan LSP.
class UIUXDesigner extends Developer {
  constructor() {
    super("UI/UX Designer");
  }

  createDesign() {
    this.performTask("Membuat desain UI yang menarik...");
  }

  buildPrototype() {
    this.performTask("Membuat prototipe desain...");
  }
}

// ProjectManager mengatur seluruh proses proyek, mengelola komunikasi antar developer.
// DIP: ProjectManager menerima developer (frontend, backend, dan UI/UX) sebagai parameter, tidak bergantung langsung pada implementasi konkret.
// OCP: ProjectManager mudah diperluas, bisa bekerja dengan berbagai jenis developer tanpa perlu perubahan besar pada kodenya.
class ProjectManager {
  constructor(frontendDev, backendDev, designer) {
    this.frontendDev = frontendDev;
    this.backendDev = backendDev;
    this.designer = designer;
  }

  startProject() {
    console.log("Memulai proyek...");
    this.designer.createDesign();
    this.designer.buildPrototype();
    this.frontendDev.createUI();
    this.frontendDev.addAnimation();
    this.backendDev.setupDatabase();
    this.backendDev.manageAPI();
  }

  testProject() {
    console.log("Melakukan pengujian proyek...");
    this.frontendDev.testFunctionality();
    this.backendDev.testFunctionality();
  }

  deployProject() {
    console.log("Mendeploy proyek ke server...");
    this.frontendDev.deploy();
    this.backendDev.deploy();
  }
}

// Project mengelola siklus hidup proyek secara keseluruhan dengan dependensi ProjectManager.
// DIP: Project hanya bergantung pada ProjectManager yang dapat disesuaikan (abstrak) daripada mengelola developer secara langsung.
// SRP: Project hanya bertanggung jawab atas eksekusi proyek secara keseluruhan.
class Project {
  constructor(projectManager) {
    this.projectManager = projectManager;
  }

  execute() {
    this.projectManager.startProject();
    this.projectManager.testProject();
    this.projectManager.deployProject();
  }
}

// Inisialisasi ProjectManager dengan frontendDev, backendDev, dan designer memastikan setiap peran spesifik dipenuhi.
// Dependency Injection (DI): FrontendDeveloper, BackendDeveloper, dan UIUXDesigner disuntikkan ke ProjectManager, dan ProjectManager disuntikkan ke Project, mengikuti prinsip DIP.
// Proyek dieksekusi dengan mengelola semua developer melalui ProjectManager, mengikuti prinsip OOP dan memastikan modularitas dan keterpisahan tugas.
const frontendDev = new FrontendDeveloper();
const backendDev = new BackendDeveloper();
const designer = new UIUXDesigner();
const projectManager = new ProjectManager(frontendDev, backendDev, designer);
const websiteProject = new Project(projectManager);
websiteProject.execute();
