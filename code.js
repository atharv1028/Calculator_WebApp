img = "";
number1 = "";
number2 = "";
answer = "";
equation = "";

function addition()
{
    var num1 = Number(document.getElementById("number1Input").value);
    var num2 = Number(document.getElementById("number2Input").value);
    answer = num1 + num2;
    document.getElementById("answer1").innerHTML = "Answer :" + answer;
}

function subtraction()
{
    document.getElementById("number1Input").value = number1;
    document.getElementById("number2Input").value = number2;
    answer = number1 - number2;
    document.getElementById("answer1").innerHTML = "Answer :" + answer;
}

function multiplication()
{
    document.getElementById("number1Input").value = number1;
    document.getElementById("number2Input").value = number2;
    answer = number1 * number2;
    document.getElementById("answer1").innerHTML = "Answer :"  + answer;
}

function division()
{
    number1 = document.getElementById("number1Input").value;
    number2 = document.getElementById("number2Input").value;
    answer = number1 / number2;
    document.getElementById("answer1").innerHTML = "Answer : " + answer;
}