let count = 0
let cookieCount = document.getElementById("cookieCount") 
let resetBtn = document.getElementById("reset")
let audio = document.getElementById("clickSound");

function increment() {
    count++ //I decided to use count++ to showcase that at this time, I knew this trick. Otherwise I would use count = count +1
    cookieCount.innerText = count;
    audio.currentTime = 0; 
    audio.play();
    
}

function reset() {
    count = 0; 
    cookieCount.innerText = count;
    

}

resetBtn.addEventListener("click", reset);