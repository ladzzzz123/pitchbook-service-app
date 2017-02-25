const regExp = {
  onlyDigits: /^\d+$/
};

const validator = {
  address_1(address) {
    if (!address) return { status: false, message: 'Address can not be empty' };
    if (address.length < 5) return { status: false, message: 'Address should be equal to or greater than 5 characters' };

    return { status: true };
  },
  city(city) {
    if (!city) return { status: false, message: 'City can not be empty' };
    if (city.length < 3) return { status: false, message: 'City should be equal to or greater than 3 characters' };

    return { status: true };
  },
  state(state) {
    if (!state) return { status: false, message: 'Password can not be empty' };

    return { status: true };
  },
  postal_code(postalCode) {
    if (!postalCode) return { status: false, message: 'Postal Code Confirm can not be empty' };
    if (!regExp.onlyDigits.test(postalCode)) return { status: false, message: 'Postal Code has to contain only digits' };

    return { status: true };
  },
  country(country) {
    if (!country) return { status: false, message: 'Country can not be empty' };

    return { status: true };
  }
};

function isStateHasError(state) {
  const errorsArray = Object.keys(state).map(key => state[key]);

  return (errorsArray.join('').length !== 0);
}

export default function (validateFiledsArray, formData, callback) {
  const newFormState = {};

  validateFiledsArray.forEach((validateField) => {
    if (validator[validateField]) {
      const validateState = validator[validateField](formData[validateField]);

      if (!validateState.status) {
        newFormState[validateField] = validateState.message;
      }
    }
  });

  callback(isStateHasError(newFormState), newFormState);
}
