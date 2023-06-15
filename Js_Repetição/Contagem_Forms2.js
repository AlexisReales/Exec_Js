let numInicial = 10
const numFinal = 20

if (numInicial > numFinal) {
    for (numInicial; numInicial >= numFinal; numInicial--) {
        console.log(numInicial)
    }
} else if (numInicial < numFinal) {
    for (numInicial; numInicial <= numFinal; numInicial++) {
        console.log(numInicial)
    }
} else {
    console.log('Os valores são iguais!')
}

//Contando de uma forma mais inteligente, podendo ser regressiva ou progressiva.