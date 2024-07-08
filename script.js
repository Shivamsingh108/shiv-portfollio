console.log("script running")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        setTimeout(() => {
        document.querySelector('.ham').style.display = 'inline';
        }, 250);
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
        document.querySelector('.cross').style.display = 'inline';
        }, 350);
    }
})



let more = document.querySelectorAll('.blog-more');

for(let i=0; i<more.length; i++){
    more[i].addEventListener('click', function(){
        more[i].parentElement.classList.toggle('active');
    })
}