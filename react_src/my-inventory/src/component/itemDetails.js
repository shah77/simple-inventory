import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class itemDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
          details:''
        }
    }

    componentWillMount(){
         this.getMeetup();
    }

    getMeetup(){
    let itemID = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/items/${itemID}`)
    .then(response => {
        this.setState({details: response.data}, () => {
        console.log(this.state);
        })
    })
    .catch(err => console.log(err));
    }

    onDelete(){
    let itemID = this.state.details.id;
    axios.delete(`http://localhost:3000/api/items/${itemID}`)
        .then(response => {
        this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    render(){
        return (
        <div>
            <br/>
            <Link className="btn grey" to="/">Back</Link>
                <ul className="collection">
                <li className="collection-item"><b>Item:</b> {this.state.details.name}</li>
                <li className="collection-item"><b>Stock:</b> {this.state.details.stock}</li>
                <li className="collection-item"><b>Price:</b> {this.state.details.price}</li>
            </ul>
            <button onClick={this.onDelete.bind(this)} className="btn red right"><i className="fa fa-trash"></i></button>
            <Link className="btn blue darken-3 right" to={`/items/edit/${this.state.details.id}`}><i className="fa fa-edit"></i></Link>
        </div>
        )
    }
}

export default itemDetails;