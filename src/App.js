import React, { Component } from 'react'
import ButtonList from './ButtonList.js'
import Footer from './Footer.js'
import Header from './Header.js'
import ImageSection from './ImageSection.js'
import IngredientList from './IngredientList.js'
import Recipe from './Recipe.js'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header

        />


        <ImageSection
          img='choco-pizza.png'
        />


        <Recipe />


        <IngredientList />

        <Footer />



      </div>
    )
  }
}
