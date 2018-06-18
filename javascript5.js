let Meninas = ["Ivete, Leila, Luiza, Ana, Lucia"];
let Meninos =  ["João, Osvaldo, Igor, James, Neymar"];

let numeroCasal = 1;
let i = 0;
let j = 0;


while(i <meninos.lenght){
     j = 0;
    while(j <meninas.lenght){
        console.log(`Casal ${numeroCasal}: ${Meninos[i]} e ${Meninas[j]}`);
        j++;
        numeroCasal++;
    }
        i++;
}




