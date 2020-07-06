import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedItems from '../components/FeaturedItems';

const Home = () => {
  return(
    <>
    <Hero>
      <Banner title="Fresh Meats" subtitle="fresh chickens at Rs.350">
        <Link to='/items' className='btn-primary'>
          Our Items
        </Link>
      </Banner>
    </Hero>
    <Services />
    <FeaturedItems />
    </>
  );
}

export default Home
