const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const txt = document.querySelector('.texts')

btn.onclick = function(){
    this.classList.toggle('active')
    container.classList.toggle('active')
    txt.classList.toggle('active') 
    if(txt.classList.contains('active')){
        txt.textContent = 'Dark'
    }else{
        txt.textContent = 'Light'
    } 
}