"use strict"

let form = document.getElementById('form')
let campos = document.querySelectorAll('.inputs')
let small = document.querySelectorAll('.small')



form.addEventListener('submit', function (event) {
    event.preventDefault();
        
    campos.forEach(function(inputs) {
        if(inputs.value === '') {

            inputs.classList.add('erro')
            small.classList = 'small erro'
            // console.log(inputs);
           
        } else {
            inputs.classList.add('sucesso')
        }
})


});