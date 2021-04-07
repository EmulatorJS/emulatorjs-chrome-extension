chrome.browserAction.onClicked.addListener(() => {
	const width = 800;
	const height = 690;
	const top = Math.round((window.screen.availHeight - height) / 2);
	const left = Math.round((window.screen.availWidth - width) / 2);
	chrome.windows.create({
		url: chrome.extension.getURL('html/index.html'),
		width,
		height,
		top,
		left,
		type: 'popup',
	});
})