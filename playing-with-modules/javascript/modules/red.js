const red = {
    buttonElement: document.querySelector('#red'),
    changeColor: function() {
        red.buttonElement.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelector('#color').style.backgroundColor = 'red';
    })
}
}

export {red};