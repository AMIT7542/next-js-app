import React from 'react'

const MealDetailPage = ({ params }) => {
    console.log(params)
    return (
        <div>MealDetailPage {params.mealSlug}</div>
    )
}
export default MealDetailPage