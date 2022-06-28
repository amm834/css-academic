const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const plan_buttons = document.querySelectorAll('.plan button');
const close_modal_btn = document.querySelector('.modal__action--negative');

// mobile
const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

plan_buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(() => {
            backdrop.classList.add('open');
            modal.classList.add('open');
        }, 10);
    })
})

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open')
    closeModal()
})

if (close_modal_btn) {
    close_modal_btn.addEventListener('click', closeModal)

}

function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}


toggleBtn.addEventListener('click', () => {
    setTimeout(() => {
        backdrop.classList.add('open')
        mobileNav.classList.add('open')
    }, 10)
})
