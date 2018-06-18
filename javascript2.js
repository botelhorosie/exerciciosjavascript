
let a = prompt("Digite aqui valor emprestimo: ");
let b = prompt("Digite aqui quantidade parcelas: ");
let porcentagem = parseFloat('0.8%');
let total= a/b +(porcentagem)/b;
alert("Valor total mais juros 0.8% de juros ao mês, será: "+total);

// function divisao(){
//         var n1 = prompt("Qual o valor do emprestimo","");
//         var n2 = prompt("Quantas parcelas","");
//         n1 = parseFloat(n1);
//         n2 = parseFloat(n2);
//         var calculo = n1/n2;
//     document.write("A divis�o de "+n1+" / "+n2+" "+calculo); 
//     }