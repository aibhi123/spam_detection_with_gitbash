import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Css/radio.css'
import './Css/Style.css'
import './Css/bootstrap.min.css'
// External JS scripts are generally not needed in React.
// Avoid including JQuery.js and Bootstrap.js. Use React-specific libraries instead.

function Home() {
  const [count, setCount] = useState(0)
  const [textInput, setTextInput] = useState('')  // For textarea input
  const [selectedAlgo, setSelectedAlgo] = useState(null) // For radio input

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the logic here for what should happen when the form is submitted.
    console.log('Submitted Text:', textInput);
    console.log('Selected Algorithm:', selectedAlgo);
    // Add logic for handling the spam detection based on selected algorithm and text input.
  }

  return (
    <>
      <div>
        <section>
          <header>
            <nav>
              <div><a href="#" className="brand">SPD</a></div>
              <ul>
                <li><a href="#" className="active">Web App</a></li>
                <li><a href="#">Web Api</a></li>
              </ul>
            </nav>
          </header>
          <div className="fluid-container content">
            <div className="row m-auto">
              <div className="col-md-6 p-5 m-auto typo-content">
                <h1>
                  Welcome to SPD
                </h1>
                <h5>[Spam message detection]</h5>
                <p>
                  This is an online platform where
                  you can check any text to see whether
                  it is a Spam Message or not.
                </p>
                <p>
                  Just enter your text into the
                  Textarea, select an algorithm,
                  press the CHECK button, and wait
                  while your data is processed.
                </p>
                <p>
                  After processing, you will see the result.
                </p>
              </div>
              <div className="col-md-6 p-5 m-auto form-content">
                <form onSubmit={handleSubmit} className="main-form">
                  <textarea
                    name="rawdata"
                    placeholder="Enter Your Text Here..."
                    id="rawdata"
                    value={textInput} // Controlled component
                    onChange={(e) => setTextInput(e.target.value)}
                  /><br />
                  <div className="algo-choice">
                    <label className="radiocontainer">Algo - 1
                      <input
                        type="radio"
                        name="algo"
                        value="algo1"
                        checked={selectedAlgo === 'algo1'}
                        onChange={(e) => setSelectedAlgo(e.target.value)}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="radiocontainer">Algo - 2
                      <input
                        type="radio"
                        name="algo"
                        value="algo2"
                        checked={selectedAlgo === 'algo2'}
                        onChange={(e) => setSelectedAlgo(e.target.value)}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="radiocontainer">Algo - 3
                      <input
                        type="radio"
                        name="algo"
                        value="algo3"
                        checked={selectedAlgo === 'algo3'}
                        onChange={(e) => setSelectedAlgo(e.target.value)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="check-holder">
                    <button type="submit" className="check-btn">Check</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer">
              <p>Copyright &copy; 2020 Developed by <b>TechWithVP</b></p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
