function leftToRight(){
    var img = "petro"
    let palomaImg = document.getElementById(img)
    let posicion =  200
    console.log("pasa por aqui")
    let id = setInterval(frame,5)
    let flag = false
    var contador = 0
    function frame(){
        if(posicion == 450){
            flag = true
        }
        else if(posicion == 200){
            flag = false
        }
        flag ? posicion -- : posicion ++
        contador ++
        console.log(contador);
        
        palomaImg.style.top = posicion + "px"
        palomaImg.style.bottom = posicion + "px"
    }
}

function topToBotton(){
    let petroImg = document.getElementById("uribe")
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
