
//==========================================
//==========================================
//  1 - Vibor elementa (tega) na stanichke
//      1.1 - Vibor elementa po ID
//==========================================
const h1 = document.getElementById("title");
console.log(h1);
const h2 = document.getElementById("titleMenu");
console.log(h2);
//==========================================




//==========================================
//      1.2 - vibor elementa po selecroru
//==========================================
const menu = document.querySelector(".menu");
console.log(menu);
//==========================================


//==========================================
//      1.3 - vibor neskolkih elementov
//==========================================
const links = document.querySelectorAll("a.link");
console.log(links);
//==========================================


//==========================================
//==========================================
//  2- rabota s kontentom (soderjimim tegov)
//      2.1 -
//==========================================
console.log(h1.textContent);
console.log(h1.innerHTML);
console.log(h1.innerText);
console.log(h1.outerHTML);
console.log(h1.outerText);

h1.textContent = "Noviy zagolovok <img src = 'img/bus-front.svg' alt = 'logo'>"//izmenenie soderjimogo
h1.innerHTML = "Noviy zagolovok <img src = 'img/bus-front.svg' alt = 'logo'>"//izmenenie soderjimogo

//==========================================
//==========================================
//3 - работа со стилями (атрибут-style)
//==========================================
menu.style.background = "yellow";
menu.style.border = "2px green solid";
menu.style.fontSize = "30px";

//==========================================
//==========================================
//  4 - работа с классами (атрибут-класс)
//==========================================
const block = document.getElementById("block");
block.classList.add("border");
block.classList.add("large");

block.classList.remove("large")
console.log(block.classList.contains("border"))

//==========================================
//  5 - работа с атрибутами
const link  =document.querySelector(".link");
console.log(link.getAttribute("href"));

link.setAttribute("href", "https://midis.ru/");
//==========================================


//==========================================
//==========================================
//  6 - создание нового элемента
//==========================================
const img = document.createElement("img");//sozdanie elementa virtualno
img.setAttribute("src", "img/2.jpg");//atribute
img.setAttribute("alt", "Fox");//atribute
block.append(img);



//==========================================
//==========================================
// 7 - Работа с предками
//==========================================




//==========================================
//==========================================
// 8 - работа с потомками
//==========================================
const lastLink = document.querySelector(".menu li:last-child a");
console.log(lastLink);
const parent = lastLink.closest("li");
console.log(parent);
console.log(parent.closest(".menu"))


//==========================================
//==========================================
// 9 - работа с событиями
//==========================================

const btn = document.getElementById("btn");
const circle = document.querySelector(".circle");

// btn.addEventListener("click", function(){
//     circle.style.transform = "translateX(600px)";
// })
btn.addEventListener("click", function(){
    circle.classList.toggle("move");
})







