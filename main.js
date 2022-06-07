const backdrop = document.querySelector('.backdrop');
const plan_btns = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');

plan_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
})
