

// var div = document.getElementsByTagName('div');
// console.log(div);

// var div = document.querySelector('div span');
// console.log(div);








var naslov = document.querySelector('h1 .title');
console.log(naslov);

var listTitle = document.querySelectorAll('li span'); 
console.log(listTitle);

var text = document.querySelector('#p2 span');
console.log(text);  
text.innerHTML = 'BLA BLA BLA';
text.classList.add('crveno');
// text.classList.remove('crveno');

var btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    var p = document.querySelector('#p1');
    p.classList.toggle('show');
});

var t = document.querySelector('h1.title');
t.style.color = 'green';
t.style.fontWeight = '100'; // font-weight



console.log(t.title);

var i = document.querySelector('img');
console.log(i.src);
console.log(i.alt);

// ****************************************


var iminja = ['Pero', 'Janko', 'Stanko', 'Vancho', 'Elena', 'Vesna', 'Jana', 'Irena'];
var ime = document.querySelector('.ime');

// console.log(ime.value);

// ime.addEventListener('keyup', function(){
//     // console.log(ime.value);
//     for(var j = 0; j < iminja.length; j++){
//         if(iminja[j] == ime.value){
//             console.log('IMETO E NAJDENO');
//             break;
//         }
//     }
// });

var btnIme = document.querySelector('.btn-ime');

btnIme.addEventListener('click', function(){

    var found = false;

    for(var j = 0; j < iminja.length; j++){
        if(iminja[j] == ime.value){
            alert('IMETO E NAJDENO');
            found = true;
            break;
        }
    }

    if(!found){
        alert('IMETO NE E NAJDENO');
    }
});


// *********************************************

var iminja2 = ['Ana', 'Marija', 'Vesna', 'Aleksandra'];

var MAX = 0;
var MIN = 1000;
var dIme = '';
var kIme = '';

for(var i = 0; i < iminja2.length; i++){
    if(iminja2[i].length > MAX){
        MAX = iminja2[i].length;
        dIme = iminja2[i];
    }

    if(iminja2[i].length < MIN){
        MIN = iminja2[i].length;
        kIme = iminja2[i];
    }
}

console.log(kIme, " e najkratko ime");
console.log(dIme, " e najdolgo ime");



// *********************************************


var ime2 = document.querySelector('.ime2');
var btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', function(){
    if(ime2.value.length > 0 && ime2.value.length < 5){
        alert('kratko ime');
    } else if(ime2.value.length >= 5 && ime2.value.length <= 8){
        alert('ime so sredna dolzhina');
    } else if(ime2.value.length > 8) {
        alert('dolgo ime');
    }
});