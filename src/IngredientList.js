import React, { Component } from 'react'
import IngredientItem from './IngredientItem.js'

export default class IngredientList extends Component {
    render() {
        return (
            <div className='Background-Image'>
                <ul className="Recipe-Column">
                    <IngredientItem amount='1 1/2 Cups ' name='Milk' />
                    <IngredientItem amount='1/2 Cup ' name='Mascarpone' />
                    <IngredientItem amount='1/2 Tsp ' name='Pink Salt' />
                    <IngredientItem amount='1LB ' name='Black Mission Figs' />
                    <IngredientItem amount='1/2 Cup ' name='Brown Sugar' />
                    <IngredientItem amount='2-4 Tbsp ' name='Water' />

                </ul>
                <ul className="Recipe-Column">
                    <IngredientItem amount='1 1/2 Cups ' name='Heavy Cream' />
                    <IngredientItem amount='1/3 ' name='Granulated Sugar' />
                    <IngredientItem amount='2 ' name='Egg Yolks' />
                    <IngredientItem amount='1 ' name=' Lemon, juiced' />
                    <IngredientItem amount='2 tbsp ' name='Butter' />
                    <IngredientItem amount='1 Cup ' name='Honey Roasted Pecans, roughly chopped' />
                </ul>
                <hr />
            </div>
        )
    }
}
