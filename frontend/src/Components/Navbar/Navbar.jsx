// import React, { useContext, useState } from "react";
// import './Navbar.css'
// import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'
// import { Link } from "react-router-dom";
// import { ShopContext } from "../../Context/ShopContext";

// const Navbar=()=>{
//     const [menu,setMenu]=useState("shop");
//     const {getTotalCartItems}=useContext(ShopContext);
        
//     return (
//         <div className="navbar">
//             <div className="nav-logo">
//                 <img src={logo} alt="" />
//                 <p>SHOPPER</p>
//             </div>
//         <ul className="nav-menu">
//             <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
//             <li onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="Mens"?<hr/>:<></>}</li>
//             <li onClick={()=>{setMenu("Womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="Womens"?<hr/>:<></>}</li>
//             <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
//         </ul>
//         <div className="nav-login-cart">
//            <Link to='./login'><button>Login</button></Link>
//            <Link to='./cart'><img src={cart_icon} alt="cart-icon" /></Link>
//             <div className="nav-cart-count">{getTotalCartItems()}</div>
//         </div>

//         </div>
//     )
// }

// export default Navbar;

import React, { useContext, useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext); // Destructure the function directly

    const [menu, setMenu] = useState("shop");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("Shop") }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                    {menu === "Shop" ? <hr /> : <></>}
                </li>
                <li onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="Mens"?<hr/>:<></>}</li>
                     <li onClick={()=>{setMenu("Womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="Womens"?<hr/>:<></>}</li>
                     <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
                {/* ... (similar changes for other menu items) */}
            </ul>
            <div className="nav-login-cart">
                <Link to='./login'><button>Login</button></Link>
                <Link to='./cart'><img src={cart_icon} alt="cart-icon" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
