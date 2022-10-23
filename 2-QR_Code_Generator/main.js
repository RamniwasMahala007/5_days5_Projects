let contain = document.querySelector(".container");
let generatebtn = contain.querySelector(".box button");
let qrInput = contain.querySelector(".box input");
let loader = document.querySelector("#loading");
let image = contain.querySelector(".image img")

function qrCodeDisplay()
{
    let qrValue = qrInput.value;
    console.log(qrValue)
    loader.style.display = "block";
    image.onload = function()
    {
        loader.style.display ="none";
        
   }
   let api = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

   image.src = api;


}


generatebtn.addEventListener("click",qrCodeDisplay)

