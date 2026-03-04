// Smooth scroll to products
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Add to cart functionality
function addToCart(productName) {
    alert('✅ ' + productName + ' har lagts till i din varukorg!');
}

// Send contact message
function sendMessage(event) {
    event.preventDefault();
    alert('✅ Tack för ditt meddelande! Vi återkommer inom 24 timmar.');
    event.target.reset();
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
