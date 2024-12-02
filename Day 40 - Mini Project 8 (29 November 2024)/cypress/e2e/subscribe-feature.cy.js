describe('SubscribeForm E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/newsletter');
  });

  it('should show an error if the email format is invalid', () => {
    // Coba masukkan email dengan format yang tidak valid
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('button[type="submit"]').click();
  });

  it('should submit the form with a valid email', () => {
    // Masukkan email yang valid
    cy.get('input[name="email"]').clear().type('test@example.com');
    
    // Klik tombol subscribe
    cy.get('button[type="submit"]').click();

    // Pastikan loading spinner muncul selama proses submit
    cy.get('button[type="submit"]').should('have.class', 'opacity-50');
    cy.get('.animate-spin').should('exist');

    // Tunggu sampai proses selesai dan pastikan toast success muncul
    cy.wait(2000);
    // Toast sukses
    cy.get('.Toastify__toast--success').should('exist');
  });

  it('should show an error toast if the email submission fails', () => {
    // Menggunakan intercept untuk menyimulasikan kegagalan API
    cy.intercept('POST', 'https://lumoshive-academy-media-api.vercel.app/api/subscribe', {
      statusCode: 500,
      body: { error: 'Something went wrong' }
    }).as('subscribeError');

    cy.get('input[name="email"]').clear().type('test@gmail.com');
    cy.get('button[type="submit"]').click();

    // Tunggu request selesai dan pastikan toast error muncul
    cy.wait('@subscribeError');
    cy.get('.Toastify__toast--error').should('exist').and('contain', 'Something went wrong');
  });
});
