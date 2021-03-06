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
			copyrightElement.innerHTML = reverseCopyright;

			if (bodyElement.lang === 'en') {
				titleElement.textContent = reverseEnTitle;
				profileElement.innerHTML = reverseEnProfile;
			} 
			if (bodyElement.lang === 'fr') {
				titleElement.textContent = reverseFrTitle;
				document.getElementsByClassName('profile')[0].innerHTML = reverseFrProfile;
			}

			document.querySelectorAll('*').forEach(function (e) {
				e.classList.add('reverse');
			});

			setTimeout(function () {
				document.querySelectorAll('*').forEach(function (e) {
					e.classList.remove('reverse');
				});

				if (bodyElement.lang === 'en') {
					titleElement.textContent = enTitle;
				} else {
					titleElement.textContent = frTitle;
				}
				
				frProfileElement.innerHTML = frProfile;
				enProfileElement.innerHTML = enProfile;
				headerH1Element.textContent = reverse(reverseH1);
				headerH2Element.textContent = reverse(reverseH2);
				copyright = reverse(reverseCopyright);
				copyrightElement.innerHTML = restoreTags(copyright);

				k = 0;
			}, 5000)
		}
	}
});

window.addEventListener('keyup', function (e) {
	if (e.keyCode === 87) {
		wPressed = false;
	}
});
