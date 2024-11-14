import { useState } from "react";

function useFormValidation(initialValues) {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState(
    Object.keys(initialValues).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateField = (field) => {
    if (!field.validity.valid) {
      setErrors((prev) => ({
        ...prev,
        [field.name]: field.validationMessage,
      }));
    } else {
      setErrors((prev) => ({ ...prev, [field.name]: "" }));
    }
  };

  const handleBlur = (e) => validateField(e.target);

  return {
    formData,
    errors,
    handleInputChange,
    handleBlur,
    setFormData,
  };
}

export default useFormValidation;
