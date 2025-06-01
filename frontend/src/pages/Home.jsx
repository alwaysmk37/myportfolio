import React from 'react';
import Header from '../components/Header.jsx'; // Added .jsx extension
import Footer from '../components/Footer.jsx'; // Added .jsx extension
import About from '../pages/About.jsx';     // Added .jsx extension
import Projects from '../pages/Projects.jsx';   // Added .jsx extension
import Contact from '../pages/Contact.jsx';   // Added .jsx extension
import background from '../assets/background.jpg'; // Already has .jpg extension

const Home = () => {
  return (
    // Main container for the entire page, setting background image and ensuring full height.
    // Added 'scroll-smooth' for better navigation experience when clicking internal links.
    <div
      className="relative min-h-screen bg-cover bg-center text-white scroll-smooth"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Dark overlay to make text more readable over the background image */}
      <div className="absolute inset-0 bg-opacity-70 z-0" />

      {/* Content wrapper to ensure all elements are above the overlay */}
      <div className="relative z-10">
        <Header />

        {/* Main hero section of the page */}
        <main className="min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-4 text-center">
          {/* Main heading with enhanced styling and responsiveness */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            Hi, I'm <span className="text-[#ff3383]">Mohit</span> 👋
          </h1>
          {/* Subtitle with improved readability */}
          <p className="text-lg md:text-2xl lg:text-3xl mb-8 font-medium">
            Cybersecurity Enthusiast • Developer • Tech Explorer
          </p>
          {/* Call to action button with rounded corners and subtle shadow */}
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            View My Work
          </a>
        </main>

        {/* Other sections of the portfolio */}
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
