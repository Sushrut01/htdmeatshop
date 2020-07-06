import React from 'react';
import ItemsFilter from './ItemsFilter';
import ItemsList from './ItemsList';
import {withItemConsumer} from '../context';
import Loading from './Loading';

function ItemsContainer({context})
{
  const {loading,sortedItems,item} = context;
  if(loading)
  {
    return <Loading />;
  }
  return(
    <div>
        <ItemsFilter item={item} />
        <ItemsList item={sortedItems} />
    </div>
  );
}

export default withItemConsumer(ItemsContainer);




/*
import React from 'react';
import ItemsFilter from './ItemsFilter';
import ItemsList from './ItemsList';
import {ItemConsumer} from '../context';
import Loading from './Loading';

export default function ItemsContainer(){
  return(
    <ItemConsumer>
      {
        (value) =>
        {
          const {loading,sortedItems,item} = value
          if(loading)
          {
            return <Loading />;
          }
          return(
            <div>
                Hello from Items Container!!!
                <ItemsFilter item={item} />
                <ItemsList item={sortedItems} />
            </div>
          );
        }
      }
    </ItemConsumer>

  );
}
*/
