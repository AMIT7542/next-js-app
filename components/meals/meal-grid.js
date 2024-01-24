import React from 'react'
import MealIteam from './meal-item'
import classes from './meal-grid.module.css'
const MealGrid = ({ meals }) => {
    return (
        <ul className={classes.meals}>
            {
                meals.map((meal) => (
                    <li key={meal.id}>
                        <MealIteam meals={meal} />
                    </li>
                ))
            }
        </ul>
    )
}

export default MealGrid