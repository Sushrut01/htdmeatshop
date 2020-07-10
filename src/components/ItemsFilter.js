import React from 'react';
import { useContext } from 'react';
import { ItemContext } from '../context';
import Title from '../components/Title';

//get all unique values

const getUnique = (items,value) => {
  return [...new Set(items.map(item => item[value]))];
}

export default function ItemsFilter({item}){
  const context = useContext(ItemContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize
  } = context;

  //get unique types
  let types = getUnique(item,'type');
  //add all
  types = ['all',...types];
  //map to jsx
  types = types.map((item,index) => {
    return (<option value={item} key={index}>{item}</option>);
  });

  let quantity = getUnique(item,'capacity');
  quantity = quantity.map((items,index)=>{
    return(
      <option key={index} value={items}>{items}</option>
    );
  });

  return(
    <section className="filter-container">
        <Title title="Search Items" />
        <form className="filter-form">
          {/*select type*/}
            <div className="form-group">
              <label htmlFor="type">Item Type</label>
              <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>{types}</select>
            </div>
          {/*end select type*/}
          {/*Quantity*/}
            <div className="form-group">
              <label htmlfor="capacity">Quantity</label>
              <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>{quantity}</select>
            </div>
          {/*end Quantity*/}
          {/*item price*/}
            <div className="form-group">
              <label htmlFor="price">Room Price Rs.{price}</label>
              <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
            </div>
          {/*end item price*/}
          {/*size*/}
            <div className="form-group">
              <label htmlFor="size">Quantity size</label>
              <div className="size-inputs">
                <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-inputs" />
                <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-inputs" />
              </div>
            </div>
          {/*end size*/}
        </form>
    </section>
  );
}
