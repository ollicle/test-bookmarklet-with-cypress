console.log("Expected test document title: %cHello Cypress", 'font-weight:bold');
console.log("Actual document title: %c" + document.title, 'font-weight:bold');

//	Wipe out document –	Reload page into an iframe

document.body.innerHTML = '';

const iframe = document.createElement('iframe');
iframe.setAttribute('src', '?squiz');
document.body.append(iframe);
