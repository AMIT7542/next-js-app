"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
function isInvalidText(text) {
  return !text || text.trim() === "";
}
export const shareMeal = async (prevState, data) => {
  console.log(prevState);
  let valid = true;
  const meal = {
    title: data.get("title"),
    creator: data.get("name"),
    creator_email: data.get("email"),
    image: data.get("image"),
    summary: data.get("summary"),
    instructions: data.get("instructions"),
  };
  // if (
  //   isInvalidText(meal.title) ||
  //   isInvalidText(meal.summary) ||
  //   isInvalidText(meal.instructions) ||
  //   isInvalidText(meal.creator) ||
  //   isInvalidText(meal.creator_email) ||
  //   !meal.creator_email.includes("@") ||
  //   !meal.image ||
  //   meal.image.size === 0
  // ) {
  //   return {
  //     name: "name is required",
  //     email: "email should be correct",
  //   };
  // }

  if (isInvalidText(meal.title)) {
    prevState.name = "name should not be empty";
    valid = false;
  }
  if (isInvalidText(meal.email)) {
    prevState.email = "email should not be empty";
    valid = false;
  }
  if (!valid) {
    return prevState;
  }
  await saveMeal(meal);
  redirect("/meals");
};
