function fnMostrarNumero(){
    let numero = document.getElementById("numero").value
    document.getElementById("respost").innerText = "o numero informado foi: " +  numero
    document.getElementById("numero").value = ""
}