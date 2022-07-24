"use strict"

const form = document.getElementById('form')
const campos = document.querySelectorAll('.inputs')

form.addEventListener('submit', function (event) {
    event.preventDefault();
        
    campos.forEach(function(inputs, small) {
        if(inputs.value === '') {

            inputs.classList.add('erro')
            inputs.nextElementSibling.classList.add("erro")
           
        } else {
            inputs.classList.remove('erro')
            inputs.nextElementSibling.classList.remove("erro")
            inputs.classList.add('sucesso')
        }
})
})