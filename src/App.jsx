import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Pages/index.jsx';
import About from './Pages/about.jsx';
import Work from './Pages/work.jsx';
import WorkDetail from './Pages/workDetail.jsx';
import Blog from './Pages/blog.jsx';
import BlogPost from './Pages/blogPost.jsx';
import Contact from './Pages/contact.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:projectId" element={<WorkDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App; 