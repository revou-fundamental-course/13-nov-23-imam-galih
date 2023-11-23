const sendButton = document.getElementsByClassName("primary-button")
const nameInput = document.getElementById("name-input")
const emailInput = document.getElementById("email-input")
const imageSlider = document.getElementById("slider")

sendButton[0].addEventListener("click", function(event){
    if (nameInput.value.length === 0 || emailInput.value.length === 0) {
        alert("Tidak boleh ada yang kosong!")
    }
})

// function validateForm(){
//     const nameInput = document.getElementById["name-input"].value
//     const emailInput = document.getElementById["email-input"].value
//     const intererstOption = document.getElementById["interest-select"].value

//     if (nameInput == ""){
//         document.getElementById("error-name").innerHTML = "Tidak boleh kosong!"
//         document.getElementById("error-email").innerHTML = "Tidak boleh kosong!"
//         document.getElementById("error-option").innerHTML = "Tidak boleh kosong!"

//         return false
//     }

//     document.getElementById("name-input").innerHTML = nama;
//     document.getElementById("error-name").innerHTML = "";
//     document.getElementById("email-input").innerHTML = email;
//     document.getElementById("error-emil").innerHTML = "";
//     document.getElementById("interest-select").innerHTML = option;
//     document.getElementById("error-option").innerHTML = "";

//     return false;
// }

var i = 0
const images = [
    "gambar/geblek-pari-view-menoreh.jpg", 
    "gambar/fahrul-razi-XJsaic_WLwg-unsplash.jpg", 
    "gambar/naufal-ardi-santoso-DVgIwpGVNJA-unsplash.jpg"
]
function bannerSlide() {
    i += 1
    if (i == images.length - 1) {
        i = 0
    }
    imageSlider.src = images [i]
}
setInterval(bannerSlide, 2000)