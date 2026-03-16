function clickMenu(){
    let menu = document.getElementById('menu')

    if(menu.style.display == 'none'){
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

function reajuste(){
    if(window.innerWidth > 360){
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}