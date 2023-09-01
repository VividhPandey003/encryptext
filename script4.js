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
    'm': '❤',
    'n': '️💤',
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
    '5': '🌴',
    '6': '💫',
    '7': '✨',
    '8': '☀',
    '9': '️🐛',
    '+': '🤠',
    '/': '😒',
    '=': '🔗'
};

function encryption() {
    document.querySelector("#encrypt-btn").addEventListener("click", function () {
        var input = document.getElementById("txtmsg").value;
        var pass = document.getElementById("password").value;
        var encrypted = CryptoJS.AES.encrypt(input, pass).toString();
        console.log("encrypted:", encrypted);
        const str = encrypted.split("");
        clutter = "";
        str.forEach(element => {
            clutter += asciiToEmojiMapping[element] || element; // Use the emoji mapping
            console.log(clutter)
        });
        document.querySelector("#result").style.display = "block";
        document.querySelector("#result").innerHTML = clutter;
    });
}

encryption();

// const emojiToAsciiMapping = invertMapping(asciiToEmojiMapping);

// function invertMapping(mapping) {
//     const inverted = {};
//     for (const key in mapping) {
//         if (mapping.hasOwnProperty(key)) {
//             inverted[mapping[key]] = key;
//         }
//     }
//     console.log("Inverted=", inverted);
//     return inverted;
// }
function decryption() {
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
      '❤': 'm',
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
      '☀': '8',
      '️🐛': '9',
      '🤠': '+',
      '😒': '/',
      '🔗': '=',
    };
  
    document.querySelector("#decrypt-btn").addEventListener("click", function () {
      const emojiText = document.getElementById("result").textContent;
      const pass = document.getElementById("password").value;
      let decryptedEmojiText = "";
  
      for (let i = 0; i < emojiText.length; i++) {
        if (emojiText[i] === ' ') {
          decryptedEmojiText += ' ';
          continue;
        }
  
        let emojiPart = emojiText[i];
        while (i + 1 < emojiText.length && emojiText[i + 1] !== ' ') {
          emojiPart += emojiText[i + 1];
          i++;
        }
  
        if (emojiPart in emojiToAsciiMapping) {
          decryptedEmojiText += emojiToAsciiMapping[emojiPart];
        } else {
          decryptedEmojiText += emojiPart; // If not found in mapping, keep the original emoji
        }
      }
  
      document.getElementById("decrypted-result").textContent = decryptedEmojiText;
    });
  }
  
  decryption();
  



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