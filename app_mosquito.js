var largura = 0 
var altura = 0
let vidas = 1
var tempo = 10
function Tamanho(){
   largura = window.innerWidth
   altura = window.innerHeight
console.log(largura,altura)
}
Tamanho()

var cronometro = setInterval(function(){
  tempo -= 1
  if(tempo < 0){
    clearInterval(cronometro)
  window.location.href = 'vitoria.html'
  }else{
    document.getElementById('cronometro').innerHTML = tempo
  }
},1000)


function posicaoRandomica(){
if(document.getElementById('mosquito')){
  document.getElementById('mosquito').remove()
  console.log(vidas)

if( vidas > 3){
 window.location.href ='fim_de_jogo.html'
  
}else{
  document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
}
vidas++
}



  var posicaoX = Math.floor(Math.random() * largura) - 30
var posicaoY = Math.floor(Math.random() * altura) - 20
console.log(posicaoX, posicaoY)
let mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoMosquito() + ' ' + lado()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function remover(){
  if(document.getElementById('mosquito')){
    this.remove()
  }
}
document.body.appendChild(mosquito)

lado()
}
posicaoRandomica()


function tamanhoMosquito(){
  var tamanho = Math.floor(Math.random() * 3)
  switch(tamanho){
    case 0:
      return 'mosca1'
      case 1:
        return 'mosca2'
        case 2:
          return 'mosca3'
  }
  console.log(tamanho)
}
tamanhoMosquito()
function lado(){
  var mudar = Math.floor(Math.random() * 2)
  switch(mudar){
    case 0:
      return 'lado1'
      case 1:
        return 'lado2'
}
}



 






