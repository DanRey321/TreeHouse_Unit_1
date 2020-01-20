/******************************************
Daniel Reyes
1/20/2019
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
******************************************/


/*
* Array of Objects
* Holds 5 different quotes along with source, citation, year, and tag...
*/
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

/* 
* Generates random number to return random quote 
*/
function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  //console.log(randomNumber);
  //console.log(quotes[randomNumber].quote); //Test cases
  return quotes[randomNumber];

}


/*
 * printQuote will arrange the quote along with other data in the proper format for html.
 */ 
function printQuote(){
  var randQuote = getRandomQuote();   //Call getRandomQuote 
  var html = '';
  
  html += '<p class="quote"> '  + randQuote.quote + '</p>';
  html+= '<p class="source"> ' + randQuote.source;

  //If statements determine if quotes have additional information and includes them if needed
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

document.getElementById('load-quote').addEventListener("click", printQuote, false);