describe('Blog Page', () => {
  it('should display blog cards on the page', () => {
    // Intercept API call untuk memuat data blog
    cy.intercept('GET', '/api/tech', {
      statusCode: 200,
      body: [
        {
          key: 1,
          title: 'Blog 1',
          thumb: 'thumb1.jpg',
          author: 'Author 1',
          time: '2 min ago',
          desc: 'Description 1',
          tag: 'Tag1',
        },
        {
          key: 2,
          title: 'Blog 2',
          thumb: 'thumb2.jpg',
          author: 'Author 2',
          time: '5 min ago',
          desc: 'Description 2',
          tag: 'Tag2',
        },
      ],
    }).as('getBlogs'); // Alias untuk intercept

    // Kunjungi halaman blog
    cy.visit('http://localhost:5173/blog');

    // Tunggu sampai API selesai
    cy.wait('@getBlogs');

    // Pastikan elemen grid ada di halaman
    cy.get('.grid').should('exist'); // Memastikan grid blog ada

    // Memastikan ada setidaknya satu blog card yang dimuat
    cy.get('.grid > div').should('have.length.greaterThan', 0); // Pastikan ada 1 blog card

    // Verifikasi isi dari blog card pertama
    cy.get('.grid > div').first().within(() => {
      cy.get('img').should('have.attr', 'src', 'thumb1.jpg'); // Memeriksa gambar
      cy.get('h2').should('contain.text', 'Blog 1'); // Memeriksa judul blog
      cy.get('p').should('contain.text', 'Description 1'); // Memeriksa deskripsi blog
    });
  });

  it('should show loading spinner while fetching data', () => {
    // Intercept API call untuk simulasi loading
    cy.intercept('GET', '/api/tech', {
      delay: 2000, // Simulasikan penundaan 2 detik
      statusCode: 200,
      body: [
        {
          key: 1,
          title: 'Blog 1',
          thumb: 'thumb1.jpg',
          author: 'Author 1',
          time: '2 min ago',
          desc: 'Description 1',
          tag: 'Tag1',
        },
      ],
    }).as('getBlogs');

    // Kunjungi halaman blog
    cy.visit('http://localhost:5173/blog');

    // Memastikan spinner loading muncul
    cy.get('.animate-spin').should('exist');

    // Tunggu sampai data selesai dimuat
    cy.wait('@getBlogs');

    // Pastikan spinner menghilang setelah data dimuat
    cy.get('.animate-spin').should('not.exist');

    // Pastikan grid blog muncul setelah data dimuat
    cy.get('.grid').should('exist');
    cy.get('.grid > div').should('have.length.greaterThan', 0);
  });

  it('should display an error message if the API fails', () => {
    // Simulasikan kegagalan API
    cy.intercept('GET', '/api/tech', {
      statusCode: 500,
      body: { error: 'Something went wrong' },
    }).as('getBlogsError');

    // Kunjungi halaman blog
    cy.visit('http://localhost:5173/blog');

    // Tunggu sampai request selesai
    cy.wait('@getBlogsError');

    // Pastikan pesan error muncul
    cy.get('.text-red-500').should('contain.text', 'Something went wrong');
  });
});
