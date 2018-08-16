import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ItemList from './itemList';

class inventory extends Component{
    constructor(){
        super();
        this.state = {
          items: []
        }
    }

    componentWillMount(){
        this.getItems();
    }

    getItems(){
        axios.get('http://localhost:3000/api/items')
          .then(response => {
            this.setState({items: response.data}, () => {
              console.log(this.state);
            })
        })
        .catch(err => console.log(err));
    }

    render(){
        const listOfItem = this.state.items.map((x, i) => {
          return(
            <ItemList key={x.id} item={x} />
            //<li className="collection-item">{item.name}</li>
          )
        })
        return (
          <div>
            <br/>
            <b><center className="text-center">Item list</center></b>
            <ul className="collection">
              {listOfItem}
            </ul>
          </div>
        )
    }
}

export default inventory;
