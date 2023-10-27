document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // You can add further logic to handle form submission (e.g., send data to a server)
    console.log('Name:', name);
    console.log('Email:', email);
});
