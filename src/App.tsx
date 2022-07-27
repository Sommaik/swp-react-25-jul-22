import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./component/HelloWorld";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPost from "./page/BlogPost";
import ProtectedRoute from "./page/ProtectedRoute";
import Member from "./page/Member";
import Post from "./page/Post";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<HelloWorld />} />
        <Route
          path="/blog/:slug/:id"
          element={
            <ProtectedRoute isLoggedIn={false}>
              <BlogPost />
            </ProtectedRoute>
          }
        />
        <Route path="/member" element={<Member />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
