import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contentcreation from './pages/Contentcreation';
import Posterdesign from './pages/Posterdesign';
import Seo from './pages/Seo';
import Socialmediamanagement from './pages/Socialmediamanagement';
import Video from './pages/Video';
import Email from './pages/Email';
import Contact from './pages/Contact';
import Scroll from './pages/Scroll';
import Loader from './Loader';

// // ✅ Newly added imports
 import Socialmediamarketing from './pages/SocialMediaMarketing';
 import Searchengine from './pages/SearchEngine';
 import Contentwriting from './pages/ContentWriting';
  import Videography from './pages/Videography';
 import Recuritintern from './pages/Recuritintern';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      // Page already loaded
      setIsLoading(false);
    } else {
      // Wait for full page load
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Scroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contentcreation" element={<Contentcreation />} />
        <Route path="/poster" element={<Posterdesign />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/socialmedia" element={<Socialmediamanagement />} />
        <Route path="/video-editing" element={<Video />} />
        <Route path="/email-marketing" element={<Email />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/content-writing" element={<Contentwriting />} />
         <Route path="/media-marketing" element={<Socialmediamarketing />} />
         <Route path="/search-marketing" element={<Searchengine />} />
           <Route path="/video" element={<Videography />} /> 
            <Route path="/ri" element={<Recuritintern />} /> 

      </Routes>
    </div>
  );
};

export default App;
