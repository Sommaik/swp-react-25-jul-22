import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HelloWorld from './component/HelloWorld';
import DashBoard from './page/DashBoard';
import BlogPost from './page/BlogPost';
import ProtectedRoute from './component/ProtectedRoute';
import Member from './page/Member';
import Post from './page/Post';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/hello' element={ <HelloWorld/> } />
        <Route path='/dashboard' element={ <DashBoard/> } />
        <Route path='/blog/:slug/:id' element={ 
            <ProtectedRoute isLoggedIn={false}>
              <BlogPost/> 
            </ProtectedRoute>
          } />

          <Route path='/member' element={ 
            <ProtectedRoute isLoggedIn={true}>
              <Member/> 
            </ProtectedRoute>
          } />

          <Route path='/post' element={ 
            <ProtectedRoute isLoggedIn={true}>
              <Post/> 
            </ProtectedRoute>
          } />

      </Routes>

    </Router>

    
  );
}

export default App;
