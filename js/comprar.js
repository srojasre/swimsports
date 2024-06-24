document.querySelectorAll('.input-container').forEach(container => {
    const input = container.querySelector('input[type="number"]');
    const incrementBtn = container.querySelector('.increment');
    const decrementBtn = container.querySelector('.decrement');

    incrementBtn.addEventListener('click', () => {
        input.value = parseInt(input.value) + 1;
    });

    decrementBtn.addEventListener('click', () => {
        if (input.value > 0) {
            input.value = parseInt(input.value) - 1;
        }
    });
});

document.getElementById('comprarBtn').addEventListener('click', function() {
    const items = document.querySelectorAll('.image-item');
    let message = 'Hola, quisiera comprar los siguientes gorros:\n';
    let hasSelection = false;

    items.forEach((item, index) => {
        const img = item.querySelector('img');
        const quantityInput = item.querySelector('input[type="number"]');
        const quantity = quantityInput.value;
        const name = img.getAttribute('data-name');

        if (quantity > 0) {
            message += `${name}: ${quantity} unidades\n`;
            hasSelection = true;
        }
    });

    if (!hasSelection) {
        alert("Seleccione al menos 1 unidad para continuar");
        return;
    }

    const whatsappLink = `https://wa.me/573023808867/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
});