import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dateFormat from "dateformat";
import "./SinglePost.scss";
import TopStories from '../../TopStories/TopStories';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { AuthContext } from '../../Context/AuthContext';
import { deletePost, getPost } from '../../ApiRequests/PostRequests';
import LoadingIcon from '../../Components/LoadingIcon/LoadingIcon';
const SinglePost = () => {

    const [post, setPost] = useState({});
    const { user } = useContext(AuthContext);
    const isAdmin = user?.isAdmin;
    const navigate = useNavigate();
    const params = useParams();
    const postId = params.id;
    const [loading, setLoading] = useState(false);

    //=========loading function==========================
    useEffect(() => {
        !post && navigate("/")
    }, [navigate,post]);
    

    //==================Load Post from db ================
    useEffect(() => {
        const loadDbPost = async () => {
            setTimeout(() => {
                setLoading(true);
            }, 3);
            const res = await getPost(postId)
            setPost(res.data);
            setLoading(false);
     
        }
        loadDbPost()
    }, [postId]);

    //==========================================================//
    //==========Redirects to the update page====================
    const handleUpdate = (e) => {
        e.preventDefault();
        navigate(`/update/${postId}`);
        
    }
    //===========================================================//

    


    //=============delete the current post confirm function.=====
    const handleDelete = (e) => {
        e.preventDefault();
        window.prompt("Are you Sure You Want To delete this post?")
        window.confirm("Delete");
        deletePost(postId);
        navigate("/");
    }
    //==============================================================//
    return (
        post && (
            <div className='singlePostContainer'>
                {
                    loading ? <LoadingIcon className="sPLoadingIcon" /> :
                        <>
                            <Navbar />
                            <div className="singlePostInfo">
                                <div>
                  
                                    <h1>
                                        {post?.title}
                                    </h1>
                                    <div className='postDetails'>
                                        <span>
                                            <AccessTimeIcon />
                                            {dateFormat(post?.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")
                                            }
                                        </span>
                                        <span>{Math.floor((post?.desc?.length * 0.25) / 60)} min read.</span>
                                    </div>
                                </div>
                                <div className='sinPostImg'>
                                    <img src={post?.image?.url} alt="" />
                                </div>
                                <div className="singlePostDesc">
                                  <p dangerouslySetInnerHTML={{ __html: post?.desc?.replace(/(<p>|<\/p>|<br \/>)/g, '') }} ></p>

                                   
                  
                   
                                </div>
                                {isAdmin ? (
                  
                  
                                    <div className='adminBtns'>
                                        <button onClick={handleUpdate}>UPDATE</button>
                                        <button onClick={handleDelete}>DELETE</button>
                                    </div>
                                ) : ""
                                }
                                <div>
                                    <TopStories location="singlePost" />
                                </div>
                
                            </div>
                            <div>
                                <Footer />
                            </div>
                        </>
                }
            </div>
        ) )
}

export default SinglePost