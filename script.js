let count = 0
let cookieCount = document.getElementById("cookieCount")
let resetBtn = document.getElementById("reset")


function increment() {
    count++ //I decided to use count++ to showcase that at this time, I knew this trick. Otherwise I would use count = count +1
    cookieCount.innerText = count
}

function reset() {
    count = 0; 
    cookieCount.innerText = count;
    

}

resetBtn.addEventListener("click", reset);