import React from "react";

import AppTextInput from "./AppTextInput";
import Errormessage from "./Errormessage";
import { useFormikContext } from "formik";

export default function AppFormField({ name, width, ...otherProps }) {
  const {
    setFieldTouched,
    touched,
    errors,
    values,
    setFieldValue,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <Errormessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
