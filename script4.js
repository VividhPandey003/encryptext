const text = document.querySelector("#txtmsg");
const password = document.querySelector('#password');
const result = document.querySelector("#result");
var clutter = "";
var clutter2 = "";

function encryption() {
    document.querySelector("#encrypt-btn").addEventListener("click", function () {
        var input = document.getElementById("txtmsg").value;
        var pass = document.getElementById("password").value;
        var clutter2 = "";
        var encrypted = CryptoJS.AES.encrypt(input, pass).toString();
        console.log("encrypted:", encrypted)
        // console.log("bleh", encrypted.toString() );


        const str = encrypted.split("");
        clutter = "";
        console.log(str)
        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()} `;
        });

        document.querySelector("#result").style.display = "block";
        document.querySelector("#result").innerHTML = clutter;
    });
}
encryption();

function decryption() {
    document.querySelector("#decrypt-btn").addEventListener("click", function () {
        const input2 = document.querySelector("#emojimsg").value;
        const finalPass = document.querySelector("#finalpassword").value;
        
        // const decrypted = CryptoJS.AES.decrypt(input, finalpass);
        console.log("Input: ", input2)
        
        console.log("clutter: ", clutter2)

    })

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
    console.log(localStorage.getItem("password"))
    console.log(localStorage.getItem("emojis"))
});

document.querySelector("#decrypt-btn").addEventListener("click", function () {
    document.querySelector("#result").style.display = "block";
});  