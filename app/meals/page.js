import React, { Suspense } from 'react'
import classes from "./page.module.css"
import Link from 'next/link'
import MealGrid from '@/components/meals/meal-grid'
import { getMeals } from '@/lib/meals'
import Loading from './loading-out'

const LoadMeal = async () => {
    const meals = await getMeals();
    return (

        <MealGrid meals={meals} />
    )
}
const MealPage = async () => {

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={classes.highlight}>
                        By You
                    </span>
                </h1>
                <p>
                    Choose ur favorite recipe and cook it
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/shared">
                        Share Your Favorite Recipe
                    </Link>

                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<Loading />
                }>
                    <LoadMeal />
                </Suspense>
            </main>

        </>
    )
}

export default MealPage