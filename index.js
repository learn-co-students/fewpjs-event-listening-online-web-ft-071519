
const input = document.querySelector('input')


function addingEventListener() {
  input.addEventListener('click', function(event) {
    alert("I was clicked!")
  })
}


const main = document.querySelector('main')

main.addEventListener('click', function(event){
  alert("http://youtube.com")
})
