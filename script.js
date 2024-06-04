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