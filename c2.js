// soberisopet
// soberi_so_pet // snake case
// soberiSoPet // camel case
function soberiSoPet(a) {
    var y = 5;
    console.log(a + y);
}

soberiSoPet(1);
soberiSoPet(5);
soberiSoPet(6);
soberiSoPet(3);
soberiSoPet(21);
soberiSoPet(65);
soberiSoPet(24);
soberiSoPet(58);
soberiSoPet(32);
soberiSoPet(44);
soberiSoPet(23);

function soberi(a, b) {
    console.log(a + b);
}

soberi(2, 6);
soberi(21, 8);
soberi(32, 7);

function f2c(f){
    var c = (f - 32) * 5/9;
    return c;
}

function c2f(c){
    var f = c * 9/5 + 32;
    return f;
}

var c = f2c(100); // fahrenheit -> celsius // 37.7777778
console.log(c);

var f = c2f(28); // celsius -> fahrenheit // 82.4 
console.log(f);

var d = f2c(35);
console.log(d);

c = 2;
console.log(c);

var fn1 = function(){ // anonimna funkcija
    console.log('fn1');
}

var fn2 = () => { // fat-arrow funkcija
    console.log('fn2');
}

fn1();
fn2();

var student = {
    ime: 'Bojan',
    prezime: 'Bojanovski',
    uchi: function(){
        console.log(this.ime, ' uchi');
    }
}

student.ime = 'Pero';
student.uchi();

var brojNaPoeni = 50;















// if(brojNaPoeni >= 60){
//     console.log('PASS!');
// } else {
//     console.log('FAIL!');
// }

if(brojNaPoeni >= 60 && brojNaPoeni < 70){
    console.log('dvojka');
} else if(brojNaPoeni >= 70 && brojNaPoeni < 80){
    console.log('trojka');
} else if(brojNaPoeni >= 80 && brojNaPoeni < 90){
    console.log('cetvorka');
} else if(brojNaPoeni >= 90){
    console.log('petka');
} else {
    console.log('FAIL!!!! Zemi uchi!');
}

var ime = 'I';
console.log(ime.length); // 5

function mesec(m) {
    var p = m.length % 2;
    if(p){
        console.log('neubav');
        return false;
    } else {
        console.log('ubav');
        return true;
    }
}

function mesec(m) {
    return m.length % 2 == 0 ? true : false;
}

mesec('Dekemvri'); // true
mesec('Januari'); // false



