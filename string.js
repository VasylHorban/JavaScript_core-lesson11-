//1. make a string with a capital letter
let name = 'yura';
function myFunc(str) {
    return str[0].toUpperCase() + str.slice(1);
}
name = myFunc(name);
console.log(name);


//2. truncate extra lines
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 4) + ' ...';
    }
    return str;
}
console.log(truncate("Ось, що мені хотілося б сказати на цю тему:", 20));
console.log(truncate("Всім привіт!", 20));


//3. slice and trim a string
function extractCurrencyValue(str) {
   return +str.slice(1).trim();
}
console.log(extractCurrencyValue('$ 100'));
