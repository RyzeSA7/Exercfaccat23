// Função para verificar o valor
function verificarValor() {
    // Lendo um valor
    const valor = parseFloat(prompt("Digite um valor:"))

    // Verificando se o valor é positivo, negativo ou zero
    if (valor > 0) {
        console.log("O valor é positivo.")
    } else if (valor < 0) {
        console.log("O valor é negativo.")
    } else {
        console.log("O valor é zero.")
    }
}

// Chamando a função
verificarValor()