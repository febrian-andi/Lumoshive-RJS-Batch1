```
src/
├── api/ # Folder untuk API dan konfigurasi
│ ├── services/ # Folder untuk layanan API individual
│ │ ├── authService.js # Layanan API untuk otentikasi (login, register, logout)
│ │ ├── testimonialService.js # Layanan API untuk testimonial (CRUD)
│ │ ├── portfolioService.js # Layanan API untuk portfolio (CRUD)
│ │ ├── expertiseService.js # Layanan API untuk keahlian (CRUD)
│ │ ├── aboutService.js # Layanan API untuk bagian 'about us' (CRUD)
│ │ ├── teamService.js # Layanan API untuk tim (CRUD)
│ │ ├── whatWeDoService.js # Layanan API untuk 'what we do' (CRUD)
│ │ ├── articleService.js # Layanan API untuk artikel (CRUD dan detail)
│ │ ├── contactService.js # Layanan API untuk kontak (get dan create)
│ │ └── subscribeService.js # Layanan API untuk subscribe email (get dan create)
│ ├── axiosConfig.js # Konfigurasi global axios (baseURL, api-key, token, interceptors)
│ ├── uploadHelper.js # Helper untuk upload file (FormData handling)
│ └── errorLogger.js # Fungsi untuk logging error ke layanan eksternal
│
├── components/ # Presentational components
│ ├── Auth/
│ │ ├── LoginForm.js
│ │ └── RegisterForm.js
│ ├── Testimonial/
│ │ ├── TestimonialCard.js
│ │ └── TestimonialList.js
│ ├── Portfolio/
│ │ ├── PortfolioItem.js
│ │ └── PortfolioList.js
│ ├── Expertise/
│ │ ├── ExpertiseCard.js
│ │ └── ExpertiseList.js
│ ├── AboutUs/
│ │ ├── AboutInfo.js
│ │ └── AboutImage.js
│ ├── Team/
│ │ ├── TeamMemberCard.js
│ │ └── TeamList.js
│ ├── WhatWeDo/
│ │ ├── WhatWeDoCard.js
│ │ └── WhatWeDoList.js
│ ├── Article/
│ │ ├── ArticleCard.js
│ │ └── ArticleList.js
│ └── Shared/
│ ├── Modal.js # Komponen modal umum
│ ├── Navbar.js # Komponen navbar
│ ├── Pagination.js # Komponen pagination
│ ├── SearchBar.js # Komponen pencarian
│ └── Filter.js # Komponen filter
│
├── containers/ # Container components
│ ├── Auth/
│ │ ├── LoginContainer.js
│ │ └── RegisterContainer.js
│ ├── Testimonial/
│ │ ├── TestimonialContainer.js
│ ├── Portfolio/
│ │ ├── PortfolioContainer.js
│ ├── Expertise/
│ │ ├── ExpertiseContainer.js
│ ├── AboutUs/
│ │ ├── AboutContainer.js
│ ├── Team/
│ │ ├── TeamContainer.js
│ ├── WhatWeDo/
│ │ ├── WhatWeDoContainer.js
│ ├── Article/
│ │ ├── ArticleContainer.js
│ └── Contact/
│ ├── ContactContainer.js
│
├── hooks/ # Custom hooks
│ ├── useAuth.js # Hook untuk otentikasi
│ ├── useFetchData.js # Hook umum untuk mengambil data
│ ├── useCrud.js # Hook CRUD umum untuk create, read, update, delete data
│ ├── useSearch.js # Hook untuk pencarian dan filter data
│ ├── usePagination.js # Hook untuk pagination data
│ └── useFileUpload.js # Hook untuk mengelola unggah file
│
├── pages/ # Halaman utama aplikasi
│ ├── HomePage.js
│ ├── AboutPage.js
│ ├── PortfolioPage.js
│ ├── TeamPage.js
│ ├── ArticlePage.js
│ └── ContactPage.js
│
├── utils/ # Utility functions
│ ├── validation.js # Fungsi validasi form
│ ├── formatDate.js # Fungsi untuk format tanggal
│ ├── helpers.js # Fungsi bantu umum
│ └── env.js # Konfigurasi environment variables
│
├── assets/ # Media dan aset statis
│ ├── images/ # Folder untuk gambar
│ └── icons/ # Folder untuk ikon
│
├── styles/ # Folder untuk file CSS/SCSS
│ ├── main.css # File utama untuk styling
│ └── components/ # Styling untuk komponen tertentu
│
├── App.js # Entry point aplikasi
├── index.js # File utama untuk merender aplikasi
└── .env # File konfigurasi environment
```
