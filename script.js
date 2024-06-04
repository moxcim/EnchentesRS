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

window.addEventListener("load", init);

function scroll() {
    document.getElementById('anchor1').scrollIntoView ({
        behavior:"smooth"
    });
}

function init() {
    document.getElementById('1').addEventListener("click", scroll);
}
