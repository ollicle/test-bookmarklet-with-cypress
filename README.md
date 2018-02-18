# Test a bookmarklet with Cypress

This project is a barebones demo of an issue encountered attempting to test a bookmarklet script in Cypress.

The outcome of which was to inject the bookmarklet with a browser-sync proxy.

## Set-up

Install dependencies:

	npm i

Serve test page:

	npm run serve

Inject bookmarklet with browser-sync proxy:

	npm run proxy

Launch Cypress:

	npm run cypress:open

Once the Cypress Test Runner has launched run the *bookmarklet.js* test

## What happens

1. The test page `./index.html` is proxied via <http://localhost:3000> by browser-sync to <http://localhost:3001>
2. browser-sync injects `./bookmarklet.js` into the test page (as simulation of executing a bookmarklet)
3. The Cypress test `./cypress/integration/load-test.js` then loads the test page ready for testing.

