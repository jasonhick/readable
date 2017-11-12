import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Category extends Component {

    render(){

        const {params} = this.props.match;

        return (
            <div>
                <h1>Category > {params.id}</h1>
                [Posts component here]
            </div>

        );
    }
}

export default Category
