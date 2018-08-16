import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class editItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:'',
      name:'',
      stock:'',
      price:''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getItemDetails();
  }

  getItemDetails(){
    let itemId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/items/${itemId}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        name: response.data.name,
        stock: response.data.stock,
        price: response.data.price
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
    }

  editDetails(newData){
    axios.request({
      method:'put',
      url:`http://localhost:3000/api/items/${this.state.id}`,
      data: newData
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    const newData = {
      name: this.refs.name.value,
      stock: this.refs.stock.value,
      price: this.refs.price.value
    }
    this.editDetails(newData);
    e.preventDefault();
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/">Back</Link>
       <center><b>Edit Item Details</b></center>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} />
            <label className="labelTxt" htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="number" name="stock" ref="stock" value={this.state.stock} onChange={this.handleInputChange} />
            <label className="labelTxt" htmlFor="stock">Stock</label>
          </div>
          <div className="input-field">
            <input type="number" name="price" ref="price" value={this.state.price} onChange={this.handleInputChange} />
            <label className="labelTxt" htmlFor="price">Price</label>
          </div>
          <input type="submit" value="Save" className="btn blue darken-3" />
        </form>
      </div>
    )
  }
}

export default editItem;