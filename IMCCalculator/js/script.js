import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notNumber, IMC } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value;
    const height = inputHeight.value;   
 
    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }


    AlertError.close()

    const result = IMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result){
    const message = 'Seu IMC é de ' + result
    
    Modal.message.innerText = message
    Modal.open()
}

















// const Modal = {
//     closeButton: document.querySelector('.close'),
//     wrapper: document.querySelector('.modal-wrapper'),
//     message: document.querySelector('.modal .tittle span'),

//     open(){
//         Modal.wrapper.classList.add('open')
//     },
//     close(){
//         Modal.wrapper.classList.remove('open')
//     }
// }

// function verifyValues(){
//     if(inputWeight.value == '' || inputHeight.value == ''){
//         error.classList.add('open')
//     }else{
//         Modal.open()

//     }
// }


// Modal.closeButton.onclick = () => {
//     Modal.close()
// }