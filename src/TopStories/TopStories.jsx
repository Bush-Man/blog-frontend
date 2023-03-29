import React, { useEffect, useState } from 'react'
import "./TopStories.scss";
//import { TopStoriesData } from '../Data/TopStories';
import TopStory from '../Components/TopStory/TopStory.jsx';
import { getAllPosts } from '../ApiRequests/PostRequests';
//import LoadingIcon from '../Components/LoadingIcon/LoadingIcon';
const TopStories = ({location}) => {
       const [trendingPosts, setTrendingPosts] = useState([]);
  
  
  //==================fetch all trending posts from db ====================================
    useEffect(() =>{
      const loadTrendingPosts = async () => {
         
        const res = await getAllPosts();
        setTrendingPosts(res.data.filter((p => p.category?.toLowerCase() === "trending")));
        
            
        }
        loadTrendingPosts();
    },[]);
  //========================================================================================  
  return (

    <div className='topStoriesContainer'>
     <>

<h1>{location === "home"?"Trending":"Related"}</h1>
          <div className='storiesContainer'>
        {trendingPosts.map(story =>
            <TopStory key={story._id} postDat={story} />
            )}
          </div>
       </>
         
    </div>
  )
}

export default TopStories
