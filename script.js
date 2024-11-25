document.addEventListener('DOMContentLoaded', function () {
    const beerCards = document.querySelectorAll('.beer-card');
    const modal = document.getElementById('beerModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalAlcohol = document.getElementById('modalAlcohol');
    const modalGravity = document.getElementById('modalGravity');

    const beerData = {
        1: {
            name: 'IV.1',
            description: 'Unsere Eins. Ein Helles. Kaltgehopft.',
            image: 'iv_one.jpeg',
            alcohol: '5.0%',
            gravity: '11.5°'
        },
        2: {
            name: 'IV.2',
            description: 'Unsere Zwei. Ein Dunkles. Malzig und Vollmundig.',
            image: 'iv_two.jpeg',
            alcohol: '6.0%',
            gravity: '13.0°'
        }
    };

    beerCards.forEach(card => {
        card.addEventListener('click', () => {
            const beerId = card.dataset.beerId;
            const beer = beerData[beerId];
            
            modalTitle.textContent = beer.name;
            modalImage.src = beer.image;
            modalImage.alt = beer.name;
            modalDescription.textContent = beer.description;
            modalAlcohol.textContent = `Alkoholgehalt: ${beer.alcohol}`;
            modalGravity.textContent = `Stammwürze: ${beer.gravity}`;
            
            modal.classList.remove('hidden');
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // ABV Calculator
    const calculateAbv = document.getElementById('calculateAbv');
    const ogInput = document.getElementById('og');
    const fgInput = document.getElementById('fg');
    const abvResult = document.getElementById('abvResult');

    calculateAbv.addEventListener('click', () => {
        const og = parseFloat(ogInput.value);
        const fg = parseFloat(fgInput.value);

        if (isNaN(og) || isNaN(fg)) {
            abvResult.textContent = 'Bitte geben Sie gültige Zahlen ein.';
            return;
        }

        const abv = (og*0.01 - fg*0.01) * 131.25;
        abvResult.textContent = `Alkoholgehalt: ${abv.toFixed(2)}%`;
    });
});
