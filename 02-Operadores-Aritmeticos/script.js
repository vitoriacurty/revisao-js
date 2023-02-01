// 1. Através de prompts, peça para o usuário inserir dois números e imprima no console uma mensagem no seguinte formato, com os resultados das operações nos lugares de A, B, C, D, E:
    
//     ```jsx
//     Soma: A
//     Subtração: B
//     Multiplicação: C
//     Divisão: D
//     Resto da Divisão: E
//     ```
let primeiroNumero = prompt("Insira um número")
let segundoNumero = prompt("Insira outro número")
let A = parseInt(primeiroNumero) + parseInt(segundoNumero)
let B = primeiroNumero - segundoNumero
let C = primeiroNumero * segundoNumero
let D = primeiroNumero / segundoNumero
let E = primeiroNumero % segundoNumero
console.log(A)
console.log(B)
console.log(C)
console.log(D)
console.log(E)

// 2. Peça para o usuário inserir um número. Some 2 a este número, depois multiplique o resultado por 3 e divida por 2. Tente fazer isso criando apenas uma variável para o resultado, fazendo as operações de uma única vez

let num = prompt("Insira um número")
num = (((parseInt(num)) + 2) * 3) / 2
console.log(num)
