import { useFormikContext } from "formik";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Errormessage } from ".";
import ImageInputList from "../list/ImageInputList";

export default function AppFormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageuri = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageuri, uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageuri.filter((imageuri) => imageuri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageuri}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <Errormessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
