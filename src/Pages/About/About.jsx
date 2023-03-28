import React from 'react'
import AboutImage from "../../Assets/img/demopic/rocket.png";
import MissionImg from "../../Assets/img/demopic/20.avif";
import JonImg from "../../Assets/img/demopic/21.avif";
import Footer from "../../Components/Footer/Footer.jsx";
import "./About.scss";
import Navbar from '../../Components/Navbar/Navbar';
const About = () => {
    return (
      <div className='aboutPage'>
        <Navbar />
            <div className='abtHero'>
                <img src={AboutImage} alt="" srcset="" />
                
                
        </div>
            <div className="abtPageContainer">

        

                <div className='abtInfo'>
                    {/*section start */}
    <div className='card mission'>
        <div className='mission rightSide'>
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#0F62FE" d="M45.7,-79.8C59.3,-71.4,70.4,-59.2,78.6,-45.3C86.8,-31.4,92.1,-15.7,89.4,-1.5C86.8,12.6,76.2,25.3,67.4,38.2C58.7,51.1,51.7,64.3,40.8,74.2C29.8,84.1,14.9,90.8,-0.5,91.7C-15.9,92.6,-31.9,87.7,-44.3,78.6C-56.7,69.5,-65.5,56.2,-70.9,42.4C-76.4,28.6,-78.3,14.3,-78.8,-0.3C-79.3,-14.9,-78.2,-29.7,-71.2,-40.8C-64.3,-51.9,-51.4,-59.3,-38.5,-68.2C-25.7,-77,-12.8,-87.4,1.6,-90.3C16.1,-93.1,32.1,-88.3,45.7,-79.8Z" transform="translate(100 100)" />
</svg>
            <img src={MissionImg} alt=""/>
    </div>       
          <div className="mission leftSide">
                <h3>Our Mission</h3>
            <p>
                                
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus magni explicabo tenetur beatae voluptates, dolore qui possimus repellat numquam facilis aperiam adipisci maiores ducimus, deserunt et fugit dolores incidunt voluptatem!
          </p>
        </div>
                    </div>
                    {/*Section end */}
                         {/*section start */}
    <div className='card journey'>
        <div className='journey rightSide'>
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="orange" d="M45.7,-79.8C59.3,-71.4,70.4,-59.2,78.6,-45.3C86.8,-31.4,92.1,-15.7,89.4,-1.5C86.8,12.6,76.2,25.3,67.4,38.2C58.7,51.1,51.7,64.3,40.8,74.2C29.8,84.1,14.9,90.8,-0.5,91.7C-15.9,92.6,-31.9,87.7,-44.3,78.6C-56.7,69.5,-65.5,56.2,-70.9,42.4C-76.4,28.6,-78.3,14.3,-78.8,-0.3C-79.3,-14.9,-78.2,-29.7,-71.2,-40.8C-64.3,-51.9,-51.4,-59.3,-38.5,-68.2C-25.7,-77,-12.8,-87.4,1.6,-90.3C16.1,-93.1,32.1,-88.3,45.7,-79.8Z" transform="translate(100 100)" />
</svg>
            <img src={JonImg} alt=""/>
    </div>       
          <div className="journey leftSide">
                <h3>Our Journey</h3>
            <p>
                                
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus magni explicabo tenetur beatae voluptates, dolore qui possimus repellat numquam facilis aperiam adipisci maiores ducimus, deserunt et fugit dolores incidunt voluptatem!
          </p>
        </div>
                    </div>
                    {/*Section end */}
   
          </div>
            </div>
            <Footer />
    </div>
  )
}

export default About