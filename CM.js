var student = {
    name: "",
    type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
    document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event) {
    calculateNumeric0utput();
}

function calculateNumeric0utput() {
    student.name =document.getElementById('name').Value;

    var totalNameValue = 0;
    for (var i = 0; i < student.name.length; i++) {
        totalNameValue += student.name.charCodeAt(i);
    }

    var output = "Total numero del valor del nombre" + totalNameValue;
    document.getElementById('output').innerText = output;
