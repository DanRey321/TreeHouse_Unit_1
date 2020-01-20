/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
var quoteTemp;


// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [
  {
    quote: "Veni, Vidi, Vici",
    source: 'Julius Caesar',
    citation: 'Battle of Zela',
    year: "47 BC"
  },
  {
    quote: "I will not give my life for Joffery's murder and I know I'll get no justice here, so I will let the gods decide my fate. I demand a trial by combat",
    source: 'Tyrion Lannister',
    citation: 'Game of Thrones',
    year: '2014'
  },
  {
    quote: "Sometimes the world doesn't need another hero, sometimes what it needs is a monster.",
    source: 'Vlad the Impaler',
    citation: 'Dracula Untold',
    year: '2014'
  },
  {
    quote: "Everything they've built will fall. And from the ashes of their world, we'll build a better one.",
    source: 'Apocalypse',
    citation: 'X-Men',
    year: '2016'
  },
  {
    quote: 'Waka waka waka waka waka waka waka waka...',
    source: 'Pac-man',
    year: '1980',
    tags: 'Funny'
  }

];

/* Test Case for quotes
for(var i = 0; i < quotes.length; i += 1){
  quoteTemp = quotes[i];        //Entire object
  quoteTemp = quotes[i].quote;  //Just the quote
  console.log(quoteTemp);
}
*/


/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(randomNumber);
  console.log(quotes[randomNumber].quote);
  return quotes[randomNumber];

}

getRandomQuote();

/***
 * `printQuote` function
***/

//printQuote will arrange the quote along with other data in the proper format for html.
function printQuote(){
  var randQuote = getRandomQuote();   //Call getRandomQuote 
  var html = '';
  
  html += '<p class="quote"> '  + randQuote.quote +   '</p>';
  html+= '<p class="source"> ' + randQuote.source ;

  if(randQuote.citation){
    html += '<span class="citation"> ' + randQuote.citation + '</span>';
  }
  if(randQuote.year){
    html += '<span class="year"> ' + randQuote.year + '</span>';
  }
  if(randQuote.tags){
    html += '<span class="tags"> ' + randQuote.tags + '</span>';
  }

  html += '</p>';

  document.getElementById('quote-box').innerHTML = html; 

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);