import React, { useState } from 'react';
import { Row, Col } from "reactstrap";
import ReCAPTCHA from "react-google-recaptcha";

import { API_BASE_URL, GOOGLE_RECAPETCHA_SITE_KEY } from "../../globalConstants.js";
import useInput from '../../hooks/useInput';

const ContactUsForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const contact_us = { name, email, orgnization, job_title, role, message, phone, 'g-recaptcha-response': gCaptcha }
    fetch(`${API_BASE_URL}contact_us.json`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({contact_us})
    })
    .then(res => {
      if ( res.ok ) return res.json();

      throw new Error(`${ res.status } - ${ res.statusText }`);
    })
    .then(() => {
      alert("Thanks for contacting us! We will get back to you soon!");
    })
    .catch(result => {
      console.log(result);
    });
  };

  const { value: name, onChange: onChangeName } = useInput("");
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: orgnization, onChange: onChangeOrganization } = useInput("");
  const { value: job_title, onChange: onChangeJobTitle } = useInput("");
  const { value: role, onChange: onChangeRole } = useInput("");
  const { value: message, onChange: onChangeMessage } = useInput("");
  const { value: phone, onChange: onChangePhone } = useInput("");
  const [gCaptcha, setGCaptcha] = useState(false);

  return (
    <form className="form-contact" onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <div className="form-group">
            <label htmlFor="input-fname">Name</label><span className="text-danger">*</span>
            <input id="input-fname" type="text" required={ true } className="form-control" onChange={onChangeName} />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Email</label><span className="text-danger">*</span>
            <input id="inputEmail" type="email" required={ true } className="form-control" onChange={onChangeEmail} />
          </div>
          <div className="form-group">
            <label htmlFor="inputnumber">Contact Number</label>
            <input id="inputnumber" type="text" className="form-control" onChange={onChangePhone} />
          </div>
          <div className="form-group">
            <label htmlFor="input-organization">Organization</label><span className="text-danger">*</span>
            <input id="input-organization" type="text" required={ true } className="form-control" onChange={onChangeOrganization} />
          </div>
          <div className="form-group">
            <label htmlFor="inputcompany">Job Title</label>
            <input id="inputcompany" type="text" className="form-control" onChange={onChangeJobTitle} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">You are:</label>
            <select id="exampleFormControlSelect1" aria-describedby="form-control" className="form-control" onChange={onChangeRole}>
              <option>- Please Select -</option>
              <option>Potential Customer</option>
              <option>Partner or Alliance</option>
              <option>Job Seeker</option>
            </select>
            <small id="form-control" className="form-text text-muted">(Potential Customer; Partner or Alliance; Job Seeker)</small>
          </div>
        </Col>
        <Col md={6}>
          <div className="form-group textarea-group">
            <label htmlFor="exampleFormControlTextarea1">How can we help you?</label>
            <textarea id="exampleFormControlTextarea1" rows="7" className="form-control" onChange={onChangeMessage}>

            </textarea>
          </div>
          <div className="captcha">
            <ReCAPTCHA
              sitekey={GOOGLE_RECAPETCHA_SITE_KEY}
              onChange={setGCaptcha}
            />
          </div>
          <div className="btn-wrap">
            <button type="submit" id="contact-us-btn" className="btn btn-gray">Submit</button>
          </div>
        </Col>
      </Row>
    </form>
  )
}

export default ContactUsForm;
