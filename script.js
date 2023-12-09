const extendHex = (shortHex) => {
  // write your code here
	length = shortHex.length
    if (length == 4) {
        console.log(`#${shortHex[1]}${shortHex[1]}${shortHex[2]}${shortHex[2]}${shortHex[3]}${shortHex[3]}`)
    }
    else {
        console.log(`#${shortHex[0]}${shortHex[0]}${shortHex[1]}${shortHex[1]}${shortHex[2]}${shortHex[2]}`)
    }
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
