console.log('es6.js');
//const
//const are variable that cannot be reassigned
const a = 8;
console.log('a',a);
// a=12;
console.log('a2',const outputDiv = $('#output');

//let
//is reassignable
let b=8;
console.log('b',b);
b=12;
console.log('b2',b);

function varTest(){
	var x=1;
	if(true){
		var x=2;
		console.log(x);
	}
	console.log(x);
}

function letTest(){
	let y = 1;
	if(true) {
		let y = 12;
		console.log('inside if', y);
	}
	console.log('outside if', y);
}

//arrow functions
var sum = function(){
	let a =1, b=2;
	return a+b;
}
console.log("hardcoded sum in ES5", sum());
var sum = () => {

}

var sum2 = () {
	let a=1, b=2;
	return a+b;
}

console.log("hardcoded sum in ES6", sum2());


var reflect = function(value){
	return value;
}
console.log("reflect in ES5", reflect("Es5 is so yesterdy"));


var reflect2 = (value) => {
	return value;
}

console.log("reflect in ES6", reflect2('Es6 is the new hotness'));

var realSum = function(num1, num2){
	return num1+num2;
}
console.log("realsum ES5", realSum(2,3));

var realSum = (num1,num2) => {
	return num1+num2;
}

console.log("realsum ES6", realSum2(5,4));

//string templates
let m = "biteme";
console.log("m",m);
let r = `hello my name is ${m}`;
//property shorthand
// object literal property shorthand
let wow = "Hi there", es6="ES6", numNum = ()=>{console.log('howdy')};

let myOldObject = {
	wow:wow,
	es6:es6,
	numNum:numNum
};
console.log('myOldObject',myOldObject);

let myNewObject = {
	wow, es6, numNum;
}

console.log('myNewObject',myNewObject);

//method properties
var e5Obj = {
	foo: function(){console.log('foo')},
	bar: function(){console.log('foo')}
}

console.log(e5Obj);

var Es6Obj = {
	foo() {console.log('foo')},
	bar() {console.log('bar')}
	}
}

console.log(e6Obj);
