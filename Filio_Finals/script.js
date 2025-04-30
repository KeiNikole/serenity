const form = document.getElementById('bookingForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  confirmation.innerHTML = `
    <h3>Appointment Confirmed</h3>
    <p>Hi ${name}, your ${service} appointment is booked for ${date} at ${time}.</p>
    <p>We’ll see you soon at Serenity!</p>
  `;

  confirmation.style.display = 'block';
  form.reset();
});


