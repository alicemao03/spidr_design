import './index.css';
import fryer from './air-fryer.jpg'

import Form from "./Form";

function App() {
  return (
    <div className='spidr-form'>
      <div class="air-fryer-image">
        <img src={fryer} className="air-fryer" alt="air-fryer" />
      </div>
      <div className="form-div">
        <div class="form-wrapper">
          <h1>Interest Form</h1>
          <hr></hr>
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default App;
