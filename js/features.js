var wPressed = false;

// Define shortcuts and an extra feature
window.addEventListener('keydown', function (e) {
	document.querySelector('h1').textContent = e.keyCode;
	
	if (e.keyCode === 87) {
		wPressed = true;
	}

	if (wPressed) {
		if (e.keyCode === 69) { changeProfileLanguage(enOption); }
		if (e.keyCode === 70) { changeProfileLanguage(frOption); }
	}
});

window.addEventListener('keyup', function (e) {
	if (e.keyCode === 87) {
		wPressed = false;
	}
});
