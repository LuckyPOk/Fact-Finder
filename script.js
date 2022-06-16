let showFact = document.getElementById("showFact");
var buttons = document.getElementsByTagName("input");

function factOne() {
	showFact.innerHTML = "The reason root beer foams when in contact with ice cream in a float is because when carbonated root beer comes into contact with the ice cream, carbon dioxide bubbles are released. Likewise, the soda helps to free air bubbles trapped in the ice cream.";
	
	showFact.innerHTML += "<img src='images/float.jpg' alt='Float'>";
	
	document.querySelector("body").style.color = "#04A777";
	document.querySelector("body").style.backgroundColor = "#28536B";
	
	showFact.style.borderColor = "#F8F7F9";
	
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].style.color = "#FF5A5F";
		buttons[i].style.backgroundColor = "#6C6061";
		buttons[i].style.borderColor = "#827191";
	}
}

function factTwo() {
	showFact.innerHTML = "A particular blue hue was known as St. Patrick blue and for hundreds of years it was this blue that was associated with the holiday. However, green became the dominant color of St Patrick's day over time as the holiday was used to highlight Irish nationalism against British rule in the 1790s.";
	
	showFact.innerHTML += "<img src='images/clover.jpg' alt='Clover'>";
	
	document.querySelector("body").style.color = "#FFFBFE";
	document.querySelector("body").style.backgroundColor = "#78BC61";
	
	showFact.style.borderColor = "#136F63";
	
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].style.color = "#84CAE7";
		buttons[i].style.backgroundColor = "#041B15";
		buttons[i].style.borderColor = "#C2E3F3";
	}
}

function factThree() {
	showFact.innerHTML = "Google came from the mathematical term googol. It's the number one followed by one hundred zeros. In its earliest version, Sergey Brin and Larry Page named their search engine 'Back Rub.' They changed the name to Google, which stems from the mathematical term 'googol.'";
	
	showFact.innerHTML += "<img src='images/google.png' alt='Google'>";
	
	document.querySelector("body").style.color = "#FF5964";
	document.querySelector("body").style.backgroundColor = "#FFFFFF";
	
	showFact.style.borderColor = "#FFE74C";
	
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].style.color = "#FFA058";
		buttons[i].style.backgroundColor = "#35A7FF";
		buttons[i].style.borderColor = "#6BF178";
	}
}

function factFour() {
	showFact.innerHTML = "Shakespeare invented 1700+ common English words by changing nouns into verbs, changing verbs into adjectives, connecting words never before used together, adding prefixes and suffixes, and by creating entirely new words.";
	
	showFact.innerHTML += "<img src='images/shakespeare.jpg' alt='Shakespeare'>";
	
	document.querySelector("body").style.color = "#E1DD8F";
	document.querySelector("body").style.backgroundColor = "#8E3B46";
	
	showFact.style.borderColor = "#4C86A8";
	
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].style.color = "#E1AA86";
		buttons[i].style.backgroundColor = "#E0777D";
		buttons[i].style.borderColor = "#477890";
	}
}

function factFive() {
	showFact.innerHTML = "The original alphabet was developed by a Semitic people living in or near Egypt. They based it on the idea developed by the Egyptians, but used their own specific symbols. It was quickly adopted by their neighbors and relatives to the east and north, the Canaanites, the Hebrews, and the Phoenicians.";
	
	showFact.innerHTML += "<img src='images/egypt.jpg' alt='Egypt'>";
	
	document.querySelector("body").style.color = "#485696";
	document.querySelector("body").style.backgroundColor = "#F9C784";
	
	showFact.style.borderColor = "#E7E7E7";
	
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].style.color = "#F24C00";
		buttons[i].style.backgroundColor = "#F0D7B6";
		buttons[i].style.borderColor = "#FC7A1E";
	}
}