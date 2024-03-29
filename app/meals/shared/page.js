"use client";
import React from "react";
import { useFormState } from "react-dom";
import classes from "./page.module.css";
import ImagePicker from "@/components/meals/image-picker";
import { shareMeal } from "@/lib/actions";
import MealFormSubmit from "@/components/meals/meals.form.submit";
const SharedPage = () => {
  let error = {
    name: "",
    email: "",
  };
  const [state, formAction] = useFormState(shareMeal, error);
  let { name, email } = state;

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" />
            </p>
            {name && <p>{name}</p>}
            <p>
              <label htmlFor="email">Your email</label>
              <input type="text" id="email" name="email" />
            </p>
            {email && <p>{email}</p>}
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
            ></textarea>
          </p>
          <ImagePicker name="image" label="your image" />
          <p className={classes.actions}>
            {/* <button type="submit">Share Meal</button> */}
            {state.message && <p>{state.message}</p>}
            <MealFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
};

export default SharedPage;
