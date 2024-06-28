describe("Authentication Tests", () => {
  it("should log in successfully", () => {
    cy.login("test", "test1234");
    // Assert
    cy.url().should("include", "/wp-admin/");
  });

  it("should display an error message for invalid password", () => {
    cy.login("test1111", "test1234");
    // Assert
    cy.get("#login_error")
      .should("be.visible")
      .and("contain", "Error:")
      .and(
        "contain",
        "The username test1111 is not registered on this site. If you are unsure of your username, try your email address instead."
      );
  });

  it("should display wrong password message", () => {
    cy.login("test", "wrongpassword");
    // Assert
    cy.get("#login_error")
      .should("be.visible")
      .and("contain", "Error:")
      .and(
        "contain",
        "The password you entered for the username test is incorrect."
      );
  });

  it("should log out successfully", () => {
    cy.login("test", "test1234");
    cy.get("#wp-admin-bar-logout a").click({ force: true });
    cy.url().should("include", "/wp-login.php");
    // Assert
    cy.url().should("include", "/wp-login.php");
  });
});
