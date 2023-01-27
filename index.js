const myModal = document.getElementById('myModal_1')
const myInput = document.getElementById('corporate')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})