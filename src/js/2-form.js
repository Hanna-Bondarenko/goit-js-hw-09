document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  if (!form) {
    console.error('Element with class "feedback-form" not found in the DOM');
    return;
  }

  const formData = { email: '', message: '' };

  form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  });

  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.email.value = parsedData.email || '';
    form.message.value = parsedData.message || '';
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  }
});
