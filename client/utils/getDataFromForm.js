export default function (form) {
  const formDataJSON = {};
  const formElements = form.querySelectorAll('input, select');
  formElements.forEach((element) => {
    formDataJSON[element.name] = element.value;
  });

  return formDataJSON;
}
