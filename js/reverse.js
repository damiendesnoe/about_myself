var headerH1Element = document.querySelector('h1');
var headerH2Element = document.querySelector('h2');
var profileElement = document.getElementsByClassName('profile')[0];
var enProfile = enProfileElement.innerHTML;
var frProfile = frProfileElement.innerHTML;
var copyrightElement = document.querySelector('footer').querySelector('p');

var reverseEnTitle = reverse(enTitle);
var reverseFrTitle = reverse(frTitle);
var reverseH1 = reverse(headerH1Element.textContent);
var reverseH2 = reverse(headerH2Element.textContent);
var reverseEnProfile = reverse(enProfile);
	reverseEnProfile = restoreTags(reverseEnProfile);
var reverseFrProfile = reverse(frProfile);
	reverseFrProfile = restoreTags(reverseFrProfile);
var reverseCopyright = reverse(copyrightElement.innerHTML);
	reverseCopyright = restoreTags(reverseCopyright);

console.log(reverse(frTitle));

function reverse(textToReverse) {
	var reverseContent = '';

	for (var i = textToReverse.length - 1; i >= 0; i--) { reverseContent += textToReverse[i]; }

	return reverseContent;
}

function restoreTags(textToRestore) {
	var reverseTagRegex = /(>\w+\/?<)(.*)(>.+<)/g;

	textToRestore = textToRestore.replace(reverseTagRegex, function (match, p1, p2, p3, string) {
		return reverse(p3) + p2 + reverse(p1);
	});

	return textToRestore;
}
