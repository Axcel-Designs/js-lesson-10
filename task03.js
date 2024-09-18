// Task 3: Create a dog class and add the following methods: breed, walk,size,wiggleTail, and tail. Add the following fields: breed, colour, size, tail. Instantiate the class to create at least three different breeds. Develop a simple UI for dog with buttons for breed,size,tail, wiggleTail. Add an event listener, on click, call the method to display what the dog is doing to the user.

// button 
const btnBark = document.getElementById('bark');
const btnWalk = document.getElementById('walk');
const btnRun = document.getElementById('run');
const btnTail = document.getElementById('wiggleTail');
const btnGetAngry = document.getElementById('getAngry');


// paragraph text
const paraBark = document.getElementById('barktext');
const paraWalk = document.getElementById('walktext');
const paraRun = document.getElementById('runtext');
const paraTail = document.getElementById('wiggleTailtext');
const paraGetAngry = document.getElementById('getAngrytext');


class Dog {
    constructor(breed, colour, size, tail) {
        this.breed = breed;
        this.colour = colour;
        this.size = size;
        this.tail = tail;
    }
    bark(){
        paraBark.innerText = this.breed;
    }
    Walk(){
        paraWalk.innerText = this.colour}

    run(){
        paraRun.innerText = this.size;}

    wiggleTail(){
        paraTail.innerText = this.tail;}

    getAngry(){
        paraGetAngry.innerText = this.breed;}
}
const germanShepard = new Dog('GermanShepard', 'black and White', 'big', true);
const pitBull = new Dog('GermanShepard', 'Brown', 'small', false);
const greyhound = new Dog('Greyhound', 'black', 'Very big', true);

console.log(germanShepard.bark);

btnBark.addEventListener('click',()=> germanShepard.bark());
btnWalk.addEventListener('click', ()=>pitBull.Walk());
btnRun.addEventListener('click', ()=>greyhound.run());
btnTail.addEventListener('click',()=> germanShepard.wiggleTail());
btnGetAngry.addEventListener('click',()=>greyhound.getAngry());



 