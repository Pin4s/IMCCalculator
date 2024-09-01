export const Modal = {
    closeButton: document.querySelector('.close'),
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .tittle span'),
    open(){
        Modal.wrapper.classList.add('open')
    },
    close(){
        Modal.wrapper.classList.remove('open')
    }
}

Modal.closeButton.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(e) {
    if (e.key === 'Escape') {
        Modal.close()
    }
}
