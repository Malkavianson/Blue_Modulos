const prompt = require('prompt-sync')()

let rodadas = prompt(`Entre as rodadas `)
const esc = ['pedra', 'papel', 'tesoura'];
let player1Placar = 0
let maquinaPlacar = 0
let empate = 0


for(r=0;r<rodadas;r++){
let player1 = prompt(`pedra papel ou tesoura: `);
let escolhaDaMaquina = (Math.floor(Math.random() * 3))

for(i=0;i<esc.length;i++){
    if(player1===esc[i]){
        if((i>escolhaDaMaquina)&&((i=2)&&(escolhaDaMaquina===0)===false)||((i===0)&&(escolhaDaMaquina===2))){
            console.log(`Player 1 venceu a rodada`)
            player1Placar++
        }else if((i<escolhaDaMaquina)&&((i=0)&&(escolhaDaMaquina===2)===false)||((i===2)&&(escolhaDaMaquina===0))){
            console.log(`Player 2 venceu a rodada`)
            maquinaplacar++
        }else{
            console.log(`Deu empate`)
            empate++
        }
    }
}

console.clear()
console.log('Você escolheu:',player1)
console.log('escolha da máqina',esc[escolhaDaMaquina])
console.log('placar do player 1',player1Placar)
console.log('placar da máquina', maquinaPlacar)
console.log('empates ', empate)
prompt(``)
console.clear()
}

console.log('fim de jogo')