// show date
function showDate(){
    document.getElementById('forDate').innerHTML = Date();
}
// repaet text
function repeatText(){
    let text = "Hello World!";
    document.getElementById ('forRepeat').innerHTML = text.repeat(3);
}
// fade Out
function bgchng(){
    document.getElementById('IdToChangeBgColor').style. backgroundColor = 'red';
}
// add
function forAdding(){
    let firstNumber = parseInt(document.getElementById('Num1').value);
    let secondNumber = parseInt(document.getElementById('Num2').value);
    document.getElementById('resultshow1').innerHTML = firstNumber + secondNumber;
}
// substract
function forSubstracting(){
    let firstNumber = parseInt(document.getElementById('Num3').value);
    let secondNumber = parseInt(document.getElementById('Num4').value);
    document.getElementById('resultshow2').innerHTML = firstNumber - secondNumber;
}
// multiply
function forMultiply(){
    let firstNumber = parseInt(document.getElementById('Num5').value);
    let secondNumber = parseInt(document.getElementById('Num6').value);
    document.getElementById('resultshow3').innerHTML = firstNumber * secondNumber;
}
// division
function forDivision(){
    let firstNumber = parseInt(document.getElementById('Num7').value);
    let secondNumber = parseInt(document.getElementById('Num8').value);
    document.getElementById('resultshow4').innerHTML = firstNumber / secondNumber;
}
// remainder
function forRemainder(){
    let firstNumber = parseInt(document.getElementById('Num9').value);
    let secondNumber = parseInt(document.getElementById('Num10').value);
    document.getElementById('resultshow5').innerHTML = firstNumber % secondNumber;
}
// power
function forPower(){
    let firstNumber = parseInt(document.getElementById('Num11').value);
    let secondNumber = parseInt(document.getElementById('Num12').value);
    document.getElementById('resultshow6').innerHTML = firstNumber ** secondNumber;
}
// greeting (in the top)
function greetings(){
    let yourName = prompt ('Please enter your name', 'Sadik');
    if (yourName != null){
        alert("Hello! " + yourName + " Welcome");
    }
}
// output in console
function toConsole(){
    let p = 20;
    let q = 5;
    let c = p + q;
    console.log(c);
}