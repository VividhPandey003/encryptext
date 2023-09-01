function emojisToText(input) {
    const emojiToAsciiMapping = {
        '😎': 'A',
        '👀': 'B',
        '🌵': 'C',
        '🏁': 'D',
        '😂': 'E',
        '🚮': 'F',
        '🍕': 'G',
        '🐶': 'H',
        '😇': 'I',
        '🌈': 'J',
        '😸': 'K',
        '🦄': 'L',
        '🐌': 'M',
        '🌻': 'N',
        '🌝': 'O',
        '🌚': 'P',
        '😬': 'Q',
        '😜': 'R',
        '🤗': 'S',
        '💯': 'T',
        '🎏': 'U',
        '🚲': 'V',
        '🎰': 'W',
        '🍾': 'X',
        '🌮': 'Y',
        '🍣': 'Z',
        '🥑': 'a',
        '🐟': 'b',
        '🐙': 'c',
        '🐊': 'd',
        '😈': 'e',
        '👻': 'f',
        '🦀': 'g',
        '💩': 'h',
        '😉': 'i',
        '🌎': 'j',
        '🙈': 'k',
        '💰': 'l',
        '😓': 'm',
        '️💤': 'n',
        '💃': 'o',
        '💪': 'p',
        '👽': 'q',
        '😨': 'r',
        '🙌': 's',
        '👾': 't',
        '🤑': 'u',
        '👯': 'v',
        '💦': 'w',
        '🍤': 'x',
        '🚗': 'y',
        '⛵': 'z',
        '🔅': '0',
        '🔮': '1',
        '🎉': '2',
        '📯': '3',
        '💸': '4',
        '🌴': '5',
        '💫': '6',
        '✨': '7',
        '🤨': '8',
        '️🐛': '9',
        '🤠': '+',
        '😒': '/',
        '🔗': '=',
    };

    // Split the input into an array of Unicode characters
    const inputArray = Array.from(input);

    let result = '';

    for (const char of inputArray) {
        if (emojiToAsciiMapping[char]) {
            result += emojiToAsciiMapping[char];
        } else {
            result += char;
        }
    }
    return result;
}

// Example usage:
const inputText = '🎏🎉🚮🙌🐊🍕🚲🙈🍾🔮️🐛️💤🌻😬🥑🔅👀🌚🎏😬🍕🌝✨🌻💸😇☀🤗🎉☀🐟🦄🍣😈😒👯🌵🐶🌝👻🌵🤠😂🔗';
const convertedText = emojisToText(inputText);
console.log(convertedText); // Output: 'BCSGE'



//U2FsdGVkX1+6gotgT6Ru+7AF0+erdcdM1Pjn88rE6Uc=