import { useState } from "react"

function Structure() {

    let uppercase = true
    let lowercase = true
    let symbols = true
    let numbers = true
    let passwordLength = 12
    const [sensitivity, setSens] = useState("Weak")
    const [pass, setPass] = useState("Your Generated Password")


    function setLength() {
        passwordLength = document.getElementById('inputlength').value
        if (passwordLength > 10 && passwordLength < 20) {
            setSens("Medium")
        } else if (passwordLength > 20) {
            setSens("Strong")
        }
    }

    function uppercaseSel() {
        if (uppercase) {
            uppercase = false
        }
        else if (!uppercase) {
            uppercase = true
        }
    }

    function lowercaseSel() {
        if (lowercase) {
            lowercase = false
        }
        else {
            lowercase = true
        }
    }

    function numbercaseSel() {
        if (numbers) {
            numbers = false
        }
        else {
            numbers = true
        }
    }

    function symbolcaseSel() {
        if (symbols) {
            symbols = false
        }
        else {
            symbols = true
        }
    }

    const copyToClip = () => {
        navigator.clipboard.writeText(pass)
        alert("Copied to Clipboard")
    }

    const generatePassword = () => {
        if (!uppercase && !lowercase && !numbers && !symbols) {
          alert("Please select at least one character type");
        }

        passwordLength = document.getElementById('inputlength').value
        if (passwordLength > 10 && passwordLength < 20) {
            setSens("Medium")
        } else if (passwordLength > 20) {
            setSens("Strong")
        }
    
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
    
        setPass(generatedPassword)
      };
  return (
    <div className="container my-5">
        <h1>Random Password Generator</h1><hr></hr>
        <div className="input-group mb-3">
  <input id="inputlength" onClick={setLength} type="text" className="form-control" placeholder="Password Length" aria-label="Password Length" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <span className="input-group-text" id="basic-addon2">{sensitivity}</span>
  </div>
</div>
<div className="form-check">
  <input onClick={symbolcaseSel} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="false"></input>
  <label className="form-check-label" htmlFor="flexCheckChecked">
    Include Symbols
  </label>
</div>
<div className="form-check">
  <input onClick={numbercaseSel} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="false"></input>
  <label className="form-check-label" htmlFor="flexCheckChecked">
    Include Numbers
  </label>
</div>
<div className="form-check">
  <input onClick={lowercaseSel} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="false"></input>
  <label className="form-check-label" htmlFor="flexCheckChecked">
    Include Lowercase Letters
  </label>
</div>
<div className="form-check">
  <input onClick={uppercaseSel} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="false"></input>
  <label className="form-check-label" htmlFor="flexCheckChecked">
    Include Uppercase Letters
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="defaultCheck5"/>
  <label className="form-check-label" htmlFor="defaultCheck5">
    Automatic Selection
  </label>
</div>
<button onClick={generatePassword} type="button" className="btn btn-primary my-3 mx-1"><label className="material-icons">
done
</label>Generate Password</button>
<button onClick={copyToClip} type="button" className="btn btn-primary my-3 mx-1"><span className="material-icons">
content_copy
</span> Copy to Clipboard</button>
<button type="button" className="btn btn-primary my-3 mx-1"><span className="material-icons">
restart_alt
</span> Reset</button>

<div className="input-group">
  <span className="input-group-text">{pass}</span>
</div>
    </div>
  );
}

export default Structure;
