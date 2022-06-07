const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const plan_buttons = document.querySelectorAll('.plan button');
const close_modal_btn = document.querySelector('.modal__action--negative');

// mobile
const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

plan_buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('open')
        backdrop.classList.add('open')
    })
})

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open')
    closeModal()
})
close_modal_btn.addEventListener('click', closeModal)

function closeModal() {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
}


toggleBtn.addEventListener('click', () => {
    backdrop.classList.add('open')
    mobileNav.classList.add('open')
})
