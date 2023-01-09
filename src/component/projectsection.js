import "../style/projectsection-style.css";

function ProjectSection() {
  return (
    <div className="passion-section">
      <div className="title">
        {/* <h1 id="first-word">Additional</h1> */}
        <h1 id="second-word">Projects</h1>
      </div>
      <div className="passion-container">
        <a
          href="https://get-that-job.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="passion-card">
            <div className="card-pic">
              <div className="pic-getthatjob">
                <img
                  src="https://i.ibb.co/ccH8fM4/getthatjob.png"
                  alt="html"
                  width={"100%"}
                />
              </div>
            </div>
            <div className="passion-title">
              <h2 id="font-end">Get That Job</h2>
              <h2 id="dev"> (PERN Stack)</h2>
            </div>
            <p>(PostgreSQL,Express,React,Node.js,Mui)</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProjectSection;
