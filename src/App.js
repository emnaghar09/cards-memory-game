import pokemon from './images/articulos_249948.jpg'
import Img1 from './images/1.PNG'
import Img2 from './images/2.jpg'
import Img3 from './images/3.PNG'
import Img4 from './images/4.PNG'
import Img5 from './images/5.PNG'
import Img6 from './images/6.jpg'
import Img7 from './images/7.PNG'
import Img9 from './images/9.jpg'
import Img10 from './images/10.PNG'
import Img11 from './images/11.jpg'
import Img14 from './images/14.jpg'
import {useState, useEffect} from "react";
import './App.css';

import SingleCard from './card images/singleCard.js'

const cardImg= [ {img: Img1}, {img: Img2}, {img: Img3}, {img: Img4}, {img: Img5}, {img: Img6}, {img: Img7}, {img: Img14}, {img: Img9}, {img: Img10}, {img: Img11}]

function App() {
  const [cards, setCards]= useState([])
  const [turns, setTurns]= useState(0)
  const [choiceOne, setChoiceOne]= useState(null)
  const [choiceTwo, setChoiceTow]= useState(null)

  // shuffle cards 
const shuffleCards =()=> {
  const shuffledCards=[...cardImg, ...cardImg]
  .sort(()=> Math.random() - 0.5)
  .map((card)=>({...card, id: Math.random()} ))

  setCards(shuffledCards)
  setTurns(0)
}
console.log(cards, turns)
// handle a choice t
const handleChoice= (card)=>{
choiceOne ? setChoiceTow(card): setChoiceOne(card)
}
//compare 2 selected cards 
useEffect(()=>{
  if (choiceOne && choiceTwo) {
    if (choiceOne.img === choiceTwo.img){
      setCards(prevCards =>{return prevCards.map(card=> {if (card.img === choiceOne.img){return {...card, matched:true}} else{return card }})})
    //console.log('those cards match')
    resetTurn()} else {
      //console.log('they do not match')
    setTimeout(() => resetTurn(), 1000)}}} ,[choiceOne, choiceTwo])
      console.log(cards)
//reset choices & increase turn 
const resetTurn =()=>{
  setChoiceOne(null)
  setChoiceTow(null)
  setTurns(prevTurns => prevTurns + 1)
}
  return (
    <div className="App">
    <img src={pokemon} width="300" height="120"/> 
    <h1> Flip the cards </h1>
    <button onClick={shuffleCards}>NEW GAME</button>
    <div className="Card-grid">
{cards.map(card=>( <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card=== choiceOne || card=== choiceTwo || card.matched}/> ))}
    </div>
    </div>
  );
}

export default App;
