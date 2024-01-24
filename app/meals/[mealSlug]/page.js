
import React from 'react'
import classes from './page.module.css'
import Image from 'next/image'
import { getMeal } from '@/lib/meals'
import { notFound } from 'next/navigation'
const MealDetailPage = ({ params }) => {
    const data = getMeal(params.mealSlug)
    console.log(data)
    if (!data) {
        notFound();
    }
    const { image, id, slug, title, summary, instructions, creator, creator_email } = data
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={image} alt={title} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{title}</h1>
                    <p className={classes.creator}>
                        By {creator}
                    </p>
                    <p className={classes.summary}>
                        {summary}
                    </p>
                </div>

            </header>
            <main>
                <p className={classes.instructions}>{instructions}</p>
            </main>
        </>
    )
}
export default MealDetailPage