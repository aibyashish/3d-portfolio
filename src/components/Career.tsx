import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Current Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Science</h4>
                <h5>uttarakhand government institute of polytechnic aamwala</h5>
              </div>
              <h3>NOW</h3>
            </div>

            <p>
              Currently pursuing a Diploma in Computer Science, with a strong
              interest in artificial intelligence, software development,
              automation, and emerging technologies.
            </p>
          </div>

          {/* Freelance */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance AI & Video Work</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2025–NOW</h3>
            </div>

            <p>
              Working on AI-assisted video production, content workflows,
              thumbnails, prompt engineering, and creative automation for
              independent clients and digital projects.
            </p>
          </div>

          {/* AI / Projects */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Technology Projects</h4>
                <h5>Personal Projects</h5>
              </div>
              <h3>2024–NOW</h3>
            </div>

            <p>
              Exploring artificial intelligence and how modern AI systems work,
              while building projects and experimenting with AI tools,
              automation, web technologies, and creative workflows.
            </p>
          </div>

          {/* Education Foundation */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Education</h4>
                <h5>Class 10</h5>
              </div>
              <h3>2025</h3>
            </div>

            <p>
              Completed secondary education and continued towards a technical
              education in Computer Science and technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;