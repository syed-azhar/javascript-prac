// string method in javascript

const mystring= "Ahmed is a good boy";
console.log (mystring.length)
console.log (mystring.slice(0,9));
console.log (mystring.replace("Ahmed", "Rohan" ));

// Dates

let myDate = new Date();
console.log (myDate .getHours());
console.log (myDate .getFullYear());
console.log (myDate .getMinutes());
console.log (myDate .getDay());

//  If else Condition Again

var x = '100'

if (x = 100) {
    document.write("X is same")
} else {
    document.write("X is not same")
}

// 3rd Condition if else to making software

var per =  33;

if (per >= 80 && per <= 100){
    document.write("You Are First");
} else if (per >= 60 && per < 80){
    document.write("you are Second");
} else if (per >= 45 && per < 60){
    document.write("you are Third");
} else if (per >= 33 && per < 45){
    document.write("you are Fourth");
} else if (per >= 10 && per < 33){
    document.write("you are Fail");        
}else {
    document.write("Please Enter Valid Percent")
}   

