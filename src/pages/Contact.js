import React from 'react';
import {FaFacebook,FaFacebookMessenger,FaGooglePlus,FaInstagram,FaTwitter} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import '../hmt.css';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return(
    <div>
    <section className="bg">
      <div className="container-fluid">
          <div className="row">
              <div className="col-xl-8 offset-xl-2 py-4">
                  <h1><pre>MESSAGE US</pre></h1>
                  <p>Please share your valuable message to us through this form.</p>

                  <form id="contact-form" method="post">
                    <div className="messages"></div>
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                <div className="form-group">
                    <label for="form_name">Firstname *</label>
                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label for="form_lastname">Lastname *</label>
                    <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                    <div className="help-block with-errors"></div>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <label for="form_email">Email *</label>
                    <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label for="form_need">Please specify your need *</label>
                    <select id="form_need" name="need" className="form-control" required="required" data-error="Please specify your need.">
                        <option value=""></option>
                        <option value="Request quotation">Request quotation</option>
                        <option value="Request copy of an invoice">Request copy of an invoice</option>
                        <option value="Other">Other</option>
                    </select>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <label for="form_message">Message *</label>
                    <textarea id="form_message" name="message" className="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-md-12">
                <input type="submit" className="btn btn-success btn-send" value="Send message" />
            </div>
          </div>
              <div className="row">
                  <div className="col-md-12">
                      <p className="text-muted">
                        <strong>*</strong> These fields are required.</p>
                  </div>
              </div>
            </div>
          </form>
            </div>
          </div>
            <h4 className="text-center text-capitalize">OR</h4>
            <h5 className="text-center text-capitalize pt-2"><u>Connect Us via:</u></h5>
            <div className="contact">
            <Link to="/" className="contact"><FaFacebook /></Link>
            <Link to="/" className="contact"><FaFacebookMessenger /></Link>
            <Link to="/" className="contact"><FaGooglePlus /></Link>
            <Link to="/" className="contact"><FaInstagram /></Link>
            <Link to="/" className="contact"><FaTwitter /></Link>
            </div>
      </div>
      </section>
    </div>
  )
}

export default Contact;
