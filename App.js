import React, { useState } from 'react';
import './App.css';
import './index.css';
import FormImage from './hardware_pucture.jpg';



function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');
  const [request, setRequest] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (event) => { //The handleSubmit function is used to handle the form submission event.
    event.preventDefault();         //prevents the default form submission behavior      
    console.log({                  //This is useful for debugging and verifying that the form data is being captured correctly.
      fullName,
      email,
      contactNumber,
      businessLocation,
      request,
      agree
    });
  
    // Check if all fields are filled
    if (fullName && email && contactNumber && businessLocation && request && agree) {
                
      alert("Form submitted successfully!");
    }
  };
  
  const handleFullNameChange = (event) => { // the handleFullNameChange function is called with the event object passed as an argument.
    setFullName(event.target.value);        //
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactNumberChange = (event) => { //used to handle changes to the contactNumber state variable in a React functional component.
    setContactNumber(event.target.value);
  };

  const handleBusinessLocationChange = (event) => {
    setBusinessLocation(event.target.value);
  };

  const handleRequestChange = (event) => {
    setRequest(event.target.value); // refers to the current value of a form element
  };

  const handleAgreeChange = (event) => {
    setAgree(event.target.checked); //"target" refers to the DOM element that triggered the event (in this case, the checkbox element). The ".checked" property is a Boolean value that indicates whether the checkbox is currently checked or not.
  };

  return (
    <div>
      <br></br>
      <div class="heading">
      <div style={{ color: 'blue', fontSize: '64px', fontWeight: 'bold' }}>Request Demo</div>



      </div>
      <div class="paragraph">
    <p>After you submit the above details, you will be contacted to schedule and Send e mail to the company</p>
    </div>
    <div className="container">
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={handleFullNameChange} //When the user types something in the fullName input field, the onChange event is triggered,
          
            required
          />


        <label htmlFor="email">E-mail:</label>

      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        required
      />


        <label htmlFor="contactNumber">Contact Number:</label> {/*id attribute of the form control element that the label is associated with  */}
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          value={contactNumber}
          onChange={handleContactNumberChange}
          pattern="[0-9]{1,10}"
          required
        />


        <label htmlFor="businessLocation">Business Location:</label>
        <input
          type="text"
          id="businessLocation"
          name="businessLocation"
          value={businessLocation}
          onChange={handleBusinessLocationChange}
          maxLength="40"
          required
        />


        <label htmlFor="request">Request:</label>
        <textarea
          id="request"
          name="request"
          value={request}
          onChange={handleRequestChange}
          required
        ></textarea>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          id="agree"
          name="agree"
          checked={agree}
          onChange={handleAgreeChange}
          required
          style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '5px' }}
        />
        <label htmlFor="agree" style={{ display: 'inline-block', verticalAlign: 'middle' }}>Agree to terms and conditions</label>
      </div>

        
         <button type="submit">Submit</button>
        </form>

      <div className="image-container">
        <img src={FormImage} alt="form" />
      </div>
    </div>
    </div>
  );
}

export default App;
