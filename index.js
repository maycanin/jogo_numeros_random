const grau = document.getElementById('grau')
const form = document.querySelector('form')
const jogo = document.getElementById('jogo')
const chances = document.getElementById('chances')
const maximo = document.getElementById('maximo')
const palpite = document.getElementById('palpite')
const textFinal = document.getElementById('textFinal')
const resposta = document.getElementById('resposta')
const final = document.getElementById('final')
const conferir = document.getElementById('conferir')

form.addEventListener('submit', (event) => {
  const data = new FormData(event.target)
  event.preventDefault()
  comecar(data.get('nivel'))
})

let segredo = null
function comecar(nivel) {
  grau.style.display = 'none'
  jogo.style.display = 'block'
  if (nivel == 'facil') {
    maximo.innerHTML = '25'
  } else if (nivel == 'medio') {
    maximo.innerHTML = '50'
  } else if (nivel == 'dificil') {
    maximo.innerHTML = '100'
  }
  segredo = Math.floor(Math.random() * parseInt(maximo.innerHTML))
  chances.innerHTML = 10
}
function conferir1() {
  if (palpite.value === '') {
    final.style.display = 'block'
    textFinal.innerHTML = 'Informe um número para o palpite'
    return 0
  }
  if (parseInt(chances.innerHTML) === 0) {
    return 0
  }
  chances.innerHTML = String(parseInt(chances.innerHTML) - 1)

  if (parseInt(chances.innerHTML) > 0) {
    if (palpite.value != segredo) {
      final.style.display = 'block'
      textFinal.innerHTML = 'Você errou! Tente novamente'
      if (palpite.value > segredo) {
        resposta.innerHTML = 'O número em que estou pensando é menor!'
      } else if (palpite.value < segredo) {
        resposta.innerHTML = 'O número em que estou pensando é maior!'
      }
    }
    if (palpite.value == segredo) {
      final.style.display = 'block'
      textFinal.innerHTML = '🎉 Parabéns você acertou o número segredo 🎉'
      resposta.innerHTML = ''
      palpite.disabled = true
      conferir.disabled = true
    }
  } else {
    if (palpite.value != segredo) {
      final.style.display = 'block'
      textFinal.innerHTML = 'Infelizmente acabaram as chances'
      resposta.innerHTML = 'o número segredo era ' + segredo
      palpite.disabled = true
      conferir.disabled = true
      return 0
    }
    if (palpite.value == segredo) {
      final.style.display = 'block'
      textFinal.innerHTML = '🎉 Parabéns você acertou o número segredo 🎉'
      resposta.innerHTML = ''
      palpite.disabled = true
      conferir.disabled = true
      return 0
    }
  }
}
function reiniciar() {
  segredo = Math.floor(Math.random() * parseInt(maximo.innerHTML))
  chances.innerHTML = 10
  palpite.value = ''
  palpite.disabled = false
  conferir.disabled = false
  final.style.display = 'none'
  resposta.innerHTML = ''
}
function inicio() {
  grau.style.display = 'flex'
  final.style.display = 'none'
  jogo.style.display = 'none'
  palpite.value = ''
  palpite.disabled = false
  conferir.disabled = false
  resposta.innerHTML = ''
}
