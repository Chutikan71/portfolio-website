// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        const formData = new FormData(form);
        console.log('Form submitted with data:', Object.fromEntries(formData));
        alert('ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับโดยเร็วที่สุด.');
        form.reset();
    });
});