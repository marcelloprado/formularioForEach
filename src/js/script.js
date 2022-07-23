"use strict"

let form = document.getElementById('form')
let campos = document.querySelectorAll("input[name='teste']")
// let small = document.querySelectorAll('.small')


form.addEventListener('submit', function (event) {
    event.preventDefault();
        
    campos.forEach(function(inputs) {
        if(inputs.value === '') {

            inputs.classList.add('erro')
           
        } else {
            inputs.classList.remove('erro')
            inputs.classList.add('sucesso')
        }
})


});