import axios from "axios";

const API = axios.create({ baseUrl: "https://blogwebsiteapitry.onrender.com" });

//delete a post
export const deletePost = async (postId) => {
    try {
        API.delete("/post/" + postId);
        
    } catch (err) {
        throw (err);
    }
}
//update a post
export const updatePostById = async (postId, data) => {
    try {
        
     const res = await API.put(`/post/${postId}`, data);
        return res;
    } catch (err) {
        throw (err);
    }
}


//get a post 
export const getPost = async (postId) => {
     
    try {       
        const res = await API.get("/post/" + postId);
        return res;
  } catch (err) {
        throw (err);
    }
}
//get All Posts
export const getAllPosts = async () => {
    try {
        const res = await API.get("/post/");
        return res;
    } catch (err) {
        throw(err)
    }
}
//create post
export const createNewPost = async (data) => {
    try {
      await API.post("/post/", data);      
     
    } catch (error) {
        throw (error);
    }
}
