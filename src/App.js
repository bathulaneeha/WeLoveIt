import WishList from "./WishList";
import MybuyList from "./MybuyList";
import MyCart from "./MyCart";
import MyInfo from "./MyInfo";
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import { addtouser } from "./slices/User";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {addtobuy} from "./slices/Buynow";
import {addtocart} from './slices/Cart';
import {addtowish} from './slices/Wishlist';
import {faHeart, faShoppingBag, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function App() {
  const {register,handleSubmit,formState:{errors}}=useForm()
  let dispatch=useDispatch()
  const onFormSubmit=(userObj)=>{
    let actionObj=addtouser('Welcome '+userObj.name+'!')
    dispatch(actionObj)
  }
  const onBtnSubmit=()=>{
    let actn2Obj=addtobuy('added to bag')
    dispatch(actn2Obj)
  }
  const onBtn2Submit=()=>{
    let actn3Obj=addtowish('added to bag')
    dispatch(actn3Obj)
  }
  const onBtn3Submit=()=>{
    let actn4Obj=addtocart('added to bag')
    dispatch(actn4Obj)
  }
  return (
    <div className="container-fluid" style={{backgroundImage:'url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pink-background-with-defocused-lights-ineskoleva.jpg")',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <form className="row p-5" onSubmit={handleSubmit(onFormSubmit)}>
        <p className=" h1" style={{fontFamily:"'Unna','serif"
}}><img src="https://www.pngkit.com/png/full/116-1161233_love-pink-logo-png-ville-de-saint-etienne.png" width={'115rem'} ></img>To continue shopping please login with your account!</p>
  <div className="col-auto">
    <label htmlFor="Name" className="visually-hidden">Username</label>
    <input type="text" className="form-control" id="staticEmail2" placeholder="Enter Username" {...register('name',{required:true})}/>
    {errors.name?.type==='required'&&<p className='text-danger'>*name required</p>}
  </div>
  <div className="col-auto">
    <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
    <input type="password" className="form-control" id="inputPassword2" placeholder="Password" {...register('pw',{required:true})} />
    {errors.pw?.type==='required'&&<p className='text-danger'>*enter password</p>}
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-outline-dark ps-5 pe-5">Login</button>
  </div>
</form>
      <div><MyInfo/></div>
      <div className="row">
      <div className="card col p-4 m-3" style={{width: '18rem'}}>
        <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14778250/2021/7/23/97d28169-ebc2-47d0-96e5-62710a45f3b11627007951946-Inddus-Women-Metallic-Purple-Pleated-Kurta-with-Sharara-and--1.jpg" className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">Inddus</h5>
          <p className="card-text">Women Green & Off White Floral Printed Anarkali Kurta with Dupatta</p>
          <button type="submit" className="btn" style={{backgroundColor:'#f5a3cc'}} onClick={onBtnSubmit}><FontAwesomeIcon  icon={faShoppingBag} className="me-2" />Bag</button>
          <button type="submit" className="btn ms-2" style={{backgroundColor:'#f5a3cc'}} onClick={onBtn2Submit}><FontAwesomeIcon  icon={faHeart}  className="me-2"size="" />Wish</button>
          <button type="submit" className="btn ms-2" style={{backgroundColor:'#f5a3cc'}} onClick={onBtn3Submit}><FontAwesomeIcon  icon={faShoppingCart}  className="me-2"size="" />Cart</button>
        </div>
      </div>
      <div className="card col p-4 m-3" style={{width: '18rem'}}>
        <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/4/27656214-cc09-48fe-82f7-2747193cb4681609764220974-1.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Inddus</h5>
          <p className="card-text">Women Green & Off White Floral Printed Anarkali Kurta with Dupatta</p>
          <button type="submit" className="btn" style={{backgroundColor:'#f5a3cc'}} onClick={onBtnSubmit}><FontAwesomeIcon  icon={faShoppingBag}  className="me-2"size="" />Bag</button>
          <button type="submit" className="btn ms-2" style={{backgroundColor:'#f5a3cc'}} onClick={onBtn2Submit}><FontAwesomeIcon  icon={faHeart}  className="me-2"size="" />Wish</button>
          <button type="submit" className="btn ms-2" style={{backgroundColor:'#f5a3cc'}} onClick={onBtn3Submit}><FontAwesomeIcon  icon={faShoppingCart}  className="me-2"size="" />Cart</button>
        </div>
      </div>
      <div className="card col p-4 m-3" style={{width: '18rem'}}>
        <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10418144/2019/11/8/6f191d16-0c74-4d4d-a17f-40178446959c1573192849297-Anouk-Women-Kurtas-6491573192847712-1.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Inddus</h5>
          <p className="card-text">Women Green & Off White Floral Printed Anarkali Kurta with Dupatta</p>
          <button type="submit" className="btn" style={{backgroundColor:'#f5a3cc'}} onClick={onBtnSubmit}><FontAwesomeIcon  icon={faShoppingBag} className="me-2" size="" />Bag</button>
          <button type="submit" className="btn ms-2" style={{backgroundColor:'#f5a3cc'}} onClick={onBtn2Submit}><FontAwesomeIcon  icon={faHeart}  className="me-2"size="" />Wish</button>
          <button type="submit" className="btn ms-2" style={{backgroundColor:'#f5a3cc'}} onClick={onBtn3Submit}><FontAwesomeIcon  icon={faShoppingCart}  className="me-2"size="" />Cart</button>
        </div>
      </div>
      <div className="card col p-4 m-3" style={{width: '18rem'}}>
        <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14778276/2021/7/19/7c5580a4-f025-4fbf-ab22-20ed6a99f90a1626672193915-Inddus-Women-Off-White-Printed-Kurta-with-Pants-and-Dupatta--7.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Inddus</h5>
          <p className="card-text">Women Green & Off White Floral Printed Anarkali Kurta with Dupatta</p>
          <button type='submit' className="btn" style={{backgroundColor:'#f5a3cc'}} onClick={onBtnSubmit}><FontAwesomeIcon  icon={faShoppingBag} className="me-2" size="" />Bag</button>
          <button type="submit" className="btn ms-2" style={{backgroundColor:'#f5a3cc'}} onClick={onBtn2Submit}><FontAwesomeIcon  icon={faHeart}  className="me-2"size="" />Wish</button>
          <button type="submit" className="btn ms-2" style={{backgroundColor:'#f5a3cc'}} onClick={onBtn3Submit}><FontAwesomeIcon  icon={faShoppingCart}  className="me-2"size="" />Cart</button>
        </div>
      </div>
    </div>

        <div className="row">
        <div className="col mt-5">
          <MybuyList/>
        </div>
        <div className="col mt-5">
          <WishList/>
        </div>
        <div className="col mt-5">
          <MyCart/>
        </div>
      </div>
    </div>
  );
}

export default App;
