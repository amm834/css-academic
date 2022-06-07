const backdrop = document.querySelector('.backdrop');
const plan_btns = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');

plan_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
})

const close_modal_btn = document.querySelector('.modal__action--negative');
close_modal_btn.addEventListener('click', () => {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
})
