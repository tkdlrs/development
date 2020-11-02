const green = {
    buttonElement: document.querySelector('#green'),
    changeColor: function() {
        green.buttonElement.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelector('#color').style.backgroundColor = 'green';
        })
    }
}
export {green};