import React from 'react';
import HenryImage from '../assets/Henry.jpg';

const AboutMe = () => {
  return (
    <section id="about-me" className="container mt-5">
      <h2 className="mb-3">About Me</h2>
      <div className="d-flex align-items-center">
        <img
          src={HenryImage}
          alt="Henry Narciso Agustin"
          className="img-thumbnail me-4"
          style={{ width: '150px', height: '150px', borderRadius: '50%' }}
        />
        <p>
          Hi! I'm Henry!, a passionate developer with a focus on building modern, scalable web applications using React and other cutting-edge technologies. My journey in coding started with a love for tackling tricky problems and continuous learning.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;