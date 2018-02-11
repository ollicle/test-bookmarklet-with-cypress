describe('Test a bookmarklet', function() {
  it('Inject the bookmarklet script into the test page', function() {
	cy.visit('http://localhost:3333/');
	
	//	I expected this script to be appended to the test page context
	//	Instead it appears to be appended to the top level
	Cypress.$('<script src="http://localhost:3333/bookmarklet.js"></script>').appendTo("head");
  })
})
