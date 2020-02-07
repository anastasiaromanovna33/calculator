
function sum() {
    var num1, num2, res;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    res = num1 + num2;
    document.getElementById('result').innerHTML = res;
}

function min() {
    var num1, num2, res;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    res = num1 - num2;
    document.getElementById('result').innerHTML = res;
}

function umn() {
    var num1, num2, res;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    res = num1 * num2;
    document.getElementById('result').innerHTML = res;
}

function del() {
    var num1, num2, res;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    res = num1 / num2;
    document.getElementById('result').innerHTML = res;

}


    