//	Wipe out document

//	Reload page into an iframe
document.body.innerHTML = '';

const iframe = document.createElement('iframe');
iframe.setAttribute('src', '?');
document.body.append(iframe);
