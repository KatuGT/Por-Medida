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

const inputs = document.querySelectorAll('.ingreso input')

//console.log(inputs)

for(let i = 0; i < inputs.length; i++){

inputs[i].addEventListener('mouseover', function(){
      this.style.borderBottom = '1px solid green'
  })
}

