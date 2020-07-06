import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from 'react-router-dom';
import ItemsContainer from '../components/ItemsContainer';

const Items = () => {
  return(
  <>
    <Hero hero="roomsHero">
      <Banner title="Our Items">
        <Link to='/' className='btn-primary'>
          Return Home
        </Link>
      </Banner>
    </Hero>
    <ItemsContainer />
  </>
  );
}

export default Items
