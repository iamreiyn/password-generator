import { useState } from "react";

function Structure() {
  let uppercase = true;
  let lowercase = true;
  let symbols = true;
  let numbers = true;
  let passwordLength = -1;
  const [sensitivity, setSens] = useState("Empty");
  const [pass, setPass] = useState("Your generated password will be displayed here");

  function uppercaseSel() {
    if (uppercase) {
      uppercase = false;
    } else if (!uppercase) {
      uppercase = true;
    }
  }

  function lowercaseSel() {
    if (lowercase) {
      lowercase = false;
    } else {
      lowercase = true;
    }
  }

  function numbercaseSel() {
    if (numbers) {
      numbers = false;
    } else {
      numbers = true;
    }
  }

  function symbolcaseSel() {
    if (symbols) {
      symbols = false;
    } else {
      symbols = true;
    }
  }
  
  function onChangeLength() {
    passwordLength = document.getElementById("inputlength").value;
    if (passwordLength < 4) {
        setSens("Empty")
        document.getElementById('passGenbtn').className = "btn btn-primary my-3 mx-1 disabled"
        document.getElementById('copytoClipbtn').className = "btn btn-primary my-3 mx-1 disabled"
        document.getElementById('basic-addon2').className = "input-group-text text-muted"
        document.getElementById('genPass').style.borderColor = 'grey'
    } else if (passwordLength > 3 && passwordLength <= 9) {
        setSens("Weak")
        document.getElementById('passGenbtn').className = "btn btn-primary my-3 mx-1"
        document.getElementById('copytoClipbtn').className = "btn btn-primary my-3 mx-1"
        document.getElementById('basic-addon2').className = "input-group-text text-danger"
        document.getElementById('genPass').style.borderColor = 'red'
    } else if (passwordLength >= 10 && passwordLength <= 19) {
        setSens("Medium")
        document.getElementById('passGenbtn').className = "btn btn-primary my-3 mx-1"
        document.getElementById('copytoClipbtn').className = "btn btn-primary my-3 mx-1"
        document.getElementById('basic-addon2').className = "input-group-text text-warning"
        document.getElementById('genPass').style.borderColor = 'orange'
    } else if (passwordLength > 19 && passwordLength <= 30) {
        setSens("Strong")
        document.getElementById('passGenbtn').className = "btn btn-primary my-3 mx-1"
        document.getElementById('copytoClipbtn').className = "btn btn-primary my-3 mx-1"
        document.getElementById('basic-addon2').className = "input-group-text text-success"
        document.getElementById('genPass').style.borderColor = 'green'
    } else if (passwordLength > 30) {
        setSens("Overpowered")
        document.getElementById('passGenbtn').className = "btn btn-primary my-3 mx-1"
        document.getElementById('copytoClipbtn').className = "btn btn-primary my-3 mx-1"
        document.getElementById('basic-addon2').className = "input-group-text"
        document.getElementById("basic-addon2").style.color = "purple"
        document.getElementById('genPass').style.borderColor = 'purple'
    }
  }

  const copyToClip = () => {
    navigator.clipboard.writeText(pass);
    alert("Copied to Clipboard");
  };

  const generatePassword = () => {
    if (!uppercase && !lowercase && !numbers && !symbols) {
      alert("Please select at least one character type");
    }

    passwordLength = document.getElementById('inputlength').value

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
    <div className="container my-5">
      <h1>🔒 Random Password Generator</h1>
      <hr></hr>
      <div className="input-group mb-3" style={{width: "500px"}}>
        <input
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
          id="flexCheckChecked"
          checked="false"
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
          id="flexCheckChecked"
          checked="false"
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
          id="flexCheckChecked"
          checked="false"
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
          id="flexCheckChecked"
          checked="false"
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
        className="btn btn-primary my-3 mx-1 disabled"
      >
        <label className="material-icons">done</label>Generate Password
      </button>
      <button
        id="copytoClipbtn"
        onClick={copyToClip}
        type="button"
        className="btn btn-primary my-3 mx-1 disabled"
      >
        <span className="material-icons">content_copy</span> Copy to Clipboard
      </button>
      <button type="button" className="btn btn-danger my-3 mx-1">
        <span className="material-icons">restart_alt</span> Reset
      </button>

      <div className="input-group">
      <span className="input-group-text" id="genPass"><strong>{pass}</strong></span>
      </div>
    </div>
  );
}

export default Structure;
