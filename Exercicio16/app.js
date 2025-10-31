document.getElementById("btnCalcular").addEventListener("click", function (event) {
    event.preventDefault(); 

    
    const valorConta = parseFloat(document.getElementById("valorConta").value);
    const valorPorcentagem = parseFloat(document.getElementById("valorPorcentagem").value);
    const funcao = document.getElementById("funcao").value;
    const resultado = document.getElementById("resultado");

    
    if (isNaN(valorConta) || isNaN(valorPorcentagem)) {
        resultado.textContent = "Preencha todos os campos!";
        resultado.style.color = "red";
        return;
    }

    let valorFinal;

    
    if (funcao === "desconto") {
        valorFinal = valorConta - (valorConta * (valorPorcentagem / 100));
    } else {
        valorFinal = valorConta + (valorConta * (valorPorcentagem / 100));
    }

   
    resultado.textContent = `R$ ${valorFinal.toFixed(2).replace(".", ",")}`;
    resultado.style.color = "green";
});
