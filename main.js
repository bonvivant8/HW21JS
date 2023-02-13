const prevBtn=document.querySelector('.prev')
const next=document.querySelector('.next')
const slideItem=document.querySelectorAll(".slide")
const number=slideItem.length;
let count=0
function btn(){
    if (count===0){
        prevBtn.classList.add('slide')
    }
    else {
        prevBtn.classList.remove('slide')
    }
    if (count===number-1){
        next.classList.add('slide')
    }
    else {
        next.classList.remove('slide')
    }
}
function nextSlide()
{
    slideItem[count].classList.remove('active')
    if(count<number-1){
        count++;
    }
    else {
        count=0;

    }
btn()
    slideItem[count].classList.add('active')
    console.log(count)
}
next.addEventListener('click',nextSlide)
function prevSlide()
{
    slideItem[count].classList.remove('active')
    if(count>0){
        count--;
    }
    else {
        count=number-1;

    }
btn()
    slideItem[count].classList.add('active')
    console.log(count)
}
prevBtn.addEventListener('click',prevSlide)