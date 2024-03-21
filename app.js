const pi = 3.14159265;
let username;

function alertButton() {
    alert("Less clicking, more listening >:(");
}

document.getElementById("button1").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);

    let realname = window.prompt("Are you sure? Something seems fishy about that name... Enter another!");

    document.getElementById("p1").innerHTML = "Hello " + realname + "!";
    document.getElementById("p2").innerHTML = "Welcome to the glorious website...";
    document.getElementById("p3").innerHTML = "So much to do!";
}

document.getElementById("button2").onclick = function(){

    age = document.getElementById("myText2").value;
    age = Number(age);
    age++;

    document.getElementById("p4").innerHTML = "Something tragic will happen when you are " + age + ", good luck!";
}