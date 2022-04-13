function visita(){
    var visitante = document.getElementById('visitante').value;
    document.getElementById("nome").innerHTML = (visitante);
}

function acao(calc){
    var y = parseInt(document.getElementById("shiro").innerHTML);
    var x = parseInt(document.getElementById("cthulhu").innerHTML);
    switch (calc){
        case '+':            
           document.getElementById("shiro").innerHTML = + (y+1);
            break;       
        case '-':  
			if(y > 0){
            document.getElementById("shiro").innerHTML = + (y-1);}
            break;
        case '++':    
            document.getElementById("cthulhu").innerHTML = + (x+1);   
        break;           
        case '--':    
			if(x > 0){
            document.getElementById("cthulhu").innerHTML = + (x-1);   }  
        break;
        default:
            break;   
	}}

function preco(calc){
    var y = parseInt(document.getElementById("shiro").innerHTML);
    var x = parseFloat(document.getElementById("preco1").innerHTML);

    var yy = parseInt(document.getElementById("cthulhu").innerHTML);
    var xx = parseFloat(document.getElementById("preco2").innerHTML);
    switch(calc){
        case '+':
            
          document.getElementById("preco1").innerHTML = (349.99*y);
            break;      
        case '-':
			if(y > 0){
            document.getElementById("preco1").innerHTML = (x-349.99);}
            break;
        case '++':
          document.getElementById("preco2").innerHTML = (299.99*yy);
            break;      
        case '--':   
			if(yy > 0){
            document.getElementById("preco2").innerHTML = (xx-299.99)}
            break;
        default:
            break;}}

function finalizarCompra(){   
    if (parseFloat(document.getElementById("preco1").value) != 0){       
        document.getElementById("preco1").innerHTML = "0";   
    }if (parseFloat(document.getElementById("preco2").value) != 0){       
        document.getElementById("preco2").innerHTML = "0";}
    if (parseFloat(document.getElementById("shiro").value) != 0){      
        document.getElementById("shiro").innerHTML = "0";   
    }if (parseFloat(document.getElementById("cthulhu").value) != 0){
        document.getElementById("cthulhu").innerHTML = "0";}
    document.getElementById('visitante').value;
    document.getElementById("nome").innerHTML = ("visitante");
    alert('obrigado pela preferência');}

function remover1() {
	alert("tem certeza")
var pai=document.getElementById("pai1");
var filho=document.getElementById("produto1");
pai.removeChild(filho);
	adicionar1()
}
function remover2() {
alert("tem certeza")
var pai=document.getElementById("pai2");
var filho=document.getElementById("produto2");
pai.removeChild(filho);
	adicionar2()
}
function adicionar1()
{
var texto = "produto removido";
var para=document.createElement("p");
var nodo=document.createTextNode(texto);
para.appendChild(nodo);
var elemento=document.getElementById("pai1");
elemento.appendChild(para);
}
function adicionar2()
{
var texto = "produto removido";
var para=document.createElement("p");
var nodo=document.createTextNode(texto);
para.appendChild(nodo);
var elemento=document.getElementById("pai2");
elemento.appendChild(para);
}