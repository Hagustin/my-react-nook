function Resume() {
    return (
      <section id="resume" className="container mt-5">
        <h2 className="text-center">Resume</h2>
        <div className="d-flex justify-content-center my-4">
          <a href="/assets/resume.pdf" download className="btn btn-outline-primary btn-lg">
            Download My Resume
          </a>
        </div>
  
        <div className="my-5">
          <h3 className="text-center">Proficiencies</h3>
          <ul className="list-group">
            <li className="list-group-item">HTML & CSS</li>
            <li className="list-group-item">JavaScript (ES6+)</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">Express.js</li>
            <li className="list-group-item">MongoDB</li>
            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item">Tailwind CSS</li>
          </ul>
        </div>
  
        <div className="my-5">
          <h3 className="text-center">Experience</h3>
          <ul className="list-unstyled">
            <li className="mb-4">
              <h5>Front-End Developer at ABC Corp.</h5>
              <p><strong>July 2022 - Present</strong></p>
              <ul>
                <li>Developed interactive user interfaces with React and Redux.</li>
                <li>Implemented responsive designs using Bootstrap and Tailwind CSS.</li>
                <li>Collaborated with design and back-end teams to implement features.</li>
              </ul>
            </li>
  
            <li className="mb-4">
              <h5>Junior Web Developer at XYZ Ltd.</h5>
              <p><strong>June 2021 - June 2022</strong></p>
              <ul>
                <li>Worked on building and maintaining web applications using JavaScript and Node.js.</li>
                <li>Developed API endpoints in Express and integrated them with MongoDB.</li>
                <li>Optimized front-end performance and application load times.</li>
              </ul>
            </li>
          </ul>
        </div>
  
        <div className="my-5">
          <h3 className="text-center">Education</h3>
          <ul className="list-unstyled">
            <li className="mb-4">
              <h5>Bachelor of Science in Computer Science</h5>
              <p><strong>University of Tech</strong>, 2021</p>
              <p>Graduated with Honors</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
  
  export default Resume;
  