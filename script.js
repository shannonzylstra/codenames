const boardSize = 25

var getWordString = () => {
	let words = `AFRICA, AGENT, AIR, ALIEN, ALPS, AMAZON, AMBULANCE, AMERICA, ANGEL, ANTARCTICA, APPLE, ARM, ATLANTIS, AUSTRALIA, AZTEC, BACK, BALL, BAND, BANK, BAR, BARK, BAT, BATTERY, BEACH, BEAR, BEAT, BED, BEIJING, BELL, BELT, BERLIN, BERMUDA, BERRY, BILL, BLOCK, BOARD, BOLT, BOMB, BOND, BOOM, BOOT, BOTTLE, BOW, BOX, BRIDGE, BRUSH, BUCK, BUFFALO, BUG, BUGLE, BUTTON, CALF, CANADA, CAP, CAPITAL, CAR, CARD, CARROT, CASINO, CAST, CAT, CELL, CENTAUR, CENTER, CHAIR, CHANGE, CHARGE, CHECK, CHEST, CHICK, CHINA, CHOCOLATE, CHURCH, CIRCLE, CLIFF, CLOAK, CLUB, CODE, COLD, COMIC, COMPOUND, CONCERT, CONDUCTOR, CONTRACT, COOK, COPPER, COTTON, COURT, COVER, CRANE, CRASH, CRICKET, CROSS, CROWN, CYCLE, CZECH, DANCE, DATE, DAY, DEATH, DECK, DEGREE, DIAMOND, DICE, DINOSAUR, DISEASE, DOCTOR, DOG, DRAFT, DRAGON, DRESS, DRILL, DROP, DUCK, DWARF, EAGLE, EGYPT, EMBASSY, ENGINE, ENGLAND, EUROPE, EYE, FACE, FAIR, FALL, FAN, FENCE, FIELD, FIGHTER, FIGURE, FILE, FILM, FIRE, FISH, FLUTE, FLY, FOOT, FORCE, FOREST, FORK, FRANCE, GAME, GAS, GENIUS, GERMANY, GHOST, GIANT, GLASS, GLOVE, GOLD, GRACE, GRASS, GREECE, GREEN, GROUND, HAM, HAND, HAWK, HEAD, HEART, HELICOPTER, HIMALAYAS, HOLE, HOLLYWOOD, HONEY, HOOD, HOOK, HORN, HORSE, HORSESHOE, HOSPITAL, HOTEL, ICE, ICE CREAM, INDIA, IRON, IVORY, JACK, JAM, JET, JUPITER, KANGAROO, KETCHUP, KEY, KID, KING, KIWI, KNIFE, KNIGHT, LAB, LAP, LASER, LAWYER, LEAD, LEMON, LEPRECHAUN, LIFE, LIGHT, LIMOUSINE, LINE, LINK, LION, LITTER, LOCH NESS, LOCK, LOG, LONDON, LUCK, MAIL, MAMMOTH, MAPLE, MARBLE, MARCH, MASS, MATCH, MERCURY, MEXICO, MICROSCOPE, MILLIONAIRE, MINE, MINT, MISSILE, MODEL, MOLE, MOON, MOSCOW, MOUNT, MOUSE, MOUTH, MUG, NAIL, NEEDLE, NET, NEW YORK, NIGHT, NINJA, NOTE, NOVEL, NURSE, NUT, OCTOPUS, OIL, OLIVE, OLYMPUS, OPERA, ORANGE, ORGAN, PALM, PAN, PANTS, PAPER, PARACHUTE, PARK, PART, PASS, PASTE, PENGUIN, PHOENIX, PIANO, PIE, PILOT, PIN, PIPE, PIRATE, PISTOL, PIT, PITCH, PLANE, PLASTIC, PLATE, PLATYPUS, PLAY, PLOT, POINT, POISON, POLE, POLICE, POOL, PORT, POST, POUND, PRESS, PRINCESS, PUMPKIN, PUPIL, PYRAMID, QUEEN, RABBIT, RACKET, RAY, REVOLUTION, RING, ROBIN, ROBOT, ROCK, ROME, ROOT, ROSE, ROULETTE, ROUND, ROW, RULER, SATELLITE, SATURN, SCALE, SCHOOL, SCIENTIST, SCORPION, SCREEN, SCUBA DIVER, SEAL, SERVER, SHADOW, SHAKESPEARE, SHARK, SHIP, SHOE, SHOP, SHOT, SINK, SKYSCRAPER, SLIP, SLUG, SMUGGLER, SNOW, SNOWMAN, SOCK, SOLDIER, SOUL, SOUND, SPACE, SPELL, SPIDER, SPIKE, SPINE, SPOT, SPRING, SPY, SQUARE, STADIUM, STAFF, STAR, STATE, STICK, STOCK, STRAW, STREAM, STRIKE, STRING, SUB, SUIT, SUPERHERO, SWING, SWITCH, TABLE, TABLET, TAG, TAIL, TAP, TEACHER, TELESCOPE, TEMPLE, THEATER, THIEF, THUMB, TICK, TIE, TIME, TOKYO, TOOTH, TORCH, TOWER, TRACK, TRAIN, TRIANGLE, TRIP, TRUNK, TUBE, TURKEY, UNDERTAKER, UNICORN, VACUUM, VAN, VET, WAKE, WALL, WAR, WASHER, WASHINGTON, WATCH, WATER, WAVE, WEB, WELL, WHALE, WHIP, WIND, WITCH, WORM, YARD`
	return words
}

