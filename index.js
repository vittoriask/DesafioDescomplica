function getValue(){
    var value = document.getElementById("name").value;
    console.log(value);
    document.getElementById("result").innerHTML = "Bem vindo(a), " + value + "!";
}

function removeValue(){
    document.getElementById("name").value = "";
    document.getElementById("result").innerHTML = "";
}