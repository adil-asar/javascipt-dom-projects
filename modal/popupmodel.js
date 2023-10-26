

const openmodel = document.querySelector('#openbtn');
const closemodel = document.querySelector('#closebtn');
const model = document.querySelector('#mymodel');

openmodel.addEventListener('click' , function () {
    model.style.display="block"
})

closemodel.addEventListener('click',function(){
    model.style.display="none"
})