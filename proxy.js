/**
 * Require Browsersync
 */
var browserSync = require('browser-sync');

var bookmarklet = '<script src="bookmarklet.js" defer ></script>';

browserSync({
	files: "bookmarklet.js",
	proxy: 'localhost:3000',
    serveStatic: ['./'],
    port: 3001,
    snippetOptions: {
        blacklist: ['**/*?squiz'],
        rule: {
        	match: /<\/body>/i,
        	fn: function (snippet, match) {
				return bookmarklet + snippet + match;
			}
        }
    }
});
