document.addEventListener('DOMContentLoaded', () => {
    const resubscribeBtn = document.getElementById('resubscribeBtn');
    let placeholder = null;

    const moveButton = () => {
        if (!resubscribeBtn.classList.contains('is-dodging')) {
            // Create a placeholder div that mimics the button's full size and margins
            placeholder = document.createElement('div');
            const btnStyles = window.getComputedStyle(resubscribeBtn);
            
            // Use offsetWidth and offsetHeight to get the full space including padding
            placeholder.style.width = `${resubscribeBtn.offsetWidth}px`;
            placeholder.style.height = `${resubscribeBtn.offsetHeight}px`;
            placeholder.style.marginTop = btnStyles.marginTop;
            placeholder.style.marginBottom = btnStyles.marginBottom;
            placeholder.style.marginLeft = btnStyles.marginLeft;
            placeholder.style.marginRight = btnStyles.marginRight;
            
            // Insert the placeholder before the button to hold its place in the layout
            resubscribeBtn.parentNode.insertBefore(placeholder, resubscribeBtn);

            // Set the button's width explicitly before making its position fixed
            const initialWidth = resubscribeBtn.offsetWidth;
            resubscribeBtn.style.width = `${initialWidth}px`;
            
            // Add the class that makes the button 'position: fixed'
            resubscribeBtn.classList.add('is-dodging');
        }

        // This part moves the button to a random position on the screen
        const btnRect = resubscribeBtn.getBoundingClientRect();
        const maxTop = window.innerHeight - btnRect.height;
        const maxLeft = window.innerWidth - btnRect.width;
        const randomTop = Math.random() * maxTop;
        const randomLeft = Math.random() * maxLeft;
        resubscribeBtn.style.top = `${randomTop}px`;
        resubscribeBtn.style.left = `${randomLeft}px`;
    };

    resubscribeBtn.addEventListener('mouseover', moveButton);

    resubscribeBtn.addEventListener('click', () => {
        alert('Wow, you actually caught it!');
        resubscribeBtn.textContent = 'Resubscribed!';
        resubscribeBtn.removeEventListener('mouseover', moveButton);
        
        // Remove the placeholder when the button is caught
        if (placeholder) {
            placeholder.remove();
        }
        
        // Reset the button's styles and apply the 'caught' class
        resubscribeBtn.classList.remove('is-dodging');
        resubscribeBtn.style.width = '';
        resubscribeBtn.style.top = '';
        resubscribeBtn.style.left = '';
        resubscribeBtn.classList.add('is-caught');
    });
});