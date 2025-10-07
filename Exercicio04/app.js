function fnValidarIdadeCNH(){

    // esse == igual que
    // esse > maior que 
    // esse < menor que 
    // esse >= maior ou igual que
    // esse <= menor ou igual que

    event.preventDefault()

    let nomeUsuario = document.getElementById('txtNome').value
    let idadeUsuario = document.getElementById('txtIdade').value

    if (idadeUsuario >= 18){
        texto = "Parabéns " + nomeUsuario + ", você pode dirigir"
        document.getElementById('resultado').innerHTML = texto

    } else {
        texto = "Desculpe " + nomeUsuario + ", você NÃO pode dirigir"
        document.getElementById('resultado').innerHTML = texto
    }
}