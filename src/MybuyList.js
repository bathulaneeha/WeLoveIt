import React from 'react';
import {useSelector} from 'react-redux'
function MybuyList() {
  let buy=useSelector(state=>state.buy)
  return <div>
    <div className="card" style={{backgroundColor:'#1a1a1a'}}>
  <div className="card-body text-light">
  <h4 style={{color:'#b31966'}} className='display-6'>Add to bag!</h4><hr></hr>
    <p className="card-text lead">{buy.length} items selected</p>
    <button href="#" className="btn" style={{backgroundColor:'#edabcc'}}>Move to Cart</button>
  </div>
</div>
  </div>;
}

export default MybuyList;
