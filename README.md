# Test a bookmarklet with Cypress

This project is a barebones demo of an issue encountered attempting to test a bookmarklet script in Cypress.

## Set-up

Install dependencies:

	npm i

Serve test page:

	npm run serve

Launch Cypress:

	npm run cypress:open

Once the Cypress Test Runner has launched run the *bookmarklet.js* test

## What happens

1. The test page `./index.html` is loaded via <http://localhost:3333/> into the Cypress Test Runner iframe.
2. The Cypress test `./cypress/integration/inject-bookmarklet.js` then injects `./bookmarklet.js` into the loaded test page.

## Expected

The bookmarklet script replaces the content of the loaded _test_ page body with an iframe loading `./index.html?`

*Hello Cypress* is visible within an iframe appended to the test page.

## Actual

Seems the bookmarklet script is injected into the wrong document (not within the test page). Replacing the whole Cypress Test Runner UI.

## Help?

How does one modify the DOM of the test page?

Specifically, to execute an external script in its document context.