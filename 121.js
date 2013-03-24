// ChangeCoin : number -> number[3]
// Creates 3 coins of value n/2, n/3 and n/4
function ChangeCoin(coin) {
	var resultCoins = new Array();
	resultCoins.push(Math.floor(coin/2));
	resultCoins.push(Math.floor(coin/3));
	resultCoins.push(Math.floor(coin/4));
	return resultCoins;
}
// tests...
var testResult = ChangeCoin(19);
console.log(testResult);


