import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../Context/Action.js';
import { AuthContext } from '../../Context/AuthContext.js';
import "./AdminNav.scss";

const AdminNav = () => {
 const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();
    logOut(dispatch);
    navigate("/");
  }
  return (
      <div className='adminNav'>
          <div className="adminLeftSide">
              <Link className='links' to="/admin">
                 StartupsNews Dashboard
              </Link>
          </div>
              <div className="adminRightSide">
                  <ul>
                    <Link to="#create">
                      <li>
                              Create Post
                      </li>
                    </Link>
                    
        </ul>
              </div>
        <button className='btnLogOut' onClick={handleLogOut}>LOG OUT</button>
            </div>
  )
}

export default AdminNav