var city=prompt("write city name")
alert("welcome to the city of lights")




var gender=prompt("write your gender")
alert("good morning sir")


var gender=prompt("write your gender")
alert("good morning maam")


var car=prompt("enter the traffic light color")
alert("must stop")

var car=prompt("enter the traffic light color")
alert("ready to move")

var car=prompt("enter the traffic light color")
alert("move now")


var can=prompt("enter the fuel which is remaining in your car")
alert("Please refill the fuel in your car")


 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}



 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}



 if("car" < "cat"){
alert("car is smaller than cat");
}

var fig=newNum

document.write("first alert is true <br>")


document.write("second alert is true  <br>")

document.write("third alert is true <br> ")

document.write("fourth alert is true <br> ")

document.write("fifth alert is true ")




let subject1_marks = parseInt(prompt("Enter marks obtained in subject 1: "));
let subject2_marks = parseInt(prompt("Enter marks obtained in subject 2: "));
let subject3_marks = parseInt(prompt("Enter marks obtained in subject 3: "));
let total_marks = parseInt(prompt("Enter total marks: "));

// Calculate percentage
let obtained_marks = subject1_marks + subject2_marks + subject3_marks;
let percentage = obtained_marks / total_marks * 100;

// Determine grade based on percentage
let grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

// Print result with remarks
document.write("<h2>Marks Sheet</h2>");
document.write("<p>Total marks: " + total_marks + "</p>");
document.write("<p>Marks obtained: " + obtained_marks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: " + remarks + "</p>");


var num=10
var cat=prompt("enter the secret number")
alert("bingo! correct answer")

var cat=prompt("enter the secret number")
alert("close enough to the correct answer")

var nub=prompt("write the number")
alert("good! the no is  divisible by 3")



var num=prompt("give any number")
 if(num%2==0)
 document.write(num + " is an Even Number");
  else
    document.write(num + " is an Odd Number");

var temp=prompt("write the temperature")
alert("it is too  hot outside")

var temp=prompt("write the temperature")
alert("the weather today is normal")

var temp=prompt("write the temperature")
alert("today's weather is cool")

var temp=prompt("write the temperature")
alert("OMG! today's weather is so cool")




// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
document.write(`${number1} ${operator} ${number2} = ${result}`);







//last chp
var arr = new Array(3);
for (var i = 0; i < arr.length; i++) {
  arr[i] = new Array(3);
}
document.write(arr);




var mat=[0,1,2,3,1,0,1,2,2,1,0,1]
document.write("0 1 2 3<br>")
document.write("1 0 1 2<br>")
document.write("2 1 0 1<br>")



  var cage=[1,2,3,4,5,6,7,8,9,10]
  document.write("1<br>")
  document.write("2<br>")
  document.write("3<br>")
  document.write("4<br>")
  document.write("5<br>")
  document.write("6<br>")
  document.write("7<br>")
  document.write("8<br>")
  document.write("9<br>")
  document.write("10<br>")



var person= prompt("enter table number")
var per=prompt("enter length of table")

  for(var i=1 ; i <=10; i++){
    document.write("2" + "x" + i + "=" + 2*i +"<br>" )
 }




var fruits = ["apple<br>", "banana<br>", "mango<br>", "orange<br>", "strawberry<br>"]
for(var i=5; i<fruits.length; i++){
    text+=fruits[i] +"<br>";
}
document.write(fruits)

document.write("elemente at index 0 is apple<br>")
document.write("elemente at index 1 is banana<br>")
document.write("elemente at index 2 is mango<br>")
document.write("elemente at index 3 is orange<br>")
document.write("elemente at index 4 is strawberry<br> <br><br><br>")




document.write("Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15<br>")
document.write("Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1<br>")
document.write("Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20<br>")
document.write(" Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19<br>")
document.write(" Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k")




var fary= ["cake", "apple pie", "cookie", "chips", "patties"]
var geo=prompt("enter your favourite sweet")
document.write("cookie is available at index 2 in our bakery")


var far= ["cake", "apple pie", "cookie", "chips", "patties"]
var go=prompt("enter your favourite sweet")
document.write("sorry we donot have pastry")







var array = [24, 53, 78, 91, 12];
var largest= 91;

for (i=0; i<=largest;i++){
    if (array>largest) {
        var largest=array[i];
    }
}

document.write(largest);
document.write("<br>")
document.write("91 is largest")
document.write("<br>")
document.write("<br>")



var array = [24, 53, 78, 91, 12];
var smallest= 12;

for (i=0; i<=largest;i++){
    if (array>smallest) {
        var largest=array[i];
    }
}

document.write("<br>")

document.write(smallest);
document.write("<br>")
document.write("<br>")
document.write("12 is smallest")


document.write("5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100")
































































