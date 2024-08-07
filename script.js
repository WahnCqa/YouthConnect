document.addEventListener('DOMContentLoaded', function() {
    // Sample events data
    const events = [
        { title: 'Global Youth Conference', date: '2024-09-15' },
        { title: 'International Volunteer Day', date: '2024-10-10' },
        { title: 'Cultural Exchange Workshop', date: '2024-11-05' }
    ];

    // Load events into the page
    const eventList = document.getElementById('event-list');
    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.title} - ${event.date}`;
        eventList.appendChild(listItem);
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});
