function fnVerificarPeriodo() {
    let periodoSelecionado = document.getElementById("periodo").value

    // document.getElementById("resposta").innerText = periodoSelecionado

    if (periodoSelecionado == "d") {
        document.getElementById("resposta").innerText = "Dia 🌞"
        document.body.style.backgroundColor = "#457704"
        document.body.style.color = "#ffffff"
        document.getElementById("foto").src = "imagens/bomdia.jpg"

    } else if (periodoSelecionado == "t") {
        document.getElementById("resposta").innerText = "Tarde 🌤️"
        document.body.style.backgroundColor = "#3a82d4"
        document.body.style.color = "#ffffff"
        document.getElementById("foto").src = "imagens/tarde.jpg"

    } else if (periodoSelecionado == "n") {
        document.getElementById("resposta").innerText = "Noite 🌚"
        document.body.style.backgroundColor = "#2d1d47"
        document.body.style.color = "#ffffff"
        document.getElementById("foto").src = "imagens/noite.jpg"

    } else {
        document.getElementById("resposta").innerText = ""
        document.body.style.backgroundColor = "#320679"
        document.body.style.color = "#ffffff"
    }

}
