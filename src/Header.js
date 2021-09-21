import React, { Component } from 'react'
import ButtonList from './ButtonList'

export default class Header extends Component {
    render() {
        return (
            <div>
                <img src="logo.png" alt="logo" className="logo-a" />  <h2 className="Delicious">Delicious</h2>
                <p className="best-food">The Best Food Blog On The Web</p>


                <ButtonList />
                <hr />
            </div>
        )
    }
}
