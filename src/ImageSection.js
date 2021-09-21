import React, { Component } from 'react'


export default class ImageSection extends Component {
    render() {
        return (
            <div>
                <h1 className="choco-pizza"> CHOCOLATE PIZZA </h1>
                <p> Posted on 15 DEC 2013 / Desserts</p>
                <img src={this.props.img} alt="chocolate pizza" />
            </div>
        )
    }
}
