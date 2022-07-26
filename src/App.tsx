import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import HelloWorld from './component/HelloWorld';
import BlogPost from './pages/BlogPost';
import ProtectedRoute from './component/ProtectedRoute';
import Member from './component/Member';
import PostPage from './pages/PostPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/hello' element={<HelloWorld/>}/>
            <Route path='/blog/:slug/:id' element={
                <ProtectedRoute isLoggedId={true}>
                    <BlogPost/>
                </ProtectedRoute>
            }/>
            <Route path='/member' element={<Member/>}/>
            <Route path='/postData' element={<PostPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

//export {HelloWorld, HelloWorld as HW};
export default App;
