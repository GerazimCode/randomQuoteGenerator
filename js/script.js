/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * an array of objects containing various quotes and their attributes 
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
 * a function that collects quotes from the quotes array randomly
***/

function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}

/***
 * the function resposinsible of displaying random quotes on the page and check if the quote has citation of year.
***/

function printQuote(){
  // gets a random quote object
  let displayRandomQuote = getRandomQuote();
  
  // generating the string that stores the html for the page.
  let assembleString = 
  `
    <p class = "quote">${displayRandomQuote.quote}</p>
    <p class = "source"> ${displayRandomQuote.source}

  `
  // conditions to check if the quote has a citation or year
  if (displayRandomQuote["citation"]){

    // concantenates the span element to the string variable when the condition is true
    assembleString +=`<span class="citation">${displayRandomQuote.citation}</span>`;
  }

  if (displayRandomQuote["year"]){
     assembleString += `<span class="year">${displayRandomQuote.year}</span>`;
  }
  // concantenates the closing tag to the main string of html.
  assembleString += `</p>`

  // this line of code inserts the string into the html of the page so it can desplay on the page
  document.getElementById('quote-box').innerHTML = assembleString;

}

// To further develop to exceed...
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);