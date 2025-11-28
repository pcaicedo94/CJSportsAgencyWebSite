// ===================================
// CONTACT FORM JAVASCRIPT
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                category: document.getElementById('category').value,
                message: document.getElementById('message').value
            };

            // Validate form
            if (!formData.name || !formData.email || !formData.category || !formData.message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate form submission
            // In a real application, you would send this data to a server
            console.log('Form submitted:', formData);

            // Show success message
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';

            // Optionally reset form after delay
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'flex';
                formSuccess.style.display = 'none';
            }, 5000);

            // Add animation to success message
            formSuccess.style.opacity = '0';
            formSuccess.style.transform = 'translateY(20px)';
            setTimeout(() => {
                formSuccess.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                formSuccess.style.opacity = '1';
                formSuccess.style.transform = 'translateY(0)';
            }, 100);
        });

        // Real-time validation
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (this.value && !emailRegex.test(this.value)) {
                    this.style.borderColor = '#ff4444';
                } else {
                    this.style.borderColor = 'rgba(0, 217, 255, 0.3)';
                }
            });

            emailInput.addEventListener('focus', function() {
                this.style.borderColor = '#00d9ff';
            });
        }

        // Input focus effects
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateX(5px)';
                this.parentElement.style.transition = 'transform 0.3s ease';
            });

            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateX(0)';
            });
        });
    }
});

// Character counter for message textarea
document.addEventListener('DOMContentLoaded', function() {
    const messageTextarea = document.getElementById('message');
    
    if (messageTextarea) {
        const maxLength = 1000;
        const counter = document.createElement('div');
        counter.style.cssText = `
            text-align: right;
            font-size: 0.85rem;
            color: var(--text-muted);
            margin-top: 0.5rem;
        `;
        messageTextarea.parentElement.appendChild(counter);

        const updateCounter = () => {
            const remaining = maxLength - messageTextarea.value.length;
            counter.textContent = `${messageTextarea.value.length} / ${maxLength} characters`;
            
            if (remaining < 100) {
                counter.style.color = '#00d9ff';
            } else {
                counter.style.color = 'var(--text-muted)';
            }
        };

        messageTextarea.setAttribute('maxlength', maxLength);
        messageTextarea.addEventListener('input', updateCounter);
        updateCounter();
    }
});
