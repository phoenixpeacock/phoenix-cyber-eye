// Handle file upload
const addButton = document.querySelector('.add-button');
const mediaPreview = document.querySelector('.media-preview');

addButton.addEventListener('click', () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*,video/*';
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            const mediaUrl = URL.createObjectURL(file);
            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = mediaUrl;
                img.alt = file.name;
                mediaPreview.innerHTML = '';
                mediaPreview.appendChild(img);
            } else if (file.type.startsWith('video/')) {
                const video = document.createElement('video');
                video.src = mediaUrl;
                video.controls = true;
                mediaPreview.innerHTML = '';
                mediaPreview.appendChild(video);
            }
        }
    });
    fileInput.click();
});

// Handle contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Here, you can add code to handle the form submission, e.g., send the data to a server
    console.log('Form submitted:', {
        name: contactForm.elements.name.value,
        email: contactForm.elements.email.value,
        message: contactForm.elements.message.value
    });
    // Reset the form
    contactForm.reset();
});