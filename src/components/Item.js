import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Item({item})
{
  const {name,slug,images,price} = item;
  return(
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="Chicken Wings" />
        <div className="price-top">
          <h6>Rs.{price}</h6>
          <p>per kg</p>
        </div>
        <Link to={`/singleItem/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Item.propTypes = {
  item:PropTypes.shape({
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    price:PropTypes.number.isRequired,
  })
}
