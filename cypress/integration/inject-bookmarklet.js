describe('Test a bookmarklet', function() {
  it('Inject the bookmarklet script into the test page', function() {
	cy.visit('http://localhost:3000/');
	
	//	I expected this script to be appended to the test page context
	//	Instead it appears to be appended to the top level
	cy.get('head').then(($head) => { $head.append('<script src="http://localhost:3000/bookmarklet.js"></script>') })
  })
})
