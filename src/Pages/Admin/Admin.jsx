import React from 'react'
import "./Admin.scss";
import AdminNav from '../../Components/AdminNav/AdminNav.jsx';
import CreatePost from '../CreatePost/CreatePost';
const Admin = () => {
  return (
      <div className='admin'>
      <AdminNav />
      <CreatePost />

          
    </div>
  )
}

export default Admin