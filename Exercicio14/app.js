const times = [
  "Flamengo",
  "Palmeiras",
  "São Paulo",
  "Santos",
  "Corinthians",
  "Grêmio",
  "Internacional",
  "Atlético-MG",
  "Cruzeiro",
  "Botafogo",
  "Fluminense",
  "Athletico-PR",
  "Ceará",
  "Bahia",
  "Fortaleza",
  "Coritiba",
  "Atlético-GO",
  "América-MG",
  "Juventude",
  "Vasco da Gama"
];

const cidadesTimes = [
  "Rio de Janeiro - Flamengo",
  "São Paulo - Palmeiras",
  "São Paulo - São Paulo",
  "Santos - Santos",
  "São Paulo - Corinthians",
  "Porto Alegre - Grêmio",
  "Porto Alegre - Internacional",
  "Belo Horizonte - Atlético-MG",
  "Belo Horizonte - Cruzeiro",
  "Rio de Janeiro - Botafogo",
  "Rio de Janeiro - Fluminense",
  "Curitiba - Athletico-PR",
  "Fortaleza - Ceará",
  "Salvador - Bahia",
  "Fortaleza - Fortaleza",
  "Curitiba - Coritiba",
  "Goiânia - Atlético-GO",
  "Belo Horizonte - América-MG",
  "Caxias do Sul - Juventude",
  "Rio de Janeiro - Vasco da Gama"
];


function fnListaTimes(){
    document.getElementById("lista_times").innerHTML = `
    <div class="col-6 border text-center">
        ${times[0]} - ${cidadesTimes[0]}
    </div>
    `
}

fnListaTimes()