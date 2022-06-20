describe("top page", () => {
  it("show login form", () => {
    cy.visit("http://localhost:3000");

    cy.get('[id="user_name"]').should("exist");
    cy.get('[type="submit"]').should("contain", "Join");
  });
});
