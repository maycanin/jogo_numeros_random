const modal = document.getElementById('myModal')

const span = document.getElementsByClassName('close')[0]

span.onclick = function () {
  modal.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

function abrir() {
  modal.style.display = 'block'
}
