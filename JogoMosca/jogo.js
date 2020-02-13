var altura = 0
var largura = 0
var vidas = 1

function ajustaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth

    //console.log(altura,largura)
}

ajustaTamanho()


function posicaoRandom(){

    //removendo mosca anterior caso exista
    if(document.getElementById('mosca23')){
        document.getElementById('mosca23').remove() 

        if(vidas>3){
            window.location.href = 'fimjogo.html'
        }else{
           document.getElementById('v' + vidas).src = 'img/coracao_vazio.png'
            vidas++ 
        }
        
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //criar elemento html

    var mosca = document.createElement('img')

    mosca.src = 'img/mosca.png' //< - criando elemento
    mosca.className = tamanhoAleatorio() + ' ' + posicaoAB()//< - recuperando o css
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca23'
    mosca.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosca)
    //console.log(tamanhoAleatorio())
    //console.log(posicaoAB())
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:     
            return 'mosca3'   
    }
}

function posicaoAB(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'  
    }
}