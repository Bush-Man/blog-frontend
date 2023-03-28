
import "./FeaturedPost.scss";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import dateFormat from "dateformat";
import { useEffect, useState } from "react";
const FeaturedPost = ({ post, fetching }) => {
    

//==============image loading function============
    const [loading, setLoading] = useState(false);
    useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

    
    return (
         fetching? <LoadingIcon /> : (
        
        <div className='ftPostCard'>
                <Link to={`/post/${post._id}`} className="links">
                    <div className="leftSide">
                    <img src={loading? <LoadingIcon /> : post.image.url} alt="" />
                    </div>
                    <div className="rightSide">
                        <h3>{post.title}</h3>
                        <p>
                           {post.desc.replace(/<\/?p>/g, '')}
                        </p>
                        <div className='rsBottom'>
                            <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "rgba(0,0,0,.8)" }}>
                                <span className='creatAt'>
                                    <AccessTimeIcon className="timeIcon" style={{ fontSize: "17px" }} />
                                    {dateFormat(post.createdAt, "dddd, mmmm dS, yyyy")}
                                </span>
                      
                               
                            </div>
                            <span className="readMore">Read more</span>
                        </div>
                    </div>
                    </Link>
                    
                    
        </div>)
                
                    )
                    
    
      
}

export default FeaturedPost