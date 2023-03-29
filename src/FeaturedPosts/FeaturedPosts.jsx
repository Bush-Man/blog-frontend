import React, { useEffect, useState } from 'react'
import "./FeaturedPosts.scss";

import FeaturedPost from '../Components/FeaturedPost/FeaturedPost';
import { getAllPosts } from '../ApiRequests/PostRequests';
//import LoadingIcon from '../Components/LoadingIcon/LoadingIcon';
const FeaturedPosts = () => {

  const [featuredPosts, setFeaturedPosts] = useState([]);
  
  //============================Load Featured Posts====================================
    useEffect(() =>{
      const loadFeaturedPosts = async () => {
         
        const res = await getAllPosts();
        setFeaturedPosts(res.data.filter((p => p.category?.toLowerCase() === "featured")));
       
            
        }
        loadFeaturedPosts();
    },[]);
    



  return (

    <div className='featuredPosts'>
      
        <>
          <h1>Featured</h1>
          
          <div className="postsContainer">
        {featuredPosts.map(p => 
        <FeaturedPost key={p._id} post={p}/>
        )}
      </div>
    </>
      
      
    </div>
  )
}

export default FeaturedPosts
