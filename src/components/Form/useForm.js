const validation = (name, value) => {
  switch (name) {
    case "firstName":
    case "lastName":
      if (value && value[0].match(/^[^0-9]{2,}$/)) {
        return true;
      } else {
        return false;
      }
    case "email":
      if (
        value &&
        value[0].match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        return true;
      } else {
        return false;
      }
    case "password":
      if (value && value[0].match(/^(?=.*[A-Z])(?=.*\d).{6,10}$/)) {
        return true;
      } else {
        return false;
      }
    default:
      return false;
  }
};

export default validation;
