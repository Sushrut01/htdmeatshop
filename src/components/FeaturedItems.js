import React , { Component } from 'react';
import {ItemContext} from '../context';
import Loading from './Loading';
import Item from './Item';
import Title from './Title';

export default class FeaturedItems extends Component
{
  static contextType = ItemContext;
  render()
  {
    let {loading, featuredItems : item} = this.context;
    item = item.map(item => {
      return <Item key={item.id} item={item}/>
    })
    return(
      <section className="featured-rooms">
        <Title title="featured items"/>
         <div className="featured-rooms-center">
          {loading?<Loading/>:item}
         </div>
      </section>
    );
  }
}
