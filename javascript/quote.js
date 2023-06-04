const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector('.author .name');

// random quote function
function randomQuote(){
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.console;
        authorName.innerText = result.author;
    });
}   
quoteBtn.addEventListener("Click", randomQuote);