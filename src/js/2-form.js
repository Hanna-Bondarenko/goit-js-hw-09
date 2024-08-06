document.addEventListener('DOMContentLoaded', () => {
  try {
    const form = document.querySelector('.feedback-form');
    if (!form) {
      throw new Error(
        'Element with class "feedback-form" not found in the DOM'
      );
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
      formData.email = '';
      formData.message = '';
    });

    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      form.email.value = parsedData.email || '';
      form.message.value = parsedData.message || '';
      formData.email = parsedData.email || '';
      formData.message = parsedData.message || '';
    }
  } catch (error) {
    console.error(error.message);
  }
});
