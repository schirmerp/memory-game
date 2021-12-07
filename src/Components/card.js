
import React, { useEffect, useState } from 'react';


function Card() {
  const [cardSelected, setCardSelected] = useState(false)
  var data = require('./data')
  
  useEffect(()=>{
    const changeOnClick = ()=>{
      if(cardSelected === false){
        setCardSelected(true)
      }else{
        setCardSelected(false)
      }
    }
    document.addEventListener('click', changeOnClick)

    return ()=>{
      document.removeEventListener('click', changeOnClick)
    }
  },[cardSelected])
  return (
    <div className="App">
      <div 
        id='card'
        style={{
          backgroundColor: cardSelected ? 'red' : 'black',
          height: '100px',
          width: '100px',
          left: '50%',
          right: '50%'

        }}
        >
        <img style={{
          maxHeight: '250px',
          width: 'auto'
        }}
        src={data[0].image.src} alt={data[0].image.alt}/>
      </div>
    </div>
  );
}

export default Card;
