
let text_container = document.querySelector('.text_container');
let container = document.querySelector('.container');


container.addEventListener("click",(e)=> {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let span = document.createElement('span');
    span.style.left = x + "px";
    span.style.top = y + "px";
    text_container.appendChild(span);
    console.log(e.target.offsetLeft);
})