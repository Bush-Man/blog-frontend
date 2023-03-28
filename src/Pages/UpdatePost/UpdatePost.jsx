import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getPost, updatePostById } from '../../ApiRequests/PostRequests';
import Footer from '../../Components/Footer/Footer';

import Navbar from '../../Components/Navbar/Navbar';
import "./UpdatePost.scss";
const UpdatePost = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [postImage, setPostImage] = useState(null);
    const navigate = useNavigate();
    const postId = params.id;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    //=======================load post from db========================
    useEffect(() => {
        
        const loadPost = async () => {
            const res = await getPost(postId);
            setPost(res.data);
            
            
        }
        loadPost();
    }, [postId]);
//================================================================//

//=============================handle post info change=========================
    const handleDataChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }
//=============================================================================
    
//=============================Image update function===========================
    const handleImageUpdate = (e) => {
        if (e.target.files && e.target.files[0]) {
            setPostImage(e.target.files[0]);
        }
    }
//=============================================================================

    
//=============================handle update===================================
    const handleUpdate = (e) => {
        e.preventDefault();
        const postData = post;
        if (postImage) {
            const data = new FormData();
            const fileName = Date.now() + postImage.name;
            data.append("name", fileName);
            data.append("file", postData);
            postData.image = data;
        
        }
        
        updatePostById(postId, postData);
        resetForm();
        
        
         navigate(`/post/${postId}`); 
    }
 //=============================================================================
 
    
    
//===============================reset form=====================================
    const resetForm = () => {
        
        setPost({
            ...post, category: "", title: "", desc: ""
        });
        setPostImage(null);
    };



  return (
      <div className='updatePostContainer'>
          <Navbar />
          <div className='postCard'>
              <img sr={post.image} alt=""/>
          <form onSubmit={handleUpdate} className='postForm'>
              <div>
              <label htmlFor="postImg">Update Image</label>
              <input type="file" name="image" id="postImg"onChange={handleImageUpdate}/>
            </div>
                <div>
                  <label>Update Post Category</label>
                  <input type="text" name="category" value={post.category} onChange={handleDataChange} required />
              </div>
              <div>
                  <label>Update Post Title</label>
                  <input type="text" name="title" value={post.title} onChange={handleDataChange} required/>
              </div>
              <div>
                  <label >Update Post Content</label>
                  <textarea type="text" name="desc" value={post.desc} onChange={handleDataChange} required />
              </div>
                  <button type="submit" className= "btnUpdate">UPDATE</button>
       </form>
          </div>
          <Footer />
    </div>
  )
}

export default UpdatePost