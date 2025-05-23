{
    let a,b,mul;
    a = 5;
    b = 3;
    mul = a * b;
    console.log(mul);
}
{
    let photosInFolder, photosOnPage, numberOfPage;
    photosInFolder = parseInt(prompt("Enter count photos in folder: ", 10));
    photosOnPage = parseInt(prompt("Enter count photos in one page: ", 10));

    numberOfPage = Math.ceil(photosInFolder / photosOnPage);
    alert("CountPages = " + numberOfPage)
}

{
    let a = 1, b;
    a++;
    console.log(a);
}

{
    let number, d1,d2,d3,d4;
    number =parseInt(prompt("vvedi chislo"));
    d1 = number % 10;
    d2 = Math.floor(number/10)%10;
    d3 = Math.floor(number/100)%10;
    d4 = Math.floor(number/1000)%10;    
}