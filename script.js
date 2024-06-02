var anchor = 0

function onClick(){
    if (anchor==0){
        document.getElementById('drop').style.display = 'block'
        anchor = 1
    }
    else {
        document.getElementById('drop').style.display = 'none'
        anchor = 0
    }
}

function scrollTo(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('btn_sobre').addEventListener('click', function() {
    scrollToElement(getElementById('1'));
});