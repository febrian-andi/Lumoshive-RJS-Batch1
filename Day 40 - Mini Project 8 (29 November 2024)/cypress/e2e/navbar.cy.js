describe('Navbar E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should navigate to the correct pages when links are clicked', () => {
    // Tes link ke halaman "Blog"
    cy.get('a[href="/blog"]').click();
    cy.url().should('include', '/blog');

    // Tes link ke halaman "About"
    cy.get('a[href="/about"]').click();
    cy.url().should('include', '/about');

    // Tes link ke halaman "Newsletter"
    cy.get('a[href="/newsletter"]').click();
    cy.url().should('include', '/newsletter');
  });

  it('should toggle dark mode when the dark mode button is clicked', () => {
    // Tes kondisi awal apakah tema terang (light mode)
    cy.get('html').should('not.have.class', 'dark');

    // Klik tombol dark mode
    cy.get('.flex .relative').click();

    // Pastikan tema berubah ke gelap (dark mode)
    cy.get('html').should('have.class', 'dark');

    // Klik lagi untuk kembali ke terang
    cy.get('.flex .relative').click();

    // Pastikan tema kembali ke terang
    cy.get('html').should('not.have.class', 'dark');
  });

  it('should toggle the navbar visibility when the hamburger menu is clicked', () => {
    // Mengubah ukuran layar ke ukuran mobile
    cy.viewport(375, 667);
  
    // Tes bahwa navbar tersembunyi pada ukuran layar kecil
    cy.get('nav').should('have.class', '-translate-y-full');
  
    // Klik tombol hamburger untuk membuka navbar
    cy.get('button[aria-label="Toggle menu"]').click();
  
    // Pastikan navbar muncul
    cy.get('nav').should('not.have.class', '-translate-y-full');
  
    // Klik tombol hamburger lagi untuk menutup navbar
    cy.get('button[aria-label="Close menu"]').click();
  
    // Pastikan navbar kembali tersembunyi
    cy.get('nav').should('have.class', '-translate-y-full');
  });  

  it('should close the navbar when a link is clicked', () => {
    // Mengubah ukuran layar ke ukuran mobile
    cy.viewport(375, 667);
    
    // Klik tombol hamburger untuk membuka navbar
    cy.get('button[aria-label="Toggle menu"]').click();

    // Klik link "Blog"
    cy.get('a[href="/blog"]').click();

    // Pastikan navbar tertutup setelah link diklik
    cy.get('nav').should('have.class', '-translate-y-full');
  });
});
