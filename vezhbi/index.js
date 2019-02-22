// funkcii

// definicija na funkcija
function sobiranje(a, b) { // function sobiranje(a, b) - function signature
    c = a + b;
    console.log(c);
}

// telo na funkcijata
// {
//     c = a + b;
//     console.log(c);
// }

sobiranje(3, 6);

// funkcii shto ne vrakjaat vrednost se vikaat "void" funkcii

function odzemanje(a, b) {
    var c = a - b;
    return c;
}

var d = odzemanje(4, 9);
console.log(d);


// funkcija parNepar

function parNepar(a) {
    if(a % 2 == 0){
        return 'par';
    } else {
        return 'nepar';
    }
}

var res = parNepar(2);
console.log(res); // par

res = parNepar(7);
console.log(res); // nepar

// 

function ubavMesec(m) {
    if(m.length % 2 == 0){
        return 'da';
    }
    return 'ne';
}


res = ubavMesec('Dekemvri'); // Dekemvri ima paren broj na bukvi i zatoa e ubav mesec
console.log(res); // da

res = ubavMesec('Januari'); // Januari ima neparen broj na bukvi za zatoa ne e ubav mesec
console.log(res); // ne


// **************************************************************************************

var delenje = function(a, b){ // anonimna funkcija dodelena na varijablata "delenje"
    return a / b;
}

res = delenje(3, 6);
console.log(res);


// 

var ploshtina = function(a, b) {
    return a * b;
}

res = ploshtina(2, 13);
console.log(res);

res = ploshtina(57, 298);
console.log(res);


// *******************************************


var calc1 = function(a, b, c) {
    var d = a * b;
    return c(d);
}

var calc2 = function(a) {
    return a * a;
}

res = calc1(3, 6, calc2);
console.log(res);

res = calc1(4, 7, function(a){
    return a + a;
});

console.log(res);

// *********************************************

var iminja = ['Vesna', 'Ana', 'Jasna'];
console.log(iminja[0]);
console.log(iminja[1]);
console.log(iminja[2]);

var f = 2;
console.log(iminja[f]);

var dolzina = iminja.length;
console.log(dolzina);

iminja[3] = 'Pero'; // dodavanje na element vo nizata na chetvrta pozicija
console.log(iminja);

iminja[2] = 'Janko'; // ova pravi promena na vrednosta so index 2 (Jasna)
console.log(iminja);

var max = iminja.length;

iminja[max] = 'Stojko';
console.log(iminja);

iminja.push('Marko'); // avtomatsko dodavanje na krajot od nizata
console.log(iminja);

iminja[80] = 'Bojan';
iminja.push('Kristijan');
console.log(iminja);
console.log(iminja.length);

var niza = [345, 'TEXT', false, 'PAK STRING', 'I PAK STRING', false, true, false, max, 11, 12, iminja];
console.log(niza);

niza = [345, 'TEXT', false, 'PAK STRING', 'I PAK STRING', false, true, false, max, 11, 12];

for(var i = 0; i < 100; i = i + 1){
    console.log('JS ', i);
}

for(var i = 0; i < niza.length; i++){
    // if(Number.isInteger(niza[i])){
    //     console.log(niza[i]);
    // }
    if(typeof niza[i] == "string"){
        console.log(niza[i]);
    }
}

if(2 == '2'){
    console.log("2 e ednakvo na '2'")
}

if(2 === '2'){
    console.log("2 e ednakvo na '2'")
}




