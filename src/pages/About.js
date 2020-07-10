import React,{ Component } from 'react';
import Title from '../components/Title';
import {FaFacebook,FaFacebookMessenger,FaGooglePlus,FaInstagram,FaTwitter} from 'react-icons/fa';
import { Card,Button,Container } from 'react-bootstrap';
import img from '../images/mustafa-ansari.jpg';
import '../style.css';
import {Link} from 'react-router-dom';



export default function About(){

  /*const cardData = [
    {
      image: img,
      title: "XYZ Ansari",
      text : "Founder and CEO"
    },
    {
      image: img,
      title: "Mustafa Ansari",
      text : "Executive Manager"
    }
  ];

  const rendercard = (card,index) =>{
    return(
      <Card style={{ width: '18rem' }} key={index} classNameName="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} classNameName="imgr" />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return(
  <div>
   <Title title='About us' />
    <div classNameName="grid">
      {cardData.map(rendercard)}
    </div>
  </div>
  );
};*/

return(
<div>
<section>
    <div className="container-fluid py-2">
      <Title title='about us' />
      <p className="lead">
       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Hetauda Meat Shop believes in providing fresh and healthy meat. It delivers all
       the varieties of both Chicken and Mutton items. The shop is located in
       
       Hetauda,
       Nepal. We ensure proper hygiene while cutting and delivering meat. Both takeaway
       and home delivery facility is provided here.
            </p>
      <hr className="w-25 mx-auto pt-5" />
      <div className="column">
        <div className="card h-100">
          <img src={img} width="40px" height="40px" className="imgr"></img>
          <div className="container">
            <h2>CDE XYZ</h2>
            <hr w-25 mx-auto pt-1 />
            <p className="title" >Founder and CEO</p>
            <p>+91XXXXXXXXXX</p>
            <hr w-100 mx-auto pt-1 />
            <div className="contact">
              <Link to="/" className="contact"><FaFacebook /></Link>
              <Link to="/" className="contact"><FaFacebookMessenger /></Link>
              <Link to="/" className="contact"><FaGooglePlus /></Link>
              <Link to="/" className="contact"><FaInstagram /></Link>
              <Link to="/" className="contact"><FaTwitter /></Link>
            </div>
          </div>
      </div>
      </div>

      <div className="column">
        <div className="card h-100">
          <img src={img} width="40px" height="40px" className="imgr"></img>
          <div className="container">
            <h2>ABC XYZ</h2>
            <hr w-25 mx-auto pt-1 />
            <p className="title" >Sales Head and Executive Manager</p>
            <p>+91XXXXXXXXXX</p>
            <hr w-25 mx-auto pt-1 />
            <div className="contact">
            <Link to="/" className="contact"><FaFacebook /></Link>
            <Link to="/" className="contact"><FaFacebookMessenger /></Link>
            <Link to="/" className="contact"><FaGooglePlus /></Link>
            <Link to="/" className="contact"><FaInstagram /></Link>
            <Link to="/" className="contact"><FaTwitter /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
</div>
);
}

