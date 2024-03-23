const pi = Math.PI;
let username;
let realname = "";

function alertButton() {
    alert("Less clicking, more listening >:(");
}

document.getElementById("button1").onclick = function(){

    //make something have to be there
    username = document.getElementById("myText").value;

    while(realname == null || realname.trim() == ""){
        realname = window.prompt("Are you sure? Something seems fishy about that name... Enter another!");
    }

    document.getElementById("p1").innerHTML = "Hello " + realname + "!";
    document.getElementById("p2").innerHTML = "Welcome to the glorious website...";
    document.getElementById("p3").innerHTML = "So much to do!";
}

document.getElementById("button2").onclick = function(){

    //make something have to be there
    age = document.getElementById("myText2").value;
    age = Number(age);
    age++;

    document.getElementById("p4").innerHTML = "Something tragic will happen when you are " + age + ", good luck!";
}

document.getElementById("button3").onclick = function(){
    if(document.getElementById("myCheckbox").checked){
        window.alert("You subscribed!");
    }
    else{
        window.alert("You didn't subscribe :(");
    }
}

document.getElementById("button4").onclick = function(){
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(visaBtn.checked){
        window.alert("Visa used");
    }
    else if(mastercardBtn.checked){
        window.alert("Mastercard used");
    }
    else if(paypalBtn.checked){
        window.alert("Paypal used");
    }
    else{
        window.alert("No money :(");
    }
}