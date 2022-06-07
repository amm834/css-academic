const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const plan_buttons = document.querySelectorAll('.plan button');
const close_modal_btn = document.querySelector('.modal__action--negative');


plan_buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
})

backdrop.addEventListener('click', closeModal)
close_modal_btn.addEventListener('click', closeModal)

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}