var shuffleWordArray = (arr) => {
	/**
	 * Randomly shuffle an array
	 * https://stackoverflow.com/a/2450976/1293256
	 * @param  {Array} array The array to shuffle
	 * @return {String}      The first item in the shuffled array
	 */
	var shuffle = function (array) {

		var currentIndex = array.length;
		var temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	};

	return shuffle(arr)
}

var sliceWordArray = (arr, n) => {
	return arr
}

const hideThing = (thing) => {
	thing.setAttribute('hide','true')
}

const start = () => {

	// get word string
	var wordString = getWordString().toLowerCase()
	// make wordString into array
	var words = wordString.split(',')
	// print words!
	console.log(words)
	// shuffle words
	shuffleWordArray(words)
	// print words again!
	console.log(words)

	// create 2D word array
	var boardArray = new Array(5)
	for (var i = 0; i < boardArray.length; i++) {
		let j = 5*i
		boardArray[i] = words.slice(j,j+5)
	}
	console.log(boardArray)

	// create 2D color array
	const colors = []
	for (let i = 0; i < 9; i++) { // add 9 reds
		colors.push('red')
	}
	for (let i = 0; i < 8; i++) { // add 8 blues
		colors.push('blue')
	}
	for (let i = 0; i < 7; i++ ) { // add 7 whites
		colors.push('neutral')
	}
	colors.push('assassin') // add 1 black
	shuffleWordArray(colors) // shuffle colors array
	var colorArray = new Array(5) // initialize new array
	for (var i = 0; i < colorArray.length; i++) { // loop over array
		let j = 5*i
		colorArray[i] = colors.slice(j,j+5) // add row to array
	}
	console.log(colorArray) // print to console

	// add colors to boardArray 
	var coloredBoardArray = new Array(5)
	for (let i = 0; i < 5; i++) {
		coloredBoardArray[i] = []
		for (let j = 0; j < 5; j++) {
			coloredBoardArray[i][j] = [boardArray[i][j],colorArray[i][j]]
			console.log(`(${i},${j}): [${boardArray[i][j]}, ${colorArray[i][j]}]`)
		}
	}
	console.log(coloredBoardArray)

	// make innerHTML
	var makeTableHtmlString = () => {
		let tableHtmlString = `\n<div id="board" class="gridContainer">\n` // instead of <table id="boardTable">
		let i = 0
		boardArray.forEach(row => {
			tableHtmlString += `\n<tr class=">\n`
			row.forEach(word => {
				tableHtmlString += `<td>${i+=1 }</td>`
			})
			tableHtmlString += `\n</tr>\n`
		})
		tableHtmlString += `\n</table>\n`
		document.getElementById("board").innerHTML = tableHtmlString
	}

	let tableHtmlString = `\n<table>\n`
	coloredBoardArray.forEach(row => {
		tableHtmlString += `\n<tr>\n`
		row.forEach(word => {
			tableHtmlString += `<td class="${word[1]}">${word[0]}</td>`
		})
		tableHtmlString += `\n</tr>\n`
	})
	tableHtmlString += `\n</table>\n`
	console.log(tableHtmlString)
	document.getElementById("board").innerHTML = tableHtmlString

	function chooseMode(mode) {
		return mode
	}

	console.log(chooseMode("player"))

	var changeMode = (modeToSet) => {
		let modeElement = document.getElementsByClassName("mode")
		console.log(modeElement)
		let modeID = modeElement[0].id
		console.log(`modeID = ${modeID}; modeToSet = ${modeToSet}`)
		modeElement[0].id = modeToSet
		// this works: document.getElementById(modeToSet).innerHTML = 'spy'
	}
	changeMode('spymaster')

	hideThing(document.getElementById('start'))
}

document.addEventListener('DOMContentLoaded', () => {
	// start()
	document.getElementById('start').addEventListener('click', start)
})
