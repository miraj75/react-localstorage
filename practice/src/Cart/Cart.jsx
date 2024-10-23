import PropTypes from "prop-types";

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h1>Cart: {cart.length}</h1>
            {
                cart.map(bottle=> <div key={bottle.id}>
                    <p >{bottle.name}</p>
                    <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
                </div>)
            }
        </div>
    );
};


Cart.propTypes={
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired

}
export default Cart;