let input = document.getElementById('input')
let btn = document.getElementById('button')
let ortala = document.querySelector('.ortala')
let h1 = document.querySelector('.h1')


ortala.style.display = 'flex'
ortala.style.justifyContent = 'center'
ortala.style.flexDirection = 'column'
ortala.style.width = '400px'
ortala.style.padding = '400px 250px'

input.style.padding = '20px'

btn.style.padding = '20px'

h1.style.textAlign = 'center'

function calis(){
    h1.innerHTML = input.value.length
}
if(btn.addEventListener('click', () =>{
    setTimeout(() =>{
            calis()
    },1000)
}));



