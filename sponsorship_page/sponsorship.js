document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('sponsorshipForm');
    
    // Stagger form group animations
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        group.style.animationDelay = `${index * 0.1}s`;
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.innerHTML = '<span class="spinner"></span> Submitting...';
        submitBtn.disabled = true;

        const formData = new FormData(form);

        fetch('submit.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showNotification('Success! Thank you for your interest in Robot Kyan.', 'success');
                form.reset();
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        })
        .catch(error => {
            showNotification(error.message, 'error');
        })
        .finally(() => {
            submitBtn.innerHTML = 'Submit Sponsorship Request';
            submitBtn.disabled = false;
        });
    });

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }, 100);
    }
});
