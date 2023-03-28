import React from 'react'
import "./Home.scss";
import AdSection from '../../Components/AdsSection/AdSection.jsx';
import FeaturedPosts from '../../FeaturedPosts/FeaturedPosts.jsx';
import TopStories from '../../TopStories/TopStories.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Navbar from '../../Components/Navbar/Navbar';
const Home = () => {
  const err = true;
  return (
      <div className='home'>
      <Navbar />
      <div className="homeBody">
        <AdSection />
    { err? <span style={{color:"red",fontSize:"20px",display:"flex",justifyContent:"center",textAlign:"center",width:"100%",height:"5rem"}}>The website is being updated...  </span> :  <>
    
        <FeaturedPosts />
        <TopStories location="home" />
       </>
    }
      </div>
      <Footer />
    </div>
  )
}

export default Home
