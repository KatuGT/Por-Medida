
// MENU RESPONSIVE
const btnMenu = document.getElementById('btnMenu')
const menu = document.getElementById('menu')
const subMenuBtn = document.querySelectorAll('.submenu-btn')

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('mostrar')
})

for (i = 0; i < subMenuBtn.length; i++){
    subMenuBtn[i].addEventListener('click', function(){
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight
            if(subMenu.classList.contains('desplegar')){
                subMenu.classList.remove('desplegar')
                subMenu.removeAttribute('style')
            }else{
                subMenu.classList.add('desplegar');
                subMenu.style.height = height + 'px';
            }
        }
    })
}



// RESALTANDO MEDIDAS
const paraResaltarMedida = document.querySelectorAll('g.para-resaltar');
const paraResaltarTabla = document.querySelectorAll('th.para-resaltar')
const paraResaltarInput = document.querySelectorAll('.imagen-producto .ingreso')
console.log(paraResaltarTabla)
console.log(paraResaltarMedida)
console.log(paraResaltarInput)

for(let i = 0; i < paraResaltarTabla.length; i++){    
    paraResaltarTabla[i].addEventListener('mouseover', function(){
        this.classList.add('resaltar')
        paraResaltarMedida[i].classList.add('resaltar')
        paraResaltarInput[i].classList.add('resaltar')
    })    
    
    paraResaltarMedida[i].addEventListener('mouseover', function(){
        this.classList.add('resaltar')
        paraResaltarTabla[i].classList.add('resaltar')
        paraResaltarInput[i].classList.add('resaltar')
    }) 

    paraResaltarInput[i].addEventListener('mouseover', function(){
        this.classList.add('resaltar')
        paraResaltarTabla[i].classList.add('resaltar')
        paraResaltarMedida[i].classList.add('resaltar')
    }) 
}


for(let i = 0; i < paraResaltarTabla.length; i++){
    paraResaltarTabla[i].addEventListener('mouseleave', function(){
        this.classList.remove('resaltar')
        paraResaltarMedida[i].classList.remove('resaltar')
        paraResaltarInput[i].classList.remove('resaltar')
    })   
    
    paraResaltarMedida[i].addEventListener('mouseleave', function(){
        this.classList.remove('resaltar')
        paraResaltarTabla[i].classList.remove('resaltar')
        paraResaltarInput[i].classList.remove('resaltar')
    }) 

    paraResaltarInput[i].addEventListener('mouseleave', function(){
        this.classList.remove('resaltar')
        paraResaltarTabla[i].classList.remove('resaltar')
        paraResaltarMedida[i].classList.remove('resaltar')
    }) 
}



// DUPLICA VALOR DE LOS INPUTS EN TABLA Y IMAGEN


let valueTabla = document.querySelectorAll("th input"),
    valueImagen = document.querySelectorAll(".ingreso input")

window.onload = function() {     
    for (let i = 0; i < valueTabla.length; i++) {        

        valueTabla[i].addEventListener('input', function() {
            valueImagen[i].value = valueTabla[i].value;
        });
        
        valueImagen[i].addEventListener('input', function() {
            valueTabla[i].value = valueImagen[i].value;
        });        
    }
};