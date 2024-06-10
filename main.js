//let buttonColor = document.getElementById("color").value;
// let const var

function soma(a, b){
    return a + b;
}

let booleanoAnd = true && false; //false
let booleanoOr = true || false; //true


if(booleanoAnd){
    return console.log("oi")
}else if(booleanoOr){
return console.log("olá")
}else{
    return console.log("tchau")
}

let nome = "rafaela"

switch(nome){
    case "rafaela":
        console.log("ola professora!");
        break;
    case "lucas":
        console.log("estudar é bom")
        break;
    case "viny":
        console.log("olha o celular")
        break;
    case "ya":
        console.log("apaga depois")
        break;
    case "gabriel" || "ana":
        console.log("parabens!")
    default:
        "olá aluno amado!"
}