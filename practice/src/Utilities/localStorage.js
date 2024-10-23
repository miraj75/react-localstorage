const getStoredData=()=>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return []
}

const saveCartToLS=cart=>{
    const storedCartString =JSON.stringify(cart)
    localStorage.setItem('cart', storedCartString)
}

const addToLS=(id)=>{
    const cart = getStoredData()
    cart.push(id)
    //save to LOS
    saveCartToLS(cart)
}

const removeFromLS =id=>{
    const cart = getStoredData()
    //removing every id
    const remaining = cart.filter(idx=> idx !== id)
    saveCartToLS(remaining)
}



export { addToLS, getStoredData, removeFromLS };

