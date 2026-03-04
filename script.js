// Köp-knapp funktionalitet
document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        alert('✅ ' + productName + ' har lagts till i din varukorg!');
    });
});

// CTA knapp
document.querySelector('.cta-btn').addEventListener('click', function() {
    alert('Välkommen till vår butik! 🛍️');
});
