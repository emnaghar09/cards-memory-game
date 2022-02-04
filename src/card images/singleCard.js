import React from 'react';
import cover from '../images/pokeball.PNG'

function singleCard({card, handleChoice, flipped}) {
const handleClick=()=>{
    handleChoice(card)
    }
return (
<div className="Card">
<div className={flipped ? 'flipped' : ''}>
<img src={card.img} className='front' width="100" height="100"/>
<img src={cover}
className='back'  
width="100" height="100" 
onclick={handleClick}/>
</div>
</div>);
}
export default singleCard;
