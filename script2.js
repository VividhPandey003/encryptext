const text = document.querySelector("#txtmsg");
const password = document.querySelector('#password');
const result = document.querySelector("#result");
var clutter = "";
var clutter2 = "";

localStorage.clear()
function encryption() {
    document.querySelector("#encrypt-btn").addEventListener("click", function () {
        var input = document.getElementById("txtmsg").value;
        var pass = document.getElementById("password").value;
        var clutter2 = "";
        const str = input.split("");
        clutter = "";
        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()} `;
        });
        
        document.querySelector("#result").style.display = "block";
        document.querySelector("#result").innerHTML = clutter;
        
        var dataarr = [];
        if (JSON.parse(localStorage.getItem('data1'))) {
            dataarr = JSON.parse(localStorage.getItem('data1'));
            dataarr.push({"pass": pass, "input": input, "clutter": clutter});
            
        } else {
            dataarr = [{"pass": pass, "input": input, "clutter": clutter}];
        }
        
        localStorage.setItem('data1', JSON.stringify(dataarr));
        console.log(dataarr)
    });
}
encryption();


// function decryption() {
//     document.querySelector("#decrypt-btn").addEventListener("click", function () {
//         // Get the input and final password from the user
//         const input2 = document.querySelector("#emojimsg").value;
//         const finalPass = document.querySelector("#finalpassword").value;
//         // Convert the input emojis into the cluster format
//         const clutter2 = input2
//         .split(" ")
//         .map(entity => String.fromCodePoint(parseInt(entity.substring(2), 10)))
//         .join("");

//         console.log(clutter2)
//         // Retrieve stored data from localStorage
//         const user = JSON.parse(localStorage.getItem('data1'));
//         console.log("Stored User Data:", user);

//         // Loop through stored data to find a matching entry
//         let found = user.find(i => i.clutter === clutter2);

//         for (let entry of user) {
//             console.log("Entry Clutter:", entry.clutter);
//             console.log("Entry Pass:", entry.pass);
//         }
        
//         console.log("Clutter2:", clutter2);
//         console.log("Found Entry:", found);

//         if (found && found.pass === finalPass) {
//             // Correct password and matching clutter
//             result.style.display = "block";
//             result.style.color = "#eee";
//             result.innerHTML = found.input;
//         } else {
//             // Incorrect password or no matching entry
//             result.style.display = "block";
//             result.style.color = "#f77668";
//             result.innerHTML = "Incorrect Password / No Emojis found :(";
//         }
//     });
// }

function decryption() {
    document.querySelector("#decrypt-btn").addEventListener("click", function () {
        // Get the input and final password from the user
        const input2 = document.querySelector("#emojimsg").value;
        const finalPass = document.querySelector("#finalpassword").value;
        console.log("Input: ", input2)
        // Convert the input emojis into the cluster format
        const clutter2 = input2
            .split(" ")
            .map(entity => entity.substring(4)) // Remove "&#128" prefix
            .join("");
            console.log(clutter2)
        // Retrieve stored data from localStorage
        const user = JSON.parse(localStorage.getItem('data1'));
        // Find a matching entry based on the clutter
        let found = user.find(i => i.clutter === clutter2);
        console.log("found= ", found)
        if (found) {
            if (found.pass === finalPass) {
                // Correct password and matching clutter
                result.style.display = "block";
                result.style.color = "#eee";
                // Convert clutter back to original text
                const originalText = found.input;
                result.innerHTML = originalText;
            } else {
                // Incorrect password
                result.style.display = "block";
                result.style.color = "#f77668";
                result.innerHTML = "Incorrect Password";
            }
        } else {
            // No matching entry found
            result.style.display = "block";
            result.style.color = "#f77668";
            result.innerHTML = "No Emojis found :(";
        }
    });
}

// function decryption() {
//     document.querySelector("#decrypt-btn").addEventListener("click", function () {
//         // Get the input and final password from the user
//         const input2 = document.querySelector("#emojimsg").value;
//         const finalPass = document.querySelector("#finalpassword").value;

//         console.log("Input: ", input2)
//         // Convert the input emojis into the cluster format
//         const clutter2 = input2
//             .split(" ")
//             .map(entity => entity.substring(4)) // Remove "&#128" prefix
//             .join("");

//             console.log(clutter2)
//         // Retrieve stored data from localStorage
//         const user = JSON.parse(localStorage.getItem('data1'));

//         // Find a matching entry based on the clutter
//         let found = user.find(i => i.clutter === clutter2);
//         console.log("found= ", found)
//         if (found) {
//             if (found.pass === finalPass) {
//                 // Correct password and matching clutter
//                 result.style.display = "block";
//                 result.style.color = "#eee";

//                 // Convert clutter back to original text
//                 const originalText = found.input;
//                 result.innerHTML = originalText;
//             } else {
//                 // Incorrect password
//                 result.style.display = "block";
//                 result.style.color = "#f77668";
//                 result.innerHTML = "Incorrect Password";
//             }
//         } else {
//             // No matching entry found
//             result.style.display = "block";
//             result.style.color = "#f77668";
//             result.innerHTML = "No Emojis found :(";
//         }
//     });
// }


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
    console.log(localStorage.getItem("password"))
    console.log(localStorage.getItem("emojis"))
});

document.querySelector("#decrypt-btn").addEventListener("click", function () {
    document.querySelector("#result").style.display = "block";
});  