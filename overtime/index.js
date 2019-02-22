// alert('test');

var ime = "Pero";
ime = 'Janko';
ime = `Stanko`;

console.log(ime);

var prezime = 'Perovski';

var imePrezime = ime + " " + prezime;

console.log(imePrezime);

var prezimeIme = `${prezime} ${ime}`;

console.log(prezimeIme);

var tekst = `lorem ipsum dolor
sit AnimationEffect, bla bla bla`;

console.log(tekst.length);
console.log(tekst[2]);

var visina = 182;
console.log(visina);

var shirina = 50;

var rezultat = visina + shirina;

console.log(rezultat);

// *
// /
// -
// %

// console.log(5 % 2);
// console.log(5 % 3);
// console.log(15 % 3);
console.log(20 % 3);

var a = 1;
a++; // zgolemuvanje za 1
a++; // zgolemuvanje za 1
a++; // zgolemuvanje za 1
console.log(a);
console.log(++a);
console.log(a);

a += 3; //  a = a + 3;
console.log(a);

a *= 4;
console.log(a);

var r = (22 + 5) * 10;

console.log(r);

var vrne = false;
var duva = true;

console.log(vrne);
console.log(duva);

if(duva){
    console.log('Ponesi jakna');
}

if(vrne){
    console.log('Ponesi chador');
}

var pomalo = 2 < 10;
console.log(pomalo);

if(pomalo){
    console.log('Pomalo e...');
}

// bez pomoshna promanliva
if(2 < 20){
    console.log('POMALO');
}

// a < b - dali a e pomalo od b
// a > b - dali a e pogolemo od b
// a <= b - dali a e pomalo ili ednakvo na b
// a >= b - dali a e pogolemo ili ednakvo na b
// a != b - dali a e razlichno od b
// a == b - dali a e ednakvo na b
// a === b - dali a e apsolutno ednakvo so b (tip i vrednost)
// a !== b - dali a e apsolutno neednakvo so b (tip i vrednost)

// && - i 
// a && b - i a i b treba da bidat true
// || - ili
// a || b - ili a ili b treba da bidat true

var vrneDuva = vrne && duva;
console.log(vrneDuva);

var broj = 6;

if(broj <= 4){
    console.log('mal broj');
} else if(broj > 4 && broj <= 7){
    console.log('sreden broj');
} else if(broj > 7 && broj <= 10){
    console.log('golem broj');
}

// ako vrne "ponesi chador"
// ako duva "ponesi kaput"
// ako vrne i duva "ponesi montka"

vrne = true;
duva = true;

if(vrne && duva){
    console.log('ponesi montka');
} else if(vrne) {
    console.log('ponesi chador');
} else if(duva) {
    console.log('ponesi kaput');
}

if(vrne && !duva){
    console.log('ponesi chador');
} else if(!vrne && duva) {
    console.log('ponesi kaput');
} else if(vrne && duva) {
    console.log('ponesi montka');
} else {
    console.log('odeime na plazha');
}

// podatoci od input polinja koi gi popolnuva korisnikot
inputEmail = 'pero@pero.mk';
inputPassword = '223305';

// podatoci koi sistemot gi vleche od bazata na podatoci
DBEmail = 'pero@pero.mk';
DBPwd = '223305';

if(inputEmail == DBEmail && inputPassword == DBPwd){
    console.log('login successfull');
} else {
    console.log('login failed!');
}


ime = 'Persa';

switch(ime) {
    case 'Milka':
        console.log('Ja najde Milka');
        break;
    case 'Jasna':
        console.log('Povelete jas sum Jasna..');
        break;
    case 'Lile':
        console.log('Zdravo, jas sum Lile');
        break;
    default:
        console.log('Nemame vakov chovek kaj nas');
}





























