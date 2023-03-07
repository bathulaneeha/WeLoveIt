import React from 'react';
import {useSelector} from 'react-redux'
function MyCart() {
    let cart=useSelector(state=>state.cart)
  return <div>
      <div className="card" style={{backgroundColor:'#1a1a1a'}}>
  <div className="card-body text-light">
  <h4 style={{color:'#b31966'}} className='display-6'>Add to cart!</h4><hr></hr>
    <p className="card-text lead">{cart.length} items added</p>
    <button href="#" className="btn" style={{backgroundColor:'#edabcc'}}>Place Order</button>
  </div>
</div>
  </div>;
}

export default MyCart;
