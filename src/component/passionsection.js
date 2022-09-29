import "../style/passionsection-style.css";

function PassionsSection() {
  return (
    <div className="passion-section">
      <div className="title">
        <h1 id="first-word">Additional</h1>
        <h1 id="second-word">Passions</h1>
      </div>
      <div className="passion-container">
        <div className="passion-card-fullstack">
          <div className="card-pic">
            <div className="pic-html">
              <img src="https://i.ibb.co/v3qf15N/hmtl.png" alt="html" />
            </div>
            <div className="pic-css">
              <img src="https://i.ibb.co/8jqk2r2/css.png" alt="css" />
            </div>
            <div className="pic-javascript">
              <img src="https://i.ibb.co/FmD19BS/js.png" alt="javascript" />
            </div>
            <div className="pic-redux">
              <img src="https://i.ibb.co/wwHPqg2/redux2.png" alt="redux" />
            </div>
            <div className="pic-postgresql">
              <img
                src="https://i.ibb.co/x1QrxW7/Postgresql.png"
                alt="postgresql"
              />
            </div>
          </div>
          <div className="passion-title">
            <h2 id="font-end">Full-Stack</h2>
            <h2 id="dev"> Developer</h2>
          </div>
          <p>(HTTML, CSS, JavaScript, Redux, PostgreSQL)</p>
        </div>
        <div className="passion-card">
          <div className="card-pic">
            <div className="pic-react">
              <img src="https://i.ibb.co/5xcMSp3/react.webp" alt="react" />
            </div>
            <div className="pic-tailwind">
              <img
                src="https://i.ibb.co/fvsGxhG/Tailwind-CSS-Logo.png"
                alt="tailwind CSS"
              />
            </div>
          </div>
          <div className="passion-title">
            <h2 id="font-end">Front-End</h2>
            <h2 id="dev"> Developer</h2>
          </div>
          <p>(React, Tailwind)</p>
        </div>
        <div className="passion-card">
          <div className="card-pic">
            <div className="pic-nodejs">
              <img src="https://i.ibb.co/7Sb0QX0/NodeJS.png" alt="nodejs" />
            </div>
            <div className="pic-mongodb">
              <img src="https://i.ibb.co/d5JKMLz/mongodb.png" alt="mongodb" />
            </div>
          </div>
          <div className="passion-title">
            <h2 id="font-end">Back-End</h2>
            <h2 id="dev"> Developer</h2>
          </div>
          <p>(NodeJS, mongoDB)</p>
        </div>

        {/* <div className="passsion-card"></div> */}
      </div>
    </div>
  );
}

export default PassionsSection;
