
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import { createNewPost} from '../../ApiRequests/PostRequests';
import "./CreatePost.scss";
import Footer from '../../Components/Footer/Footer';
const CreatePost = () => {
  
    const [post, setPost] = useState({});
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [previewImg, setPreviewImg] = useState(null);
    
   
//===================handle post info change=======================
    const handleDataChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }
//===================================================================
    
    
//=======================Calling base 10 funcion=====================
    const handleImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            const imgFile = e.target.files[0]; 
            setPreviewImg(imgFile);
            ConvertImageToBase(imgFile);
        }
    }
//====================================================================

//======================= converting image to base 10=================
    const ConvertImageToBase = (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        }
    }
//====================================================================
    
//=======================handle create post function==================
    const handleCreate = async (e) => {
        e.preventDefault();                
        try {
            await createNewPost({...post,image});     
        } catch (error) {
            throw (error);
        }
        navigate("/");
        resetForm();
    }
//====================================================================

    

//==========================reset form================================
    const resetForm = () => {
        
        setPost({
            ...post, category: "", title: "", desc: ""
        });
        setImage('');
        URL.revokeObjectURL(previewImg);
    };

  return (
      
        <div id='createPost' className='createPost'>
            <h3 style={{display:"flex",alignSelf:"center"}}>Create Todays Blog Post.</h3>
          <div className='postCard'>
              <div className='previewImage'>
                 
              {
                  previewImg && (
                      
                      <img src={ URL.createObjectURL(previewImg)} alt="" />
                      )
                    }
            </div>
          <form onSubmit={handleCreate} className='postForm'>
              <div>
              <label htmlFor="postImg">Choose Blog Image;</label>
              <input type="file" name="image" id="postImg"onChange={handleImage} required/>
            </div>
                <div>
                  <label>Category of blog:</label>
                  <input type="text" name="category" value={post.category} onChange={handleDataChange} required />
              </div>
              <div>
                  <label>Write Blogs Title:</label>
                  <input type="text" name="title" value={post.title} onChange={handleDataChange} required/>
              </div>
              <div>
                  <label >Blog Content:</label>
                  <textarea type="text" name="desc" value={post.desc} onChange={handleDataChange} required />
              </div>
                  <button type="submit" className="btnCreate" >CREATE</button>
       </form>
          </div>
          <Footer />
    </div>
   
  )
}

export default CreatePost