// Pagrindines uzduotys
// 1. "use-strict" rezimo panaudojimas.
"use strict"

//2. Kintamuju aprasymas.

var skaicius1, skaicius2, skaicius3, skaicius4;
skaicius1 = 10;
skaicius2 = 20;
skaicius3 = 30;
skaicius4 = 40;



var suma;
suma = skaicius1 + skaicius2 + skaicius3 + skaicius4;

var sandauga;
sandauga = skaicius1 * skaicius2 * skaicius3 * skaicius4;

// 3. Kintamuju sumos ir sandaugos i konsole isvedimas.
console.log("Tiesiog skaiciai");
console.log(skaicius1);
console.log(skaicius2);
console.log(skaicius3);
console.log(skaicius4);
console.log("Suma");
console.log(suma);
console.log("Sandauga");
console.log(sandauga);

// 4-5. Kintamuju reiksmiu vietu keitimas, naudojant laikina bei pastovia kintamaja.

let laikinasis_kintamasis;

laikinasis_kintamasis = skaicius1;
skaicius1 = skaicius2;
skaicius2 = laikinasis_kintamasis;

// 6. Rezultatu isvedimas i alert.
alert(" Po sukeitimu skaicius1 =  " +  skaicius1);
alert(" Po sukeitimu skaicius2 =  " +  skaicius2);

[skaicius3,skaicius4] = [skaicius4,skaicius3];
alert(" Po sukeitimu skaicius3 =  " +  skaicius3);
alert(" Po sukeitimu skaicius4 =  " +  skaicius4);

// 7. maxSkaicius
var maxSkaicius = Number.MAX_VALUE;
console.log(maxSkaicius);


///// Papildoma uzduotis
//1.Kintamuju kurimas

var skaicius5, skaicius6;
skaicius5 = 50;
skaicius6 = 60;

//2. Kintamuju reiksmiu keitimas, naudojant XOR operatoriu

skaicius5 = skaicius5 ^ skaicius6;
skaicius6 = skaicius5 ^ skaicius6;
skaicius5 = skaicius5 ^ skaicius6;

// skaicius5 =50(110010 dvejetainėje sistemoje), skaicius2=60(111100 dvejetaineje sistemoje)
// darant pirma "^" operacija, 110010^111100, gauname skaicius5= 001110
// darant antra, 001110^111100, gauname skaicius6=110010
// darant trecia, 001110^110010, gauname skaicius 5=111100

// 3. Rezultato patalpinimas HTML dokumeno div zymeje.

document.write(skaicius5, ",", skaicius6);

