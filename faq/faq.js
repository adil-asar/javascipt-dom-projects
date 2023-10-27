
const btns = document.querySelectorAll('.x-btn');

btns.forEach(function (btn) {
    btn.addEventListener("click",function (e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text')
    })
})