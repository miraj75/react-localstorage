import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Cart/Cart';
import Bottle from './Components/Bottle/Bottle';
import Header from './Components/Header/Header';
import { addToLS, getStoredData, removeFromLS } from './Utilities/localStorage';

function App() {
  const [bottles, setBottles]= useState([])
  const [cart, setCart] =useState([])

  useEffect(()=>{
    fetch('Bottle.json')
    .then(res => res.json())
    .then(data => setBottles(data))
  },[])
//Load Data from LocalStorage

useEffect(()=>{
  if(bottles.length){
    const storedCart = getStoredData()
    const savedCart =[]
    for (const id of storedCart){
      const bottle = bottles.find(bottle =>bottle.id ===id)
      if(bottle){
        savedCart.push(bottle)
      }
    }
    
    setCart(savedCart)
  }
},[bottles])


  const handlePurchaseBtn=(bottle)=>{
    const newCart = [...cart, bottle]
    setCart(newCart)
    addToLS(bottle.id)
}

const handleRemoveFromCart=id=>{

  const remainingCart =cart.filter(bottle => bottle.id !==id)
  setCart(remainingCart)
  removeFromLS(id)
}
  
  return (
    <div>
     
      <Header></Header>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className='bottle-container'>{
        bottles.map(bottle =><Bottle 
          bottle={bottle} 
          key={bottle.id}
          handlePurchaseBtn={handlePurchaseBtn}
        ></Bottle>)
      }</div>
      
      
    </div>
  )
}

export default App
