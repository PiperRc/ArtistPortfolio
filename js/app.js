
// hamburger and navbar
const hamburger=document.querySelector('.hamburger');
const main=document.querySelector('main');

const navbar=document.querySelector('.navbar');
const navbarNav=document.querySelector('.navbar-nav');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('hamburger-click');
    navbar.classList.toggle('navbar-display');
    navbarNav.classList.toggle('navbar-nav-display');
})


main.addEventListener('click',()=>{
    if(hamburger.classList.contains('hamburger-click')){
        hamburger.classList.remove('hamburger-click');
        navbar.classList.remove('navbar-display');
        navbarNav.classList.remove('navbar-nav-display');
    }
})
// about.html

const quote = document.querySelector('.quote');
const quoteAuthor=document.querySelector('.quote-author')
const quoteBtn=document.querySelector('.quote-btn')


const getQuote = async () => {
    try{
    const rand = Math.floor(Math.random() * 1644)
    const res = await fetch("https://type.fit/api/quotes");
    const data = await res.json();
    quote.innerHTML=data[rand].text;
    quoteAuthor.innerHTML=`-${data[rand].author}`;
    }
    catch{
        quote.innerHTML="Something went wrong";
    }
}

quoteBtn.addEventListener('click',()=>{
    getQuote();
})

// window.addEventListener('load',()=>{
//     getQuote();
// })

