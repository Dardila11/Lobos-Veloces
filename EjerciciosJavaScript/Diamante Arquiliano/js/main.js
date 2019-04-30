function leftToRight(){
    let palomaImg = document.getElementById("paloma")
    let posicion = 200
    let id = setInterval(frame,10)
    let flag = false

    function frame(){
        if(posicion == 450){
            flag = true
        }
        else if(posicion == 200){
            flag = false
        }
        flag ? posicion -- : posicion ++
        
        palomaImg.style.left = posicion + "px"
        palomaImg.style.right = posicion + "px"

    }

}

function topToBotton(){
    let petroImg = document.getElementById("petro")
    let posicion = 200
    let id = setInterval(frame,10)
    let flag = false

    function frame(){
        if(posicion == 450){
            flag = true
        }
        else if(posicion == 200){
            flag = false
        }
        flag ? posicion -- : posicion ++
        
        palomaImg.style.top = posicion + "px"
        palomaImg.style.bottom = posicion + "px"

    }
}

function btnAnimarImagenes(){
    leftToRight()
}
