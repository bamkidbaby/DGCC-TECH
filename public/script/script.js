  const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    for(let i = 0; i<links.length; i++){
      links[i].addEventListener('click', () => {
         navLinks.classList.remove('active');
      });
    }


  const form = document.getElementById('messageForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Check if fields are filled
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('⚠️ Please fill in all fields before sending.');
      return;
    }

    alert("✅ Message sent successfully! We'll get back to you shortly.");
    form.reset();
  });


