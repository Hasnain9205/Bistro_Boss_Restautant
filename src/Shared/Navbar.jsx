import { NavLink } from "react-router-dom"
import menuImg from '../../src/assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
export default function Navbar() {

    const navLinks = <>
    <NavLink> <li> Home </li></NavLink>
    <NavLink> <li> CONTACT US </li></NavLink>
    <NavLink> <li> DASHBOARD </li></NavLink>
    <NavLink to='/menu'> <li> OUR MENU </li></NavLink>
    <NavLink to='/order' className="flex items-center justify-center"> <li>ORDER FOOD</li>
    <img className="w-8 h-6 text-center" src={menuImg} alt="menu icon" /> </NavLink>
    <NavLink> <li> </li></NavLink>
    <NavLink> <li>  </li></NavLink>
    </>
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navLinks
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BISTRO BOSS 
    <span>Restaurant</span></a>
  </div>
  <div className="navbar-end hidden lg:flex items-center justify-center text-center">
    <ul className="menu menu-horizontal px-1 gap-6 items-center justify-center text-center">
    {
    navLinks
    }
    </ul>

    <a className="btn">SIGN OUT</a>
  </div>
 
    

</div>
    </div>
  )
}
