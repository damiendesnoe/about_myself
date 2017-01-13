
var wPressed = false;
var k = 0;

// Define shortcuts and an extra feature
window.addEventListener('keydown', function (e) {
	var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
	
	if (e.keyCode === 87) {
		wPressed = true;
	}

	if (wPressed) {
		if (e.keyCode === 69) { changeProfileLanguage(enOption); }
		if (e.keyCode === 70) { changeProfileLanguage(frOption); }
	}

	if (e.keyCode === code[k]) {
		k++;
		if (k === code.length) {
			headerH1Element.textContent = reverseH1;
			headerH2Element.textContent = reverseH2;
			copyright.textContent = reverseCopyright;

			if (bodyElement.lang === 'en') {
				titleElement.textContent = reverseEnTitle;
				profileElement.innerHTML = reverseEnProfile;
			} else {
				titleElement.textContent = reverseFrTitle;
				profileElement = reverseFrProfile;
			}

			document.querySelectorAll('*').forEach(function (e) {
				e.classList.add('reverse');
			})
		}
	}
});

window.addEventListener('keyup', function (e) {
	if (e.keyCode === 87) {
		wPressed = false;
	}
});
