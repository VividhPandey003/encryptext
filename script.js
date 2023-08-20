
var clutter="";








function encryption()
{
    document.querySelector("#encrypt-btn").addEventListener("click",function()
    {
        var input = document.getElementById("txtmsg").value;
        var password = document.getElementById("password").value;

        const str= input.split("");
        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()}`;

        });

        document.querySelector("#result").style.display = "block"
        document.querySelector("#result").innerHTML= clutter;

        var dataarr = [];
        if(JSON.parse(localStorage.getItem('data1')))
        {
            dataarr = JSON.parse(localStorage.getItem('data1'))
            dataarr.push({"pass":password, "input":input, "clutter": clutter})
        }
        else{
            dataarr=[{"pass":password, "input":input, "clutter": clutter}]
        }
        dataarr=[{"pass":password, "input":input, "clutter": clutter}]

        localStorage.setItem('data1',JSON.stringify(dataarr))
    })
}
encryption()


function decryption()
{
    document.querySelector("#decrypt-btn").addEventListener("click",function()
    {
        var clutter2 = "";
        var input2 = document.querySelector("#") 
    })
}


















function btnClicking()
{
    document.querySelector("#dec-btn").addEventListener("click",function(){
        document.querySelector("#decryption").style.display = "block";
        document.querySelector("#encryption").style.display = "none";
        document.querySelector("#dec-btn").style.backgroundColor = "#333";
        document.querySelector("#enc-btn").style.backgroundColor = "#222";
        document.querySelector("#result").style.display = "none";
        document.querySelector("#main>h1 span img").style.rotate = "270deg";
    })
    document.querySelector("#enc-btn").addEventListener("click",function(){
        document.querySelector("#encryption").style.display = "block";
        document.querySelector("#decryption").style.display = "none";
        document.querySelector("#enc-btn").style.backgroundColor = "#333";
        document.querySelector("#dec-btn").style.backgroundColor = "#222";
        document.querySelector("#result").style.display = "none";
        document.querySelector("#main>h1 span img").style.rotate = "90deg";
    })
}

document.querySelector("#encrypt-btn").addEventListener("click", function()
{
    document.querySelector("#result").style.display = "block";
})
document.querySelector("#decrypt-btn").addEventListener("click", function()
{
    document.querySelector("#result").style.display = "block";
})
btnClicking()

