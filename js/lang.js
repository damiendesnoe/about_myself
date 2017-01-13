var titleElement = document.querySelector('title');
var frTitle = 'A propos de moi - Damien Desnoë';
var enTitle = titleElement.textContent;
var bodyElement = document.querySelector('body');
var articleElement = document.querySelector('article');
var enProfileElement = document.getElementById('profile-en');
var frProfileElement = document.getElementById('profile-fr');
var enOption = document.getElementsByTagName('li')[0];
var frOption = document.getElementsByTagName('li')[1];

changeProfileLanguage(enOption);

// This function change the language of the page without the need to reload it
function changeProfileLanguage(e) {

	if (e === enOption) {
		bodyElement.lang = 'en';

		frOption.classList.remove('active');
		e.classList.add('active');
		
		if (e.classList.contains('reverse')) {
			titleElement.textContent = reverseEnTitle;

			articleElement.removeChild(frProfileElement);
			enProfileElement.innerHTML = reverseEnProfile;
			articleElement.appendChild(enProfileElement);
		} else {
			titleElement.textContent = enTitle;

			articleElement.removeChild(frProfileElement);
			articleElement.appendChild(enProfileElement);
		}
	} else {
		bodyElement.lang = 'fr';

		enOption.classList.remove('active');
		e.classList.add('active');
		
		if (e.classList.contains('reverse')) {
			titleElement.textContent = reverseFrTitle;

			articleElement.removeChild(enProfileElement);
			frProfileElement.innerHTML = reverseFrProfile;
			articleElement.appendChild(frProfileElement);
		} else {
			titleElement.textContent = frTitle;
			
			articleElement.removeChild(enProfileElement);
			articleElement.appendChild(frProfileElement);
		}
	}
}
