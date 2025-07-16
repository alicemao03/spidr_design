import './index.css';
import './Form.css'
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
          <p class='form-title'>Interest Form</p>
          <hr></hr>
          <p class="subtext">Fields marked with <span class="star">*</span> are mandatory</p>
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default App;
