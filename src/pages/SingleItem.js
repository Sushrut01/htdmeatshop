import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
//import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {ItemContext} from '../context';
import StyledHero from '../components/StyledHero';


export default class SingleItem extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      slug:this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = ItemContext;
  componentDidMount(){

  }
  render()
  {
    const {getItem} = this.context;
    const item = getItem(this.state.slug);
    if(!item){
      return(
        <div className="error">
          <h3>No such Item could be found...</h3>
          <Link to='/items' className="btn-primary">
            Back to items
          </Link>
        </div>
      );
    }
    const {name,
      description,
      capacity,
      size,
      price,
      extra,
      images} = item;
      const [mainImg,...defaultImg] = images;
    return (
    <>
      <StyledHero img={mainImg}>
        <Banner title={`${name} item`}>
          <Link to='/items' className='btn-primary'>
            Back to Items
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item,index)=>{
            return <img key={index} src={item} alt={name}/>
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Description</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>Price : Rs.{price}</h6>
            <h6>Size : {size}grams per piece</h6>

          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extra.map((item,index)=>{
            return <li key={index}>{item}</li>
          })}
        </ul>
      </section>
    </>
    );
  }
}
