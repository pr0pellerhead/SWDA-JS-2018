var a = document.querySelector('.a');
var b = document.querySelector('.b');
var op = document.querySelector('#op');
var res = document.querySelector('.res');
var calc = document.querySelector('.calc');

calc.addEventListener('click', function(){
    switch(op.value){ // '+', '-', '/', '*'
        case '+':
            res.value = parseInt(a.value) + parseInt(b.value);
            break;
        case '-':
            res.value = parseInt(a.value) - parseInt(b.value);
            break;
        case '/':
            res.value = parseInt(a.value) / parseInt(b.value);
            break;
        case '*':
            res.value = parseInt(a.value) * parseInt(b.value);
            break;
    }
});


// ******************************************************

var t = document.querySelector('.t');
var func = document.querySelector('.func');
var conv = document.querySelector('.conv');
var cv = document.querySelector('.cv');

t.style.border = '1px solid red';
t.value = '10';

conv.addEventListener('click', function(){
    if(func.value == 'f2c'){
        cv.value = (parseInt(t.value) - 32) * 5/9;
    } else if(func.value == 'c2f') {
        cv.value = parseInt(t.value) * 9/5 + 32;
    }
});


// ******************************************************

var images = document.querySelectorAll('.img-list img');
var modal = document.querySelector('.modal');
var modalImg = document.querySelector('.modal img');
var body = document.querySelector('body');
console.log(images);

for(var i = 0; i < images.length; i++){
    images[i].addEventListener('click', function(event){
        console.log(this); // this се однесува на елементот на кој е кликнато
        modalImg.src = this.src.replace('150', '300');
        modal.style.display = 'block';
        event.stopPropagation();
    });
}

body.addEventListener('click', function(){
    modal.style.display = '';
})

modal.addEventListener('click', function(event){
    // event.stopPropagation();
})