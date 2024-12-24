let apiQuotes=[];

// function newQuote(){
//     const quote = apiQuotes[Math.floor(math.random() * apiQuotes.length)];
//     console.log(quote.text);
// }

function newQuote() {
    // loading();
   // Pick a random quote from apiQuotes array
   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   // Check if Author field is blank and replace it with 'Unknown'
//    if (!quote.author) {
//     authorText.textContent = 'Unknown';
//    } else {
//     authorText.textContent = quote.author; 
//    }
   // Check Quote Length to determine the styiling
//    if (quote.text.length > 120) {
//     quoteText.classList.add('long-quote');
//    } else {
//     quoteText.classList.remove('long-quote');
//    }
//    // Set Qoute, Hide Loader 
//    quoteText.textContent = quote.text;
//    complete();
      console.log(quote);
}

async function getQuotes() {
    const apiUrl= 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response= await fetch(apiUrl);
        apiQuotes=await response.json();
        // console.log(apiQuotes[15]);
        newQuote();
 
    }catch(error){
        // catch error
    }
}

getQuotes();


// function newQuote(){
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(quote);
// }

// newQuote();