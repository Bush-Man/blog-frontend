import React, { useContext, useState } from 'react';
import "./Navbar.scss";
import { Link} from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.isAdmin;
 
  const [menuListOpen, setMenuListOpen] = useState(false);



  //about //contacts
 
  return (
    <div className='navBar'>
      <div className="logo">
      <Link to="/" className='links'>
            Blog Title
        </Link>
        </div>
        
   
      <div className="rightSide" id={menuListOpen? "hidden":""}>
        
        
        <ul className='navItems'>
          <Link to="/" className='links'>
                  <li className="item">Home</li>
          </Link>

          <Link to="/about" className='links'>
                  <li className="item">About</li>
          </Link>
          <Link to="/contacts" className='links'>
                  <li className="item">Contacts</li>
          </Link>
          {
            isAdmin ? (
              <Link to="/admin" className='links' >
            <li >ADMIN</li>
          </Link>):""
          }
          
                  
        </ul>
              <div className="searchBar">
                <input type="search" name="search"  className='search' placeholder='search' />
              </div>
      
      </div>
      <div className="menuIcon">
          {menuListOpen?<CloseIcon className="menuSvg"onClick={()=>setMenuListOpen((prev)=>!prev)} />:<MenuIcon className="menuSvg" onClick={()=>setMenuListOpen((prev)=>!prev)} />}
        </div>
    </div>
  )
}

export default Navbar
