describe("PageLoad", () => {
  it("should load the sample page and verify its content", () => {
    // Visit the sample page
    cy.visit("/sample-page/");

    // Verify the title
    cy.title().should("eq", "Sample Page – Test");

    // Verify the presence of the main heading
    cy.get("h1").contains("Sample Page");

    // Verify the presence of specific text on the page
    cy.contains("This is an example page.");
    cy.contains(
      "Hi there! I’m a bike messenger by day, aspiring actor by night, and this is my website."
    );

    // Verify the presence of a specific link
    cy.get('a[href="http://localhost/wp-admin/"]').should("exist");
  });
});
