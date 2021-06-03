




function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar!</b>";
    console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar!");
}



/*function redirecionar(){
    window.open("https://www.youtube.com/watch?v=LUXLRra09zE")
   // window.location.href = "https://www.youtube.com/watch?v=LUXLRra09zE"
}
*/

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse!"
}


function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}



function load(){
    alert("Pagina carregada!!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    
     var validar;
    if(idade>=18){
        validar = true
     }else{
         validar = false
     }
     return validar;
}

var idade= prompt("Qual a sua idade?");
console.log(validaIdade(idade));

//alert(soma(5, 10));
*/







/*var d = new Date();
alert(d.getDay());
alert(d.getHours());
*/




/*
var count;
for (count = 0; count <= 5; count++){
    alert(count);
};
*/


/*

var count = 0;
while (count<= 5){
    console.log(count);
    alert(count);
    count++;
}
*/













/*
var idade = prompt("Qual sua idade");
//var idade = 18;
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/









/*
var fruta = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
console.log(fruta);
alert(fruta[1].nome);




var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.cor);
alert(fruta.cor);
//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join("  "));



//var nome = "Gustavo da Silva";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
*/