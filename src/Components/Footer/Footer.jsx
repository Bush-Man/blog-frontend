
import "./Footer.scss";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from "react-router-dom";

const Footer = () => {
    
  return (
      <div className='footerContainer'>
          <div className='footerInfo'>
              
          
              
          <div className="leftSide">
              <h1>About</h1>
              <div>
                  <ul className='aboutList'>
                          <li>
                              <ArrowRightAltIcon className='arrPng'/>
                              Terms and Conditions
                          </li>
                          <li>
                              <ArrowRightAltIcon className='arrPng'/>
                              Information Ethics
                          </li>
                          <li>
                              <ArrowRightAltIcon className='arrPng'/>
                              News Letter
                          </li>
                          <li>
                              <ArrowRightAltIcon className='arrPng'/>
                              Site Map
                          </li>
                          <li>
                              <ArrowRightAltIcon className='arrPng'/>
                              Privacy Policy
                          </li>
                  </ul>
              </div>
          </div>
          <div className="center">
              <h1>Follow Us</h1>
              <ul className='socialMedLinks'>
                      <li>
                    <FacebookIcon className="socIcon"  />
                          Facebook
                      </li>
                      <li>
                         <TwitterIcon className="socIcon" />
                          Twitter
                      </li>
                      <li>
                         <InstagramIcon className="socIcon" />
                          Instagram
                      </li>
                  
              </ul>
              
          </div>
          <div className="rightSide">
              <div className="logo">
              DEVELOPERSPOOL
            </div>
              </div>
              
             
          </div>

          <div className='copRight'>
              <Link to="/start" className="links">
              <CopyrightIcon className='copIcon'/> 
              </Link>
             2023 All Rights Reserved StartUp News.
                  
          </div>
          </div>
  )
}

export default Footer
