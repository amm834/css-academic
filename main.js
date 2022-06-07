const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const plan_buttons = document.querySelectorAll('.plan button');
const close_modal_btn = document.querySelector('.modal__action--negative');

const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

plan_buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
})

backdrop.addEventListener('click', () => {
    mobileNav.style.display = 'none';
    closeModal()
})
close_modal_btn.addEventListener('click', closeModal)

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}


toggleBtn.addEventListener('click', () => {
    backdrop.style.display = 'block';
    mobileNav.style.display = 'block';
})
