

function fnCalcularMedia(){
    let vendedor = "", janeiro = 0, fevereiro = 0, marco = 0, media = 0
    vendedor = document.getElementById("vendedor").value
    alert("Seja bem vindo(a) " + vendedor)
    janeiro = document.getElementById("janeiro").value
    fevereiro = document.getElementById("fevereiro").value
    marco = document.getElementById("marco").value
    
    media = (parseFloat(janeiro) + parseFloat(fevereiro) + parseFloat(marco)) / 3

    document.getElementById("media").innerText = media.toFixed(2)
}
       