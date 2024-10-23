import PropTypes from 'prop-types';
import './Bottle.css';
const Bottle = ({ bottle,handlePurchaseBtn }) => {
    const {
      name,
      category,
      price,
      seller,
      rating,
      stock,
      
    } = bottle;
  
    return (
      <div className="bottle">
        <h3>Name: {name}</h3>
        <p>Category: {category}</p>
        <p>Price: {price} $</p>
       <span>Seller: <a href={seller}>{seller}</a> </span> 
        <p>Rating: {rating}</p>
        <p>Stock: {stock}</p>
        <button onClick={()=>handlePurchaseBtn(bottle)}>Purchase</button>
      </div>
    );
  };

  Bottle.propTypes ={
    bottle:PropTypes.object.isRequired,
    handlePurchaseBtn:PropTypes.func.isRequired
  }
export default Bottle  