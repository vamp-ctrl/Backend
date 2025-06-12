//1
let apartamento = {
    quartos: 2,
    tipo: "apartamento",
    endereco: " Avenida Principal, 456 - centro",
    andar: 7
    };
    
    console.log(`Apartamento com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}º andar da ${apartamento.endereco}.\n`);
    
//2
let produtoEmbalado = {
    nome: "Laptop HP",
    categoria:"eletronicos",
    peso: 1.5,
    preco:3500.00
    }
    console.log(`O produto embalado ${produtoEmbalado.nome} da categoria ${produtoEmbalado.categoria} pesando ${produtoEmbalado.peso} kg, esta a venda por R$ ${produtoEmbalado.preco.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}`);
    
//3
class Imovel {
    constructor(quarto, tipos, enderecos) {
    this.quarto = quarto;
    this.tipos = tipos;
    this.enderecos = enderecos;
    }
    
    exibirInformacoes() {
    return `${this.tipos} com ${this.quarto} quartos, localizado em ${this.enderecos}`;
    }
}
    
    let casa = new Imovel(4, "Casa", "Rua da Amizade, 789 - Bairro Alegre");
    let apartamentos = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro");
    
    console.log(casa.exibirInformacoes());
    console.log(apartamentos.exibirInformacoes());
    
//4
class veiculo {
    constructor(marca, modelo, ano) {
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano
    }
    
    exibirDetalhes() {
    return `${this.marca} do modelo ${this.modelo} feito no ano de ${this.ano}`;
    }
    }
    
    const carro = new veiculo("Toyota", "Corolla", 2022);
    const motocicleta = new veiculo("Honda","CBR 600RR", 2021 );
    console.log("\nQuestão 4 - Veiculo\n",carro.exibirDetalhes());
    console.log(motocicleta.exibirDetalhes())