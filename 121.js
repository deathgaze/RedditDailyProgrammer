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

// ChangeCoinRecursive : number[?] -> number
// Keep shoving coins into the ChangeCoin function
// until I have no non-zero coins left. Returns
// number of zero coins counted
function ChangeCoinRecursive(coins) {
	// The number of zero value coins so far...
	var zeroCount = 0;
	for (var i = coins.length - 1; i >= 0; i--) {
		// Count & Purge
		if (coins[i] == 0) {
			zeroCount++;
			coins.splice(i, 1);
		} else {
			// Shove the rest of the Coins in
			zeroCount += ChangeCoinRecursive(ChangeCoin(coins[i]));
		}
	};
	return zeroCount;
}
console.log(ChangeCoinRecursive([1000]));

