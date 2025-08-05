import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout.js';
import Home from './Pages/index.js';
import About from './Pages/about.js';
import Work from './Pages/work.js';
import Blog from './Pages/blog.js';
import BlogPost from './Pages/blogPost.js';
import Contact from './Pages/contact.js';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App; 