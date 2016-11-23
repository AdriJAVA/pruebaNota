window.onload = function(){
    
    document.getElementById("nota").onclick = modificarNota;
    document.getElementById("nota").onmouseleave = abandonar;

}


function modificarNota(){
    var textoMod = document.getElementById("textoMod");
    var parrafo = document.getElementById("parrafo");
    
    textoMod.style.visibility = "visible";
    parrafo.style.visibility = "hidden";
    
    
}

function abandonar(){
    parrafo.innerHTML = textoMod.value;
    textoMod.style.visibility = "hidden";
    parrafo.style.visibility = "visible";
}