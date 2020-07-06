import React, { Component } from 'react';
import Title from './Title';
import {FaBiking,FaEnvelope,FaDrumstickBite,FaRegMoneyBillAlt} from 'react-icons/fa';

export default class Services extends Component
{
  state={
    services:[
      {
        icon:<FaBiking />,
        title:'free delivery',
        info:'Order from your home and get fresh meat delivered faster with zero delivery charge.'
      },
      {
        icon:<FaEnvelope />,
        title:'pre order',
        info:'Contact Us to order and take fresh meat whenever you want.'
      },
      {
        icon:<FaDrumstickBite />,
        title:'meat of your choice',
        info:'Separate parts for both chicken and mutton are sold.'
      },
      {
        icon:<FaRegMoneyBillAlt />,
        title:'pay later',
        info:'Order now and pay the amount at the time of delivery.'
      },
    ]
  }
  render()
  {
    return(
      <section className="services">
        <Title title='services' />
        <div className="services-center">
          {this.state.services.map((item,index)=>{
            return <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          })}
        </div>
      </section>
    );
  }
}
