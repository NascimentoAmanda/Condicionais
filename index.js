Exercício1








//Desafio2

//Nome completo;
//Tipo de jogo: IN indica internacional; e DO indica doméstico;
//Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
//Categoria: pode ser as opções 1, 2, 3 ou 4;
//Quantidade de ingresso

const nomeCompleto = prompt("Digite seu nome completo")
const tipoDeJogo = prompt("Qual tipo de jogo? 'IN' para internacional e 'DO' para doméstico")
const etapaDoJogo = promp ("Qual etapa do jogo? Digite 'SF' para semi-final; 'DT' para decisão de terceiro lugar; e 'FI'para final")
const categoria = Number(prompt("Indique qual categoria com números de 1 à 4"))
const quantidadeDeIngresso = Number(prompt("Qual a qualtidade de ingresso?"))

let valorDoIngresso
let quantidadeDeIngresso
const imprimeTiket=()=>{

    if(tipoDeJogo ==="DO"){
  if(etapaDoJogo==="SF"){
      if(categoria===1){
          valorDoIngresso=1320
      }else if(categoria===2){
          valorDoIngresso=880
     }else if(categoria===3){
         valorDoIngresso=550
     }else if(categoria===4){
         valorDoIngresso=220
     }else{
         console.log("escolha uma categoria de 1,2,3,4")

     }else{
         console.log("Etapa do jogo inválida, digite 'SE', 'DT' ou 'FI'")
     }
  }else if(tipoDeJogo==="IN"){

    
  }
    }
}