const balão = document.querySelector('.share')
const botao = document.querySelectorAll('.button')
const perfil = document.querySelector('.profile')

botao.forEach((event)=>{
let azulEscuro = '#48556a;'
let brancoAmarelado = '#ecf2f8'
let visible = false


    event.addEventListener('click',()=>{

        function mudarCor(cor,fundo){
            event.style.backgroundColor = fundo
            event.style.color = cor
        }

        function setarVisivel(elemento,display){
            elemento.style.display = display
        }

      
        if(window.innerWidth < 1000){

            if(visible){
                perfil.style.display = 'flex'
                balão.style.display = 'none'
               
                visible = false
            }else{
                perfil.style.display = 'none'
                balão.style.display = 'flex'
                visible = true
            }
        }else{

            if(visible){         
                visible = false
                balão.style.display = 'none'
                mudarCor('#48556a','#ecf2f8')
             
           
            }else{
                visible = true
                setarVisivel(balão,'flex')
                mudarCor('#ecf2f8','#48556a')
       
           
            }

        }
    
    })
})