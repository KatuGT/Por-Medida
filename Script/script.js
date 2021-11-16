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



// const paraResaltar = [document.querySelectorAll('g .grupo'), document.querySelectorAll('thead th')]

// paraResaltar.forEach(item => {
//     item.addEventListener('click', event =>{
//         event.style.border = '3px solid red'
//     })
// })



// const paraResaltarTabla = document.querySelector('th');
// const paraResaltarMedida = document.querySelector('.grupo');

// const paraResaltarArray = [paraResaltarTabla, paraResaltarMedida]

// paraResaltarArray.forEach((element) => {
//     element.addEventListener('click',(e) =>{
//         console.log('click!')
//     })
// });

const paraResaltarMedida = document.querySelectorAll('g');
const paraResaltarTabla = document.querySelectorAll('.para-resaltar')

for(let i = 0; i < paraResaltarTabla.length; i++){
    paraResaltarTabla[i].addEventListener('mouseover', function(){
        this.classList.add('resaltar')

        paraResaltarMedida[i].classList.add('resaltar')
    })      
}


for(let i = 0; i < paraResaltarTabla.length; i++){
    paraResaltarTabla[i].addEventListener('mouseleave', function(){
        this.classList.remove('resaltar')
        paraResaltarMedida[i].classList.remove('resaltar')
    })      
}



