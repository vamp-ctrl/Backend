
//1

const pessoa = {
    nome: "Ana",
    idade: 25,
    sexo: 'M',
}

for (let dados in pessoa) {
    console.log(`${dados}: ${pessoa[dados]}`)
}

//2
let cores = ["Azul", "Branco", "verde", "Preto"]

for (let cor of cores) {
    console.log(`Cor: ${cor}`)
}