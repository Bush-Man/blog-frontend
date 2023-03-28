import React from 'react'
import "./Home.scss";
import AdSection from '../../Components/AdsSection/AdSection.jsx';
import FeaturedPosts from '../../FeaturedPosts/FeaturedPosts.jsx';
import TopStories from '../../TopStories/TopStories.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Navbar from '../../Components/Navbar/Navbar';
const Home = () => {
  return (
      <div className='home'>
      <Navbar />
      <div className="homeBody">
        <AdSection />
        <FeaturedPosts />
        <TopStories location="home" />
        
      </div>
      <Footer />
    </div>
  )
}

export default Home