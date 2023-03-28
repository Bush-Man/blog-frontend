import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "./TopStory.scss";
import { Link } from 'react-router-dom';
//import LoadingIcon from '../LoadingIcon/LoadingIcon';
import dateFormat from 'dateformat';
const TopStory = ({ postDat }) => {
  //  const fetching = false;
  
    
    return (
      
      <div className='postCard'>
          <Link className='links' to={`/post/${postDat._id}`}>
           <div className="postImg">
              <img src={postDat?.image?.url} alt="" />
          </div>
          <div className="postInfo">
              <h3>{postDat.title}</h3>
               <p >{postDat?.desc?.replace(/<\/?p>/g, '')}</p>
              <div className='postInfoBtm'>
                  <div style={{display:"flex", alignItems:"center" ,gap:"4px",color:"rgba(0,0,0,.8)"}}>
                      <span className='minRead'>
                          <AccessTimeIcon style={{ fontSize: "17px" }}/>
                          {dateFormat(postDat?.createdAt, "dddd, mmmm dS, yyyy")}
                      </span> 
                      
                  <span className='minRead'>#{postDat.minRead}</span>
                 </div>
                  <span className="readMore">Read more</span>
              </div>
          </div>
        </Link>
    </div>
    )
  
}

export default TopStory
