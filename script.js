const text = document.querySelector("#txtmsg");
const password = document.querySelector('#password');
const result = document.querySelector("#result");
var clutter = "";
var clutter2 = "";

const asciiToEmojiMapping = {
    'A': '😎',
    'B': '👀',
    'C': '🌵',
    'D': '🏁',
    'E': '😂',
    'F': '🚮',
    'G': '🍕',
    'H': '🐶',
    'I': '😇',
    'J': '🌈',
    'K': '😸',
    'L': '🦄',
    'M': '🐌',
    'N': '🌻',
    'O': '🌝',
    'P': '🌚',
    'Q': '😬',
    'R': '😜',
    'S': '🤗',
    'T': '💯',
    'U': '🎏',
    'V': '🚲',
    'W': '🎰',
    'X': '🍾',
    'Y': '🌮',
    'Z': '🍣',
    'a': '🥑',
    'b': '🐟',
    'c': '🐙',
    'd': '🐊',
    'e': '😈',
    'f': '👻',
    'g': '🦀',
    'h': '💩',
    'i': '😉',
    'j': '🌎',
    'k': '🙈',
    'l': '💰',
    'm': '😓',
    'n': '🔥',
    'o': '💃',
    'p': '💪',
    'q': '👽',
    'r': '😨',
    's': '🙌',
    't': '👾',
    'u': '🤑',
    'v': '👯',
    'w': '💦',
    'x': '🍤',
    'y': '🚗',
    'z': '⛵',
    '0': '🔅',
    '1': '🔮',
    '2': '🎉',
    '3': '📯',
    '4': '💸',
    '9': '️😍',
    '5': '🌴',
    '6': '💫',
    '7': '✨',
    '8': '🤨',
    '+': '🤠',
    '/': '😒',
    '=': '🔗'
};

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
    '💃': 'o',
    '🔥': 'n',
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
    '😍': '9',
    '🌴': '5',
    '💫': '6',
    '✨': '7',
    '🤨': '8',
    '🤠': '+',
    '😒': '/',
    '🔗': '=',
};

const encryption = (event) => {
    var input = document.getElementById("txtmsg").value;
    var pass = document.getElementById("password").value;
    var encrypted = CryptoJS.AES.encrypt(input, pass).toString();
    //console.log(pass)
    //console.log("e:", encrypted);
    const str = encrypted.split("");
    clutter = "";
    str.forEach(element => {
        clutter += asciiToEmojiMapping[element] || element; // Use the emoji mapping
    });
    document.querySelector("#result").style.display = "block";
    document.querySelector("#result").innerHTML = clutter;
}



const decryption = (event) => {
    const emojiText = document.getElementById("emojimsg").value;
    // console.log("emojiText",emojiText);
    const pass = document.getElementById("finalpassword").value;
    let decryptedEmojiText = "";
    const inputArray = Array.from(emojiText);
    // console.log(inputArray)
    let index = 0;
    while (index < inputArray.length) {
        let char = inputArray[index];
        if (emojiToAsciiMapping[char] === undefined) {
            decryptedEmojiText += '';
        } else {
            decryptedEmojiText += emojiToAsciiMapping[char];
        }
        index++;
    }
    //console.log("d:", decryptedEmojiText);
    decryptedEmojiText = decryptedEmojiText.trim()
    let decrypted = ''
    try {
        decrypted = CryptoJS.AES.decrypt(decryptedEmojiText, pass).toString(CryptoJS.enc.Utf8);
    } catch (e) {
        document.querySelector("#result").style.display = "block"
        document.querySelector("#result").style.color = "#f77668"
        document.getElementById("result").textContent = "Incorrect Password / No Emojis found :("
    }
    if (decrypted !== "") {
        document.querySelector("#result").style.display = "block"
        document.querySelector("#result").style.color = "#eee"
        document.getElementById("result").textContent = decrypted;
    }
    else {
        document.querySelector("#result").style.display = "block"
        document.querySelector("#result").style.color = "#f77668"
        document.getElementById("result").textContent = "Incorrect Password / No Emojis found :("
    }
}




function btnClicking() {
    document.querySelector("#dec-btn").addEventListener("click", function () {
        document.querySelector("#decryption").style.display = "block";
        document.querySelector("#encryption").style.display = "none";
        document.querySelector("#dec-btn").style.backgroundColor = "#333";
        document.querySelector("#enc-btn").style.backgroundColor = "#222";
        document.querySelector("#result").style.display = "none";
        document.querySelector("#main>h1 span img").style.rotate = "270deg";
    });

    document.querySelector("#enc-btn").addEventListener("click", function () {
        document.querySelector("#encryption").style.display = "block";
        document.querySelector("#decryption").style.display = "none";
        document.querySelector("#enc-btn").style.backgroundColor = "#333";
        document.querySelector("#dec-btn").style.backgroundColor = "#222";
        document.querySelector("#result").style.display = "none";
        document.querySelector("#main>h1 span img").style.rotate = "90deg";
    });
}
btnClicking();

document.querySelector("#encrypt-btn").addEventListener("click", function () {
    document.querySelector("#result").style.display = "block";
});

document.querySelector("#decrypt-btn").addEventListener("click", function () {
    document.querySelector("#result").style.display = "block";
});


const main = () => {
    document.querySelector("#encrypt-btn").addEventListener("click", encryption);
    document.querySelector("#decrypt-btn").addEventListener("click", decryption);
}
main()