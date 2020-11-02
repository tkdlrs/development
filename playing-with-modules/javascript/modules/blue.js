const blue = {
    buttonElement: document.querySelector('#blue'),
    changeColor: function() {
        blue.buttonElement.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelector('#color').style.backgroundColor = 'blue';
        })
    }
};
export {blue};