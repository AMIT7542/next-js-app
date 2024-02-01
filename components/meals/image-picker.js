"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
const ImagePicker = ({ name, label }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  const handleImage = () => {
    imageInput.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          type="file"
          name={name}
          id={name}
          accept="image/png image/jpeg"
          className={classes.input}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />

        <button type="button" onClick={handleImage} className={classes.button}>
          Pick Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
