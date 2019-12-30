import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://vuejs.org";

Given(`I open Vue page`, () => {
  cy.visit(url)
})

Then(`I see "Vue" in the title`, () => {
  cy.title().should("include", "Vue")
})
