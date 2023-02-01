// 1. Para simular a inserção de um produto em um sistema, siga os passos abaixo:
//     1. Através de um prompt, peça para o usuário inserir o nome de um produto
//     2. Através de um segundo prompt, peça para o usuário inserir o preço desse produto
//     3. Por fim, o gerente ficou doido! Dê um desconto de 10% no valor do produto, guarde o novo preço na mesma variável e mostre no site o nome do produto com o novo valor no console

function desconto() {
let produto = prompt("Insira o nome do produto")
let preco = prompt("Insira o preço do produto")
preco -= preco*0.1
console.log(`O produto ${produto} está custando R$${preco}`)
}
desconto()
// 2. Siga os passos abaixo:
//     1. Crie duas variáveis, `a` e `b`
//     2. Inicialize a variavel a com o valor 10 e a variável b com o valor 20
//     3. Agora, troque os conteúdos de cada variável, fazendo com que o valor que está em `a` vá para `b` e vice-versa
//     4. Imprima no console o novo valor de ambas as variáveis
let a = 10
let b = 20
let c

c = a 
a = b 
b = c 
console.log(a)
console.log(b)