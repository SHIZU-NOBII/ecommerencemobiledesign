// MODAL VARIABLES
const modal = document.getElementById('modal'),
      modalOverlay = document.getElementById('modalOverlay'),
      modalCloseButton = document.getElementById('modalCloseBtn')

const modalClose = ()=>{
    modal.classList.add('closed')
}      

// MODAL CLOSE ON CLICK 
modalOverlay.addEventListener('click', modalClose)
modalCloseButton.addEventListener('click', modalClose)

// NOTIFICATION TOAST VERIABLES 
const toast = document.getElementById('notificationToast'),
      toastCloseButton = document.getElementById('toastCloseBtn')

toastCloseButton.addEventListener('click', ()=>{
    toast.classList.add('closed')
})      


// // MOBILE NAVIGATION
const MobileNavigationMenu = document.getElementById('mobileMenu'),
       mobileNavigationOpenButton = document.getElementById('mobileMenuOpenBtn'),
       mobileNavigationCloseButton = document.getElementById('mobileMenuCloseBtn'),
       overlay = document.getElementById('overlay')

const showMobileMenu = ()=>{
    MobileNavigationMenu.classList.add('active')
    overlay.classList.add('active') 
}

const CloseMobileMenu = ()=>{
    MobileNavigationMenu.classList.remove('active')
    overlay.classList.remove('active') 
}       

mobileNavigationOpenButton.addEventListener('click', showMobileMenu)
mobileNavigationCloseButton.addEventListener('click', CloseMobileMenu)
overlay.addEventListener('click', CloseMobileMenu)


//ACCORDIAN BUTTON AND ACCORDIAN SUBMENU
const accordianButton = document.querySelectorAll('#accordian-btn'),
      accordian = document.querySelectorAll('#accordian-list')
      

for (let index = 0; index < accordianButton.length; index++) {
    accordianButton[index].addEventListener('click', ()=>{
        let clickedBtn = accordianButton[index].nextElementSibling.classList.contains('active')

        for (let index = 0; index < accordian.length; index++) {
            if(clickedBtn) break;

            if(accordian[index].classList.contains('active')){
                accordianButton[index].classList.remove('active')
                accordian[index].classList.remove('active')
            }
            
        }

        accordianButton[index].classList.toggle('active')
        accordian[index].classList.toggle('active')
    })
}      