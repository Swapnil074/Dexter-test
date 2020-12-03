import { useFormikContext } from "formik";
import React from "react";
import { number } from "yup";
import AppPicker from "./AppPicker";
import Errormessage from "./Errormessage";

export default function AppFormPicker({
  items,
  name,
  placeholder,
  width,
  PickerItemComponent,
  numberofColumns,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
        items={items}
        placeholder={placeholder}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberofColumns={numberofColumns}
      />
      <Errormessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
