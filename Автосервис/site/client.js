const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  swal("Заявка отправлена!", "Наши специалисты свяжуться с вами в ближайшее время!", "success");
  const formData = new FormData(form);
  form.reset();
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log(data);
  fetch('http://localhost:3000/submit', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'text/plain',
    },
  })
    .then((response) => {response.json()})
    .then((result) => {
      
    })
    .catch((error) => {
      
    });
});