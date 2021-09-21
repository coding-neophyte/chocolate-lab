import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <img src="van-pic.png" alt='Vanessa' />
                <h4>Vanessa Stevenson</h4>
                <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much
                    who i am.</p>
                <button className="Share-Button"> Share Recipe</button>
                <br /> <img src="logo.png" alt="logo" />

            </div>
        )
    }
}
