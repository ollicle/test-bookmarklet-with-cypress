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

1. The test page `./index.html` is loaded via <http://localhost:3000> into the Cypress Test Runner iframe.
2. The Cypress test `./cypress/integration/inject-bookmarklet.js` then injects `./bookmarklet.js` into the loaded test page.
3. The bookmarklet script executes some logging of `document.title`

## Expected logging

(In console of Cypress launched Chrome)

	Expected document title: Hello Cypress
	Actual document title: Hello Cypress

Where **Hello Cypress** is the title of the test page.

## Actual logging

	Expected document title: Hello Cypress
	Actual document title: test-bookmarklet-with-cypress

Where **test-bookmarklet-with-cypress** is the title of the Cypress Test Runner page.

## Help?

Is there something I can do to execute an external script in the test document context?