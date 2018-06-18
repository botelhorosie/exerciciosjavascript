// let a = prompt("Advinhe o número ente 0 a 50: ");
// let numeroAleatorio = 0 + (Math.random() * 50);
// let numeroescolhido = 10;

// 	if(a > numeroAleatorio){
// 		alert("Muito Alto");


    
//     if( numeroAleatorio = numeroescolhido){
// 	alert("Acertou");
	

// 	}
	
// 	}else{
// 		alert("ainda não é este número");
// 	}

	
	function sorteio(minimo=0, maximo=10){
		let aleatorio = math.floor(math.random()* (maximo - minimo +1))+ minimo;
		return aleatorio;

	}

	let lista = ["MAria, joana, Elisa"];

	let i = 0;
	while(i< 10){
		console.log(lista[sorteio(0,lista.lengh-1)]);
		i++;
	}
	
	// let numero1 = math.floor(math.random()*11);
	// let numero2 = math.floor(math.random()*51);
	// let numero3 = math.floor(math.random()*22) +15;

	// console.log(numero1, numero2, numero3);








	