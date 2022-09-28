import "../style/headersection-style.css";

function HeaderSection() {
  return (
    <div className="header-section">
      <div className="introduces">
        <h3>Hi !</h3>
        <h1>I’m Thanakorn Boonlar. a Full-Stack Developer</h1>
        <p>
          Full-Stack developer based in Bangkok, Thailand I’am coding with a
          clean and beautiful problem solving in mind.
        </p>
      </div>
      <div className="picture">
        <img src="https://i.ibb.co/K6Bccg5/bestball.png" alt="bestball" />
      </div>
    </div>
  );
}

export default HeaderSection;
