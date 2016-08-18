// 141 variables
var wordBank = ["Bulbasaur","Ivysaur","Venusaur","Charmander"
,"Charmeleon","Charizard","Squirtle","Wartortle","Blastoise"
,"Caterpie","Metapod","Butterfree","Weedle","Kakuna"
,"Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate"
,"Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu"
,"Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen"
,"Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales"
,"Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom"
,"Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett"
,"Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey"
,"Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl"
,"Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke"
,"Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel"
,"Geodude","Graveler","Golem","Ponyta","Slowpoke","Slowbro","Magnemite"
,"Magneton","Doduo","Dodrio","Seel","Dewgong","Grimer"
,"Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix"
,"Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode"
,"Exeggcute","Exeggcutor","Cubone","Marowak","Hitmonlee","Hitmonchan"
,"Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey"
,"Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking"
,"Staryu","Starmie","Scyther","Jynx","Electabuzz"
,"Magmar","Pinsir","Tauros","Magikarp","Gyarados"
,"Lapras","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte"
,"Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Dratini"
,"Dragonair","Dragonite"];

var targetIndex = Math.floor(Math.random()*wordBank.length);

var targetWord = wordBank[targetIndex];

var targetWordArray = targetWord.toLowerCase().split("");
var newArray = new Array(targetWordArray.length)
for (var i = 0; i < newArray.length; i++) {
	newArray[i] = "_";
	$("#randomWord").html(newArray);
}

var wordLength = targetWordArray.length;
$("#length").html(wordLength);

var wrongGuessArray = [];

var guessUsed = 20;
$("#numberOfGuesses").html(guessUsed);


var win = 0;
$("#win").html(win);
var loss = 0;
$("#loss").html(loss);



//functions

$(document).ready(function(){
function checkLetter(letter) {
	//check if letter is in array
	var b;
	var c;
	var isLetterInArray = false;
	for (var i = 0; i < targetWordArray.length; i++) {
		console.log("Comparing "+letter+" to "+targetWordArray[i]);
		if(letter === targetWordArray[i]) {
			isLetterInArray = true;
			b = targetWordArray[i];
			newArray[i] = b;
			
		} else {
			c = letter + ", ";
		}
	}


	wrongGuessArray.push(c);
	$("#wordGuessed").html(wrongGuessArray);
	
	console.log(isLetterInArray);
	console.log(targetWord);
	console.log(b);
	console.log("guesses: " + c);
	
	if(isLetterInArray = true) {
	$("#randomWord").html(newArray);
	
	
	} 
	
	console.log(newArray);
	console.log("wrong guesses: " + wrongGuessArray);
	


	
}
	





		
	


//executing code

document.onkeyup = function(event) {
	console.log("event: "+event+", keycode: "+event.keyCode);
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("Running checkLetter("+letterGuessed+")");
	checkLetter(letterGuessed);
		
	guessUsed--;
	$("#numberOfGuesses").html(guessUsed);
	console.log("guesses left: " + guessUsed)

	
	if(newArray.includes("_") === false) {
		win++;
		$("#win").html(win);
		$("#wordGuessed").empty();
		//new word
	targetIndex = Math.floor(Math.random()*wordBank.length);
	targetWord = wordBank[targetIndex];
	targetWordArray = targetWord.toLowerCase().split("");
	newArray = new Array(targetWordArray.length)
	for (var i = 0; i < newArray.length; i++) {
	newArray[i] = "_";
	$("#randomWord").html(newArray);
	}
	wordLength = targetWordArray.length;
	$("#length").html(wordLength);

		//new word
		guessUsed = 20;
		$("#numberOfGuesses").html(guessUsed)	
	}
	
	console.log(newArray.includes("_"));
	console.log("comparing " + newArray + "with " + targetWordArray);
	console.log("win: " +win);

	if(newArray.includes("_") === true && guessUsed === 0) {
		loss++;
		$("#loss").html(loss);
		$("#wordGuessed").empty();
		//new word
		targetIndex = Math.floor(Math.random()*wordBank.length);
	targetWord = wordBank[targetIndex];
	targetWordArray = targetWord.toLowerCase().split("");
	newArray = new Array(targetWordArray.length)
	for (var i = 0; i < newArray.length; i++) {
	newArray[i] = "_";
	$("#randomWord").html(newArray);
	}
	wordLength = targetWordArray.length;
	$("#length").html(wordLength);
		//new word
		
		guessUsed = 20
		$("#numberOfGuesses").html(guessUsed)
	}
	

}
});



