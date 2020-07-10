import React, { Component } from 'react';
//import items from './data';
import Client from './Contentful';


const ItemContext = React.createContext();

class ItemProvider extends Component
{
  state={
    item:[],
    sortedItems:[],
    featuredItems:[],
    loading:false,
    type:'all',
    capacity:1,
    price:0,
    minPrice:0,
    maxPrice:0,
    minSize:0,
    maxSize:0
  };

  //getData function

  getData = async () =>{
    try{
      let response = await Client.getEntries({
        content_type:"htdMeatShop",
        order:"sys.createdAt"
      });
      let item = this.formatData(response.items);
      let featuredItems = item.filter(i => i.featured === true);
      let maxPrice = Math.max(...item.map(item=>item.price));
      let maxSize = Math.max(...item.map(item=>item.size));

      this.setState({
        item,
        featuredItems,
        sortedItems:item,
        loading:false,
        price:maxPrice,
        maxPrice,
        maxSize
      });
    }
    catch (error){
      console.log(error);
    }
  }

  componentDidMount()
  {
    this.getData()

  }

  formatData(items)
  {
    let tempItems = items.map(temp => {
      let id = temp.sys.id
      let images = temp.fields.images.map(
        image => image.fields.file.url
      );
      let itemss = {...temp.fields,images,id}
      return itemss;
    });
    return tempItems;
  }
  getItem = (slug) =>{
    let tempVar = [...this.state.item];
    const item = tempVar.find((item)=>item.slug === slug);
    return item;
  };

 handleChange = event => {
   const target = event.target
   const value = target.type === 'checkbox' ? target.checked:target.value
   const name = event.target.name;
   this.setState({
     [name]:value
   },this.filterItems)
 };

 filterItems = () => {
   let {
     item,
     type,
     capacity,
     price,
     minSize,
     maxSize
   } = this.state
   //all the items
   let tempItems = [...item];
   //transform values
   capacity = parseInt(capacity);
   price = parseInt(price);


   //filter by type
   if(type !=='all')
   {
     tempItems = tempItems.filter(items => items.type === type)
   }


   //filer by capacity

   if(capacity!==1)
   {
     tempItems = tempItems.filter(items => items.capacity >= capacity)
   }

   //filter by Price

   tempItems = tempItems.filter(items => items.price <= price);

   //filter by size

   tempItems = tempItems.filter(items => items.size >= minSize && items.size <= maxSize);

   

   //change state
   this.setState({
     sortedItems:tempItems
   })
 };

  render()
  {
    return(
      <ItemContext.Provider value={{
        ...this.state,
        getItem:this.getItem,
        handleChange:this.handleChange
        }}>
        {this.props.children}
      </ItemContext.Provider>
    );
  }
}

const ItemConsumer = ItemContext.Consumer;

export function withItemConsumer(Component)
{
  return function ConsumerWrapper(props)
  {
    return <ItemConsumer>
      {value => <Component {...props} context={value} />}
    </ItemConsumer>
  }
}

export { ItemProvider , ItemConsumer , ItemContext };
