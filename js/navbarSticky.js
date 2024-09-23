const headerSticky = document.querySelector('#navbar');
const sticky = headerSticky.offsetTop;
console.log(sticky);
window.addEventListener('scroll', function () {
if(window.scrollY > sticky){
    headerSticky.classList.add('position-sticky');
}
else{
    headerSticky.classList.remove('position-sticky');
}
})