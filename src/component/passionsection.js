import "../style/passionsection-style.css";

function PassionsSection() {
  return (
    <div className="passion-section">
      <div className="title">
        <h1 id="first-word">Additional</h1>
        <h1 id="second-word">Passions</h1>
      </div>
      <div className="passion-container">
        <div className="passion-box"></div>
        <div className="passion-box"></div>
        <div className="passion-box"></div>
      </div>
    </div>
  );
}

export default PassionsSection;
