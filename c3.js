var bukva = "A";

if(bukva == "A") {
    console.log("A");
} else if(bukva == "B") {
    console.log("B");
} else if(bukva == "C"){
    console.log("C");
} else {
    console.log("Непозната буква...");
}

switch(bukva) {
    case "A":
        console.log("A");
        break;
    case "B":
        console.log("B");
        break;
    case "C":
        console.log("C");
        break;
    default:
        console.log("Непозната буква...");
}

function mesec(m) {
    var bojana = m.length % 2;
    switch(bojana){
        case 1:
            console.log("Ubav mesec");
            break;
        case 0:
            console.log("Neubav mesec");
            break;
    }
}

mesec("Januari");

var ime = "Bojan";

var iminja = ["Petko", "Vasko", "Trajanka"];
console.log(iminja);
console.log(iminja[0]);
console.log(iminja[1]);
console.log(iminja[2]);
console.log(iminja.length);

for(var i = 0; i < 100; i = i + 1){
    console.log('in!');
}
console.log('out!');

var count = 0;

for(var i = 0; i <= iminja.length; i++){ // i++ е исто што и i = i + 1
    console.log(i);
    console.log(iminja[i]);
    console.log(count);
}



// ДОМАШНА ЗАДАЧА
// Да се отпечати секој трет парен број помеѓу 0 и 100