const outreaches = document.querySelector('#services');
const part = document.querySelector('#part');
const contact = document.querySelector('#contact');
const about = document.querySelector('#about');
const back = document.querySelector('#back');
const goBack = document.querySelector('#goBack')
const bBack = document.querySelector('#bBack')
const button = document.querySelector('.button')
const fullPop = document.querySelector('.fullpop')
const contactPop = document.querySelector('#contactPop')
function screen(r, a) {
    r.style.display = 'none';
    a.style.display = 'block';
}
remove=a=>a.style.display='none'
button.addEventListener('click', ()=>screen(part, outreaches))
back.addEventListener('click', ()=>screen(outreaches, part))
contact.addEventListener('click', ()=>contactPop.style.display='flex')
about.addEventListener('click', ()=>aboutPop.style.display='flex')
goBack.addEventListener('click', ()=>remove(fullPop));
bBack.addEventListener('click', ()=>remove(aboutPop))