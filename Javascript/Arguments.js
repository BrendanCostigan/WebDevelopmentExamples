// This examples is to show that passing arguments is not like C#
// A function always takes an array of arguments which can be accessed
// using the argumetns variable.

function sayHi() {
    alert("Hello " + arguments[0] + ", " + arguments[1]);
}

sayHi("Brendan", "Costigan");
