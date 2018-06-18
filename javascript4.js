let tamanho = Number(prompt("Que tamanho você quer a escadinha?: "));
let contador = 0;
let escadinha= ""; 
let degrau= prompt("Digite o modelo de degrau");
  

while(contador < tamanho){
    escadinha = escadinha + degrau;
    console.log(escadinha);
    contador++;
}

