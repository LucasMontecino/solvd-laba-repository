import { useState } from "react";

export default function useValidation() {
  const [errors, setErrors] = useState(null);

  function validate(input) {
    if (input.length === 0) {
      setErrors("Oh no, you forgot to type something!");
      return false;
    }
    if (input.length > 50) {
      setErrors("Hey, the maximum of characters is 50!");
      return false;
    }
    setErrors(null);
    return true;
  }

  return { errors, validate };
}
