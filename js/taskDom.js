//=========================1===========================

const testText = document.querySelector(".test-text");
testText.innerHTML = "Привет, <b>мир</b>! Меня зовут Nikita."
testText.style.background = "blue";
testText.style.color = "darkblue";
testText.style.border = "4px solid darkred";
testText.style.padding = "10px";



//=========================2===========================

const email = document.getElementById("email");
const remember = document.getElementById("remember");
const btn = document.getElementById("btn");

email.value = "mail@mail.ru"
email.disabled = "true"
remember.checked = "true"
btn.setAttribute("value", "Войти")



//=========================3===========================
const block = document.querySelector(".block-hover");
const link = document.createElement("a");
link.setAttribute("href","https://midis.ru/");
link.setAttribute("target","_blank");

link.innerHTML = "azazazazazaza"
link.classList.add("linkkkkk");
block.append(link);



//=========================4===========================

const puskBtn = document.getElementById("puskBtn");
const ballon = document.querySelector(".ballon");

puskBtn.addEventListener("click", function(){
    ballon.classList.toggle("move");
})
