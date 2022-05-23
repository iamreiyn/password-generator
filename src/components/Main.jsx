import { useState } from "react";
import FlipCard from "./FlipCard";

function Main() {
  const [uppercase, setUpStatus] = useState(true);
  const [lowercase, setLowStatus] = useState(true);
  const [symbols, setSymStatus] = useState(true);
  const [numbers, setNumStatus] = useState(true);
  let passwordLength = -1;
  const [changeCards, sChangeCards] = useState(true);
  const [sensitivity, setSens] = useState("Empty");
  const [pass, setPass] = useState(
    "Your generated password will be displayed here"
  );

  function uppercaseSel() {
    if (uppercase) {
      setUpStatus(false);
    } else if (!uppercase) {
      setUpStatus(true);
    }
  }

  function lowercaseSel() {
    if (lowercase) {
      setLowStatus(false);
    } else {
      setLowStatus(true);
    }
  }

  function numbercaseSel() {
    if (numbers) {
      setNumStatus(false);
    } else {
      setNumStatus(true);
    }
  }

  function symbolcaseSel() {
    if (symbols) {
      setSymStatus(false);
    } else {
      setSymStatus(true);
    }
  }

  function onChangeLength() {
    passwordLength = document.getElementById("inputlength").value;
    if (passwordLength < 4) {
      setSens("Empty");
      document.getElementById("passGenbtn").className =
        "btn btn-primary my-3 mx-1 disabled";
      document.getElementById("copytoClipbtn").className =
        "btn btn-primary my-3 mx-1 disabled";
      document.getElementById("basic-addon2").className =
        "input-group-text text-muted";
      document.getElementById("genPass").style.borderColor = "grey";
    } else if (passwordLength > 3 && passwordLength <= 9) {
      setSens("Weak");
      document.getElementById("passGenbtn").className =
        "btn btn-primary my-3 mx-1";
      document.getElementById("copytoClipbtn").className =
        "btn btn-primary my-3 mx-1";
      document.getElementById("basic-addon2").className =
        "input-group-text text-danger";
      document.getElementById("genPass").style.borderColor = "red";
    } else if (passwordLength >= 10 && passwordLength <= 19) {
      setSens("Medium");
      document.getElementById("passGenbtn").className =
        "btn btn-primary my-3 mx-1";
      document.getElementById("copytoClipbtn").className =
        "btn btn-primary my-3 mx-1";
      document.getElementById("basic-addon2").className =
        "input-group-text text-warning";
      document.getElementById("genPass").style.borderColor = "orange";
    } else if (passwordLength > 19 && passwordLength <= 30) {
      setSens("Strong");
      document.getElementById("passGenbtn").className =
        "btn btn-primary my-3 mx-1";
      document.getElementById("copytoClipbtn").className =
        "btn btn-primary my-3 mx-1";
      document.getElementById("basic-addon2").className =
        "input-group-text text-success";
      document.getElementById("genPass").style.borderColor = "green";
    } else if (passwordLength > 30 && passwordLength <= 60) {
      setSens("Overpowered");
      document.getElementById("passGenbtn").className =
        "btn btn-primary my-3 mx-1";
      document.getElementById("copytoClipbtn").className =
        "btn btn-primary my-3 mx-1";
      document.getElementById("basic-addon2").className = "input-group-text";
      document.getElementById("basic-addon2").style.color = "purple";
      document.getElementById("genPass").style.borderColor = "purple";
    } else if (passwordLength > 60) {
      setSens("Overpowered");
      document.getElementById("passGenbtn").className =
        "btn btn-primary my-3 mx-1";
      document.getElementById("copytoClipbtn").className =
        "btn btn-primary my-3 mx-1";
      document.getElementById("basic-addon2").className = "input-group-text";
      document.getElementById("basic-addon2").style.color = "purple";
      document.getElementById("genPass").style.borderColor = "purple";
      passwordLength = 60;
      document.getElementById("inputlength").value = "60";
    }
  }

  const copyToClip = () => {
    navigator.clipboard.writeText(pass);
    alert("Copied to Clipboard");
  };

  const resetSettings = () => {
    setLowStatus(false)
    setUpStatus(false)
    setSymStatus(false)
    setNumStatus(false)
    document.getElementById('inputlength').value = ""
  }

  const switchCards = () => {
    if (changeCards) {
      document.getElementById('flipcard').style.display = 'block';
      document.getElementById('maincard').style.display = 'none'
      document.getElementById('infoc').className = 'fa fa-home'
      sChangeCards(false)
    } else {
    document.getElementById('flipcard').style.display = 'none';
    document.getElementById('maincard').style.display = 'block'
    document.getElementById('infoc').className = 'fa fa-info-circle'
    sChangeCards(true)
  }
  }

  const generatePassword = () => {
    if (!uppercase && !lowercase && !numbers && !symbols) {
      alert("Please select at least one character type");
    }

    passwordLength = document.getElementById("inputlength").value;

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijqlmnopqrstuvwxyz";
    const number = "123456789";
    const symbol = "!@#$%^&*()+";

    let userSelection = "";
    let generatedPassword = "";

    if (uppercase) {
      userSelection += upper;
    }
    if (lowercase) {
      userSelection += lower;
    }
    if (numbers) {
      userSelection += number;
    }
    if (symbols) {
      userSelection += symbol;
    }

    for (let i = 0; i < passwordLength; i++) {
      generatedPassword += userSelection.charAt(
        Math.floor(Math.random() * userSelection.length)
      );
    }

    setPass(generatedPassword);
  };

  return (
    <>
    <div className="form-check form-switch" style={{marginLeft: "92%", marginTop: "10px"}}>
    <i
      className="fa fa-info-circle"
      id='infoc'
      onClick={switchCards}
      style={{cursor: "pointer", fontSize: "30px", color: "#d3d3d3", backgroundColor: "#172645", borderRadius: "50%", padding: "5px" }}
    ></i>
</div>
    <div id="maincard" className="card center" style={{height: "400px", width: "500px", color: "#172645", backgroundColor: "lightblue", borderRadius: "8%"}}>
    <div className="card-header">
      <strong>🔒 Password Generator</strong> <label style={{marginLeft: "165px"}}>by <strong><a target="_blank" rel="noreferrer" href="https://github.com/renisal" style={{color: "#172645", textDecoration: "none"}}>renisal</a></strong></label>
    </div>
    <div className="card-body">
    <div className="container">
      <div className="input-group mb-3" style={{ width: "420px" }}>
        <input
        style={{backgroundColor: "#d3d3d3"}}
          id="inputlength"
          type="number"
          onChange={onChangeLength}
          className="form-control"
          placeholder="Password Length"
          aria-label="Password Length"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <span className="input-group-text text-muted" id="basic-addon2">
            <strong>{sensitivity}</strong>
          </span>
        </div>
      </div>
      <div className="form-check">
        <input
          onClick={symbolcaseSel}
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked1"
          checked={symbols ? true : false}
        ></input>
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Include Symbols (e.g. !@&$%)
        </label>
      </div>
      <div className="form-check">
        <input
          onClick={numbercaseSel}
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked2"
          checked={numbers ? true : false}
        ></input>
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Include Numbers (e.g. 123456)
        </label>
      </div>
      <div className="form-check">
        <input
          onClick={lowercaseSel}
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked3"
          checked={lowercase ? true : false}
        ></input>
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Include Lowercase Letters (e.g. abcdefg)
        </label>
      </div>
      <div className="form-check">
        <input
          onClick={uppercaseSel}
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked4"
          checked={uppercase ? true : false}
        ></input>
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Include Uppercase Letters (e.g. ABCDEFG)
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck5"
        />
        <label className="form-check-label" htmlFor="defaultCheck5">
          Automatic Selection
        </label>
      </div>
      <button
        id="passGenbtn"
        onClick={generatePassword}
        type="button"
        className="btn btn-primary my-3 mx-1 disabled greyText"
        style={{backgroundColor: "#172645" }}
      >
        <i className="fa fa-key" style={{ fontSize: "20px"}}></i> Generate
      </button>
      <button
        id="copytoClipbtn"
        onClick={copyToClip}
        type="button"
        className="btn btn-primary my-3 mx-1 disabled greyText"
        style={{backgroundColor: "#172645"}}
      >
        <i className="fa fa-copy" style={{ fontSize: "20px" }}></i> Copy
      </button>
      <button onClick={resetSettings} type="button" className="btn btn-danger my-3 mx-1">
      <i className="fa fa-eraser" style={{ fontSize: "20px" }}></i> Reset
      </button>

      <div className="input-group" >
        <span className="input-group-text" id="genPass"style={{backgroundColor: "#e0dede"}}>
          <strong style={{fontSize: "15px", color: "#172645"}}>{pass}</strong>
        </span>
      </div>
      </div>
    </div>
  </div>
  <FlipCard/>
    </>
  );
}

export default Main;
