var pessoa = {};

var menu = {
    width: 100,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return menu.height/2;
    }

}


console.log('*** Exercício ***');

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo

var eu = {
    nome: 'Marco Antônio',
    sobrenome: 'Plá',
    idade: 36,
    altura: 1.76,
    peso: 90,
    mostraNomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }
}



// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000;
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  var cachorro = {
    raca : 'labrador',
    idade: 10,
    cor: 'preto',
    latir (alvo){
        if(alvo === 'homem')
            return 'Au, au, au!';
    }

  }