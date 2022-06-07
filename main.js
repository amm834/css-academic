const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const plan_buttons = document.querySelectorAll('.plan button');
const close_modal_btn = document.querySelector('.modal__action--negative');

const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

plan_buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open')
        backdrop.classList.add('open')
    })
})

backdrop.addEventListener('click', () => {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open')
    closeModal()
})
close_modal_btn.addEventListener('click', closeModal)

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    modal.classList.remove('open');
    backdrop.classList.remove('open');
}


toggleBtn.addEventListener('click', () => {
    // backdrop.style.display = 'block';
    // mobileNav.style.display = 'block';
    backdrop.classList.add('open')
    mobileNav.classList.add('open')
})
