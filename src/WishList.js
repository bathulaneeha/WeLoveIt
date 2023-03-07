import React from 'react';
import {useSelector} from 'react-redux'
function WishList() {
    let wish=useSelector(state=>state.wish)
  return <div>
    <div className="card" style={{backgroundColor:'#1a1a1a'}}>
  <div className="card-body text-light">
  <h4 style={{color:'#b31966'}} className='display-6'>Add to Wishlist!</h4><hr></hr>
    <p className="card-text lead">{wish.length} items in your wishlist</p>
    <button href="#" className="btn" style={{backgroundColor:'#edabcc'}}>Move to Bag</button>
  </div>
</div>
  </div>;
}

export default WishList;
