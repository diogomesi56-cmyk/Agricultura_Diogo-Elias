// PRODUÇÃO MENSAL
function producao() {
    let dias = Number(document.getElementById("dias").value);
    let kg = Number(document.getElementById("producaoDia").value);
    let total = dias * kg;

    document.getElementById("resultado1").innerHTML = "Produção total: " + total + " kg";
}

// CUSTOS DE PLANTIO
function custos() {
    let sementes = Number(document.getElementById("sementes").value);
    let adubo = Number(document.getElementById("adubo").value);
    let maoObra = Number(document.getElementById("maoObra").value);
    let outros = Number(document.getElementById("outros").value);
    let total = sementes + adubo + maoObra + outros;

    document.getElementById("resultado2").innerHTML = "Custo total: R$ " + total.toFixed(2);
}

// LUCRO
function lucro() {
    let quantidade = Number(document.getElementById("quantidade").value);
    let preco = Number(document.getElementById("preco").value);
    let custo = Number(document.getElementById("custo").value);
    let receita = quantidade * preco;
    let resultado = receita - custo;

    document.getElementById("resultado3").innerHTML = "Lucro estimado: R$ " + resultado.toFixed(2);
}

// RANKING
function ranking() {
    let nome1 = document.getElementById("p1").placeholder;
    let nome2 = document.getElementById("p2").placeholder;
    let nome3 = document.getElementById("p3").placeholder;
    let nome4 = document.getElementById("p4").placeholder;
    
    let p1 = Number(document.getElementById("p1").value);
    let p2 = Number(document.getElementById("p2").value);
    let p3 = Number(document.getElementById("p3").value);
    let p4 = Number(document.getElementById("p4").value);
    let lista = [
    { nome: nome1, pontos: p1 },
    { nome: nome2, pontos: p2 },
    { nome: nome3, pontos: p3 },
    { nome: nome4, pontos: p4 }
    ];

    lista.sort(function(a, b) {
        return b.pontos - a.pontos;
    });

    document.getElementById("resultado4").innerHTML =
        "1º lugar: " + lista[0].nome + " - " + lista[0].pontos + " quilos" +
        "<br>2º lugar: " + lista[1].nome + " - " + lista[1].pontos + " quilos" +
        "<br>3º lugar: " + lista[2].nome + " - " + lista[2].pontos + " quilos" +
        "<br>4º lugar: " + lista[3].nome + " - " + lista[3].pontos + " quilos";
}

// MÉDIA
function media() {
    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);
    let m4 = Number(document.getElementById("m4").value);
    let m5 = Number(document.getElementById("m5").value);
    let resultado = (m1 + m2 + m3 + m4 + m5) / 5;

    document.getElementById("resultado5").innerHTML = "Média: " + resultado.toFixed(2) + " kg";
}