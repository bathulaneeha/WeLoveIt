import React from 'react';
import {useSelector} from 'react-redux'
function MyInfo() {
    let info=useSelector(state=>state.user)
  return <div>
    <p className='display-6 bolder text-center' style={{color:'	#8f3d66',fontFamily:"'Unna','serif"
}}>{info}</p>
  </div>;
}

export default MyInfo;
