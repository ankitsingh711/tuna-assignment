import React, { Component } from 'react';
import RecipesDetails from '../../assets/png/recipes_details.png';

class Recipes extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='recipes_main__container'>
                <div className='recipes_top__section'>
                    <img src={RecipesDetails} alt="recipes_details" />
                </div>

                <div className='recipes_text__section'>
                    <h2>Pumpkin Marshmallow pie</h2>

                    <div className='recipes_text_list__section'>
                        <h2>Recipe</h2>
                        <span>Here's A Simple Recipe For Pumpkin Marshmallow Pie:</span>

                        <div>
                            <span>Ingredients:</span>
                            <ul>
                                <li>
                                    <span>1 9-inch pie crust (pre-made or homemade)</span>
                                </li>
                                <li>
                                    <span>1 cup canned pumpkin puree</span>
                                </li>
                                <li>
                                    <span>3/4 cup granulated sugar</span>
                                </li>
                                <li>
                                    <span>1 tsp ground cinnamon</span>
                                </li>
                                <li>
                                    <span>1/2 tsp ground ginger</span>
                                </li>
                                <li>
                                    <span>1/4 tsp ground nutmeg</span>
                                </li>
                                <li>
                                    <span>1/4 tsp salt</span>
                                </li>
                                <li>
                                    <span>2 large eggs</span>
                                </li>
                                <li>
                                    <span>1 cup evaporated milk</span>
                                </li>
                                <li>
                                    <span>1 cup mini marshmallows</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <span>Instructions:</span>
                            <ul>
                                <li>
                                    <span>1 9-inch pie crust (pre-made or homemade)</span>
                                </li>
                                <li>
                                    <span>1 cup canned pumpkin puree</span>
                                </li>
                                <li>
                                    <span>3/4 cup granulated sugar</span>
                                </li>
                                <li>
                                    <span>1 tsp ground cinnamon</span>
                                </li>
                                <li>
                                    <span>1/2 tsp ground ginger</span>
                                </li>
                                <li>
                                    <span>1/4 tsp ground nutmeg</span>
                                </li>
                                <li>
                                    <span>1/4 tsp salt</span>
                                </li>
                                <li>
                                    <span>2 large eggs</span>
                                </li>
                                <li>
                                    <span>1 cup evaporated milk</span>
                                </li>
                                <li>
                                    <span>1 cup mini marshmallows</span>
                                </li>
                            </ul>
                        </div>

                        <span>Enjoy Your Delicious Pumpkin Marshmallow Pie!</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipes;