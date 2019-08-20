

const quotes = [
    {
        name:'Stephen King',
        quote:'Get busy living or get busy dying.'
    },
    {
        name:'Abraham Lincoln',
        quote:'I am a sucesss today because I had a friend who believed in me and I did not have the heart to let him down'
    },
    {
        name :'John F. Kennedy',
        quote:'Those who dare to fail miserably can achieve greatly.'
    }
]



const quoteBtn =document.querySelector('#quoteBtn');
const quoteAuthor =document.querySelector('#quoteAuthor');
const quote =document.querySelector('#quote');
 
quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
 
}     


// console.log('testing')
// });


