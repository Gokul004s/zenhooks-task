function sidebar(){
    const toggle=document.querySelector('.toggle')
    toggle.style.display='flex'

    const toggleBtn=document.querySelector('.toggle-btn')
    toggleBtn.style.display='none'

    const hidebar=document.querySelector('.hide-btn')
    hidebar.style.display='block'
}

function hidebar(){
    const toggle=document.querySelector('.toggle')
    toggle.style.display='none'

    const toggleBtn=document.querySelector('.toggle-btn')
    toggleBtn.style.display='block'

     const hidebar=document.querySelector('.hide-btn')
    hidebar.style.display='none'
}