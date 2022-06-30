const menu_btn = document.querySelector('.main-brand__menu');
const mobile_nav = document.querySelector('.mobile-nav');
const backdrop = document.querySelector('.backdrop');
const choose_btns = document.querySelectorAll('.choose-btn');
const modal = document.querySelector('#modal');
const confirm_btn = document.querySelector('.button-confirm');
const cancel_btn = document.querySelector('.button-cancel');

// choose btn
if (choose_btns) {
    choose_btns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('show-modal');
        })
    })
}


if (confirm_btn && cancel_btn) {
    confirm_btn.addEventListener('click', () => {
        modal.classList.remove('show-modal')
    })

    cancel_btn.addEventListener('click', () => {
        modal.classList.remove('show-modal')
    })

}
menu_btn.addEventListener('click', () => {
    mobile_nav.classList.remove('animate__fadeOutLeftBig')
    mobile_nav.classList.add('show-menu')
    setTimeout(() => {
        backdrop.classList.add('show-backdrop')
    }, 500);
})


if (backdrop) {
    backdrop.addEventListener('click', () => {
        if (mobile_nav) {
            mobile_nav.classList.add('animate__fadeOutLeftBig')
            setTimeout(() => {
                mobile_nav.classList.remove('show-menu')
                backdrop.classList.remove('show-backdrop')
            }, 300)
        }
    })

}