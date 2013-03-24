

// ChangeCoin : number -> number[3]
// Creates 3 coins of value n/2, n/3 and n/4
function ChangeCoin(coin) {
	// Invalid coin
	if (coin <= 0) {
		return [];
	}

	// Cha-ching!
	var resultCoins = new Array();
	resultCoins.push(Math.floor(coin/2));
	resultCoins.push(Math.floor(coin/3));
	resultCoins.push(Math.floor(coin/4));
	return resultCoins;
}
/*// tests...
function ChangeCoinTest(test, control) {
	var result = ChangeCoin(test);
	result.sort();
	control.sort(); 
	if (result.toString() == control.toString()) {
		console.log("SUCCEEDED test " + test + 
			" result " + result + " == " + control);
	} else {
		console.log("FAILED test " + test + 
			" result " + result + " != " + control);
	}

}
ChangeCoinTest(19, [9, 6, 4]);
ChangeCoinTest(2, [1, 0, 0]);
ChangeCoinTest(0, []);
*/
// The number of zero value coins so far...
var ZeroCount = 0;
// ChangeCoinRecursive : number[?] -> number[?]
// Keep shoving coins into the ChangeCoin function
// until I have no non-zero coins left. 
function ChangeCoinRecursive(coins) {
	for (var i = coins.length - 1; i >= 0; i--) {
		// Count & Purge
		if (coins[i] == 0) {
			ZeroCount++;
			coins.splice(i, 1);
		} else {
			// Shove the rest of the Coins in
			ChangeCoinRecursive(ChangeCoin(coins[i]));
		}
	};
}
ChangeCoinRecursive([1000]);
console.log(ZeroCount);

