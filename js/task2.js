{
    let number, n1, n2;
    number = parseInt(prompt("Vvedite dvuznachnoe chislo: "));

    n1 = number % 10;
    n2 = Math.floor(number/10)%10;
    sum = n1 + n2
    alert("Summa cifr: " + sum);
}