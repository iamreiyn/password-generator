export default function FlipCard() {
    return (
        <>
        <div id="flipcard" className="card center" style={{display: "none", height: "400px", width: "500px", color: "#172645", backgroundColor: "lightblue", borderRadius: "8%"}}>
    <div className="card-header">
      <strong>🔒 Password Generator</strong> <label style={{marginLeft: "165px"}}>by <strong><a target="_blank" rel="noreferrer" href="https://github.com/renisal" style={{color: "#172645", textDecoration: "none"}}>renisal</a></strong></label>
    </div>
    <div className="card-body">
    <div className="container">
      <div className="input-group mb-3" style={{ width: "420px" }}>
      </div>
      <ul className="mx-3">
          <li><a
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                  href="https://github.com/renisal/password-generator/fork"
                > Fork Project</a></li>
          <li><a
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                  href="https://github.com/renisal/password-generator/issues/new/choose"
                >Suggestion</a></li>
          <li><a
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                  href="https://github.com/renisal/password-generator/issues/new/choose"
                >Bug Report</a></li>
          <li><a
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                  href="https://github.com/renisal/password-generator"
                >Source code</a></li>
          <li><a
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                  href="https://haveibeenpwned.com"
                >Am I vulnerable?</a></li>
      </ul>
      </div>
    </div>
  </div>
        </>
    );
}