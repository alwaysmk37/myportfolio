import React from 'react';

const About = () => {
  return (
    // Changed background to light gray (bg-gray-100) and text to dark blue (text-blue-700)
    // to contrast with a red page background.
    <section id="about" className="py-20 px-6 bg-gray-100 text-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">About Me</h2>
        <p className="text-lg leading-relaxed text-blue-700">
          I'm Mohit, a passionate cybersecurity enthusiast and software developer.
          I love building tools that secure, automate, and enhance user experience.
          With a background in <strong>cybersecurity</strong>, <strong>web development</strong>,
          and <strong>data analysis</strong>, I strive to create meaningful digital solutions.
        </p>
      </div>
    </section>
  )
}

export default About;
