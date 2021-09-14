/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "It Always Seems Impossible Until It's Done!",
    source: "Nelson Mandella",
    year: "2001"
  },
  {
    quote: "The Bad News Is Time Flies. The Good News Is You Are The Pilot.",
    source: "Michael Artchuler"
  },
  {
    quote: "Life Is Like Riding A Bicycle, To Keep Your Balance You Must Keep Moving.",
    source: "Albert Eistein"
  },
  {
    quote: "Action Without Thought Is Empty. Thought Without Action Is Blind.",
    source: "Kwame Nkuruma"
  },
  {
    quote: "Winners Never Quit, And Quitters Never Win.",
    source: "Vince Lombardi"
  },
  {
    quote: "Keep Your Face Always Towards The Sunshine - And Shadows Will Fall Behind.",
    source: "Walt Whitman",
    citation: "BrainyQuotes"
  },
  {
    quote: "There Are Some Things You Learn Best In Calm, And Some In Storm.",
    source: "Willa Cather",
    citation: "The song of the Lark"
  },
  {
    quote: "An Investment in Knowledge Pays The Best Interest",
    source: "Benjamin Franklin"
  },
  {
    quote: "Failure Isn't Fatal, But Failing To Change Might Be.",
    source: "John Wooden"
  },
  {
    quote: "The Only Real Mistake Is The One From Which We Learn Nothing.",
    source: "Henry Ford"
  }


]

/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}

/***
 * `printQuote` function
***/

function printQuote(){
  // gets a random quote object
  let displayRandomQuote = getRandomQuote();
  
  let assembleString = 
  `
    <p class = "quotes">${displayRandomQuote.quote}</p>
    <p class = "source"> ${displayRandomQuote.source}

  `
  // coditions to check if the quote has a citation or year
  if (displayRandomQuote["citation"]){
    assembleString +=`<span class="citation">${displayRandomQuote.citation}</span>`;
  }

  if (displayRandomQuote["year"]){
     assembleString += `<span class="year">${displayRandomQuote.year}</span>`;
  }

  assembleString += `</p>`

  document.getElementById('quote-box').innerHTML = assembleString;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);