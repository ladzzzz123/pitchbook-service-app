export default function (form) {
  const formDataJSON = {};
  const formElements = form.querySelectorAll('input, select');
  formElements.forEach((element) => {
    const value = element.type === 'checkbox' ? element.checked : element.value;
    formDataJSON[element.name] = value;
  });

  return formDataJSON;
}
