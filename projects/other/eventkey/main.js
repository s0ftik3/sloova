const keyCodes = {
    113: 'Q', 119: 'W', 101: 'E', 114: 'R', 116: 'T', 121: 'Y',
    117: 'U', 105: 'I', 111: 'O', 112: 'P', 91: '{', 93: '}',
    92: '\\', 97: 'A', 115: 'S', 100: 'D', 102: 'F', 103: 'G',
    104: 'H', 106: 'J', 107: 'K', 108: 'L', 59: ';', 39: '\'',
    122: 'Z', 120: 'X', 99: 'C', 118: 'V', 98: 'B', 110: 'N',
    109: 'M', 44: ',', 46: '.', 47: '/',  48: '0', 49: '1',
    50: '2', 51: '3', 52: '4', 53: '5', 54: '6', 55: '7',
    56: '8', 57: '9', 42: 'MULTIPLY', 43: 'ADD', 45: 'SUBTRACT', 
    58: 'DIVIDE', 61: 'equals', 96: '`', 32: 'SPACE', 13: 'ENTER'
};

function displayPressed(key) {
    var field = document.getElementById('keyPressed');
    if (keyCodes[key.keyCode] == undefined) {
        field.placeholder = 'The key was not determined.';
    } else {
        field.placeholder = keyCodes[key.keyCode];
    }
};

document.addEventListener('keypress', displayPressed);