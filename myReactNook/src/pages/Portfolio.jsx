import { useState } from 'react';

function Portfolio() {
  // More sample projects with useState
  const [projects] = useState([
    {
      name: 'Mine Game',
      description: 'MERN Stack application for surfers to track weather and tides',
      link: 'https://github.com', // Replace with your actual deployed link
      repo: 'https://github.com', // Replace with your actual repo link
    },
    {
      name: 'Grub Social',
      description: 'MERN Stack application for collaborative puzzle-solving',
      link: 'https://github.com', // Replace with your actual deployed link
      repo: 'https://github.com', // Replace with your actual repo link
    },
    {
      name: 'Run Buddy',
      description: 'HTML/CSS landing page for fitness trainers',
      link: 'https://github.com', // Replace with your actual deployed link
      repo: 'https://github.com', // Replace with your actual repo link
    },
    {
      name: 'Calculator',
      description: 'React/JavaScript/CSS calculator with a modern UI',
      link: 'https://github.com', // Replace with your actual deployed link
      repo: 'https://github.com', // Replace with your actual repo link
    },
    {
      name: 'Weather Dashboard',
      description: 'JavaScript/CSS API-based weather application',
      link: 'https://github.com', // Replace with your actual deployed link
      repo: 'https://github.com', // Replace with your actual repo link
    },
  ]);

  return (
    <section id="portfolio" className="container mt-5">
      <h2 className="mb-3">Portfolio</h2>
      <div className="row">
        {projects.map((project, idx) => (
          <div key={`project-${idx}`} className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.repo} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
