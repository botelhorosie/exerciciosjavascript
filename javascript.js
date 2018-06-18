let idade = prompt ("Qual sua idade");


if(idade > 21 && idade <55){
	alert("Autorizado");
	let salario = prompt("Qual o seu salário?");
	let emprestimo = prompt("Digite aqui valor emprestimo: ");
    let parcelas = prompt("Digite aqui quantidade parcelas: ");
    let porcentagem = parseFloat('8%');
    let total= emprestimo/parcelas +(porcentagem);
   alert("Valor parcela mais juros 0.8% ao mês, será: "+total);

     if(salário => 1.000,00 && emprestimo <15* salario){
 		alert ("Autorizado");
}else{
	alert("Não autorizar");
}
}

 else{
 	alert("Não autorizado")
 }



