import { BrowserRouter,Navigate,Route,Routes,} from "react-router-dom";
import './App.scss';
import Home from './Pages/Home/Home';
import SinglePost from './Pages/SinglePost/SinglePost.jsx';
import About from './Pages/About/About.jsx';
import Login from './Pages/Login/Login.jsx';
import Admin from './Pages/Admin/Admin.jsx';
import { useContext, useEffect } from 'react';
import { AuthContext } from './Context/AuthContext.js';
import UpdatePost from "./Pages/UpdatePost/UpdatePost";



function App() {
    const { user } = useContext(AuthContext);
    const isAdmin = user?.isAdmin;
  
 //==============scroll to top on page load =========================
   useEffect(() => {
    window.scrollTo(-2, 0-2);
  }, []);

//===================================================================
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/post/:id" element={<SinglePost />} />
      <Route path="/about" element={<About />} />
      <Route path="/start" element={<Login />}/>
      <Route path="/admin" element={isAdmin?<Admin />:<Navigate to="/"/>}/>
      <Route path="/update/:id" element={isAdmin?<UpdatePost />:<Navigate to="/"/>}/>
      </Routes>
      
      </BrowserRouter>
     
        

    </div>
  );
}

export default App;
