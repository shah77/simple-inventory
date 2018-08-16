import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class addItem extends Component{
    newItem(newItem){
    axios.request({
      method:'post',
      url:'http://localhost:3000/api/items',
      data: newItem
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    const newItem = {
      name: this.refs.name.value,
      stock: this.refs.stock.value,
      price: this.refs.price.value
    }
    this.newItem(newItem);
    e.preventDefault();
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/">Back</Link>
       <center><b>Add item</b></center>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" autoComplete="off" required/>
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="stock" ref="stock" autoComplete="off" required/>
            <label htmlFor="stock">Stock</label>
          </div>
          <div className="input-field">
            <input type="text" name="price" ref="price" autoComplete="off" required/>
            <label htmlFor="price">Price</label>
          </div>
          <input type="submit" value="Save" className="btn blue darken-3" />
        </form>
      </div>
    )
  }
}

export default addItem;