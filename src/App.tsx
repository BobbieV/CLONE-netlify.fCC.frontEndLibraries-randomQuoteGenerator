import { useState } from 'react'
import quotes from './assets/quotes.json'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './App.css'

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`
;}

const transition = "all 1s";

//const leftQuote = <FontAwesomeIcon icon={faQuoteLeft} size="sm" style={{marginLeft: "10px"}} />
//const rightQuote = <FontAwesomeIcon icon={faQuoteRight} size="sm" style={{marginRight: "10px"}}/>
//const twitterIcon = <FontAwesomeIcon icon={faXTwitter} color="white" />

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote())
  const[randomColor, setRandomColor] = useState<string>(getRandomColor())

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  }
  return (
    <> <div className="background" style={{backgroundColor: randomColor, transition}}>
      <div id="quote-box">
        <div className="quote-content" style={{color: randomColor, transition}}>
        <h2 id="text">
          //{leftQuote}
          {quote.quote}
          //{rightQuote}
          </h2>
          <h4 id="author">-{quote.author}</h4>
        </div>
<div className="buttons">
  <a href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}" 
  id="tweet-quote"
  style= {{
    backgroundColor: randomColor,
    transition,
    marginRight: "10px",
    }}>
    {}</a>
    <button id="new-quote"
      onClick={changeQuote}
      style={{backgroundColor: randomColor}}
    >Get a new quote</button>
</div>
      </div>
      </div></>
  )
}

export default App
