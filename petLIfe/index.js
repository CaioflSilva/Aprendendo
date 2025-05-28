var elementosDuvidas = document.querySelectorAll('.duvida')

elementosDuvidas.forEach(function (duvida){
    duvida.addEventListener('click' ,function(){
        duvida.classList.toggle('ativa')
    })
})

alert("Obaaa ! você acabou de ganhar 10% de desconto no banho e tosa, marque seu horario agora no WhatsApp")




 
