import React from 'react';
import { useState } from 'react';
import Project from '../components/project';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'grubSocial',
      description: 'Social media for food lovers',
      link: 'https://github.com/yourusername/surfReport',
      repo: 'https://github.com/yourusername/surfReport',
    },
    {
      name: 'findYourHatGame',
      description: 'An interactive terminal game.',
      link: 'https://github.com/yourusername/pastelPuzzels',
      repo: 'https://github.com/yourusername/pastelPuzzels',
    },
    {
      name: 'Workforce-Organizer',
      description: 'Manage a company’s employee database',
      link: 'https://github.com/yourusername/runBuddy',
      repo: 'https://github.com/yourusername/runBuddy',
    },
    {
      name: 'Forecastify',
      description: 'A responsive web application built with TypeScript and Vite that displays real-time weather information using the OpenWeather API.',
      link: 'https://github.com/yourusername/ledWall',
      repo: 'https://github.com/yourusername/ledWall',
    },
    {
      name: 'Vehicle-Manager',
      description: 'Vehicle Manager is a command-line application that allows users to create and manage various types of vehicles, including cars, trucks, and motorbikes',
      link: 'https://github.com/yourusername/calculator',
      repo: 'https://github.com/yourusername/calculator',
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
