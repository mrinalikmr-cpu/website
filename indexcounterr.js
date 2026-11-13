//counter program  is a simple program built to keep track of a total number
// that changes when a user interact with the page
// user jo b change karta hai kisi v website usko track karna ka easy way

//conter program
const decreasebtn = document.getElementById("decreasebtn");
const increasebtn =document.getElementById("increasebtn");
const resetbtn =document.getElementById("resetbtn");

const countLable = document.getElementById("countLable");
let count = 0; // we can increament and decreament count

increasebtn.onclick = function () {
    count++;
    countLable.textContent = count;
}
resetbtn.onclick = function () {
    count = 0;
    countLable.textContent = count;
}
decreasebtn.onclick = function () {
    count--;
    countLable.textContent = count;
}

