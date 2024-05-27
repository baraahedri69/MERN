//1//
var hello;
console.log(hello); // logs undefined
hello = 'world';

//2//
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle); // logs 'magnet'
}
var needle = 'haystack';
test();

//3//
function print(){
    brendan = 'only okay';
    console.log(brendan); // logs 'only okay' if called
}
var brendan;
brendan = 'super cool';
console.log(brendan); // logs 'super cool'

//4//
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food); // logs 'half-chicken'
    food = 'gone';
}
var food;
food = 'chicken';
console.log(food); // logs 'chicken'
eat();

//5//
var mean;
mean(); // TypeError: mean is not a function
mean = function() {
    var food;
    food = "chicken";
    console.log(food); // logs 'chicken'
    food = "fish";
    console.log(food); // logs 'fish'
}
console.log(food); // logs undefined

//6//
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre); // logs 'rock'
    genre = 'r&b';
    console.log(genre); // logs 'r&b'
}
var genre;
console.log(genre); // logs undefined
genre = "disco";
rewind();
console.log(genre); // logs 'disco'

//7//
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo); // logs 'seattle'
    dojo = 'burbank';
    console.log(dojo); // logs 'burbank'
}
dojo = "san jose";
console.log(dojo); // logs 'san jose'
learn();
console.log(dojo); // logs 'san jose'

//8//
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // TypeError: Assignment to constant variable
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); // logs { name: 'Chicago', students: 65, hiring: true }
console.log(makeDojo("Berkeley", 0)); // TypeError: Assignment to constant variable