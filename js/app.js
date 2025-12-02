/**
 * Vierlingsbräu Application
 * Gebündelte Version - funktioniert auch ohne Server (file://)
 */

// ============================================
// BEER DATA
// ============================================
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

// ============================================
// ARTICLES DATA
// ============================================
const articlesData = [
    {
        id: 1,
        title: 'Die ersten Schritte beim Bierbrauen',
        excerpt: 'Ein Leitfaden für Anfänger:innen Von der Planung bis zum ersten eigenen Bier.',
        content: `
            <h3 class="text-2xl font-bold text-light-green-800 mb-4">Die ersten Schritte beim Bierbrauen</h3>
            <p class="text-light-green-700 mb-4 leading-relaxed">
                Das Bierbrauen zu Hause ist ein faszinierendes Hobby, das Kreativität, Geduld und ein wenig Wissenschaft vereint. 
                Wenn du gerade erst anfängst, kann es überwältigend erscheinen, aber mit den richtigen Grundlagen wirst du schnell 
                dein erstes eigenes Bier brauen können.
            </p>
            <h4 class="text-xl font-bold text-light-green-800 mb-3 mt-6">Was du brauchst</h4>
            <ul class="list-disc list-inside text-light-green-700 mb-4 space-y-2">
                <li>Braukessel (mindestens 20 Liter)</li>
                <li>Gärbehälter mit Gärspund</li>
                <li>Thermometer</li>
                <li>Hydrometer (zur Messung der Stammwürze)</li>
                <li>Sterilisationsmittel</li>
                <li>Malz, Hopfen, Hefe und Wasser</li>
            </ul>
            <h4 class="text-xl font-bold text-light-green-800 mb-3 mt-6">Der Brauprozess</h4>
            <p class="text-light-green-700 mb-4 leading-relaxed">
                Der Brauprozess beginnt mit dem Maischen - dem Einweichen des Malzes in heißem Wasser, um die Stärke in Zucker 
                umzuwandeln. Anschließend wird die Würze abgeläutert, gekocht und gehopft. Nach dem Abkühlen kommt die Hefe hinzu, 
                die den Zucker in Alkohol und Kohlendioxid umwandelt.
            </p>
            <p class="text-light-green-700 leading-relaxed">
                Wichtig ist vor allem: Hygiene! Alle Geräte müssen gründlich gereinigt und sterilisiert werden, um unerwünschte 
                Bakterien zu vermeiden.
            </p>
        `,
        category: 'Anleitung',
        date: '2024-01-15',
        readTime: '5 Min',
        featured: true
    },
    {
        id: 2,
        title: 'Hopfen richtig dosieren',
        excerpt: 'Tipps zur perfekten Hopfengabe für verschiedene Biersorten.',
        content: `
            <h3 class="text-2xl font-bold text-light-green-800 mb-4">Hopfen richtig dosieren</h3>
            <p class="text-light-green-700 mb-4 leading-relaxed">
                Hopfen ist einer der wichtigsten Bestandteile beim Bierbrauen. Er verleiht dem Bier Bitterkeit, Aroma und 
                Geschmack. Die richtige Dosierung und der Zeitpunkt der Hopfengabe sind entscheidend für das Endergebnis.
            </p>
            <h4 class="text-xl font-bold text-light-green-800 mb-3 mt-6">Hopfengabe während des Kochens</h4>
            <p class="text-light-green-700 mb-4 leading-relaxed">
                Traditionell wird Hopfen während des Kochens der Würze hinzugefügt. Je früher der Hopfen hinzugefügt wird, 
                desto mehr Bitterstoffe werden extrahiert. Für die Bitterung fügt man den Hopfen zu Beginn des Kochens hinzu 
                (60-90 Minuten).
            </p>
            <h4 class="text-xl font-bold text-light-green-800 mb-3 mt-6">Aromatische Hopfengabe</h4>
            <p class="text-light-green-700 mb-4 leading-relaxed">
                Für das Aroma wird Hopfen gegen Ende des Kochens hinzugefügt (letzte 15-5 Minuten). Dies nennt man auch 
                "Aromahopfen". Eine weitere Möglichkeit ist das "Kalthopfen" - das Hinzufügen von Hopfen nach der Gärung, 
                was sehr intensive Aromen bringt.
            </p>
            <h4 class="text-xl font-bold text-light-green-800 mb-3 mt-6">Hopfenmengen</h4>
            <p class="text-light-green-700 leading-relaxed">
                Als grobe Richtlinie: Für ein helles Bier verwendet man etwa 20-30g Hopfen pro 20 Liter, für ein IPA können 
                es 50-100g oder mehr sein. Experimentiere mit verschiedenen Hopfensorten, um dein perfektes Aroma zu finden!
            </p>
        `,
        category: 'Tipp',
        date: '2024-02-10',
        readTime: '4 Min',
        featured: true
    },
    {
        id: 3,
        title: 'Die richtige Gärtemperatur',
        excerpt: 'Warum die Temperatur während der Gärung so wichtig ist.',
        content: `
            <h3 class="text-2xl font-bold text-light-green-800 mb-4">Die richtige Gärtemperatur</h3>
            <p class="text-light-green-700 mb-4 leading-relaxed">
                Die Gärtemperatur hat einen enormen Einfluss auf das Endergebnis deines Bieres. Verschiedene Hefestämme 
                haben unterschiedliche Temperaturbereiche, in denen sie optimal arbeiten.
            </p>
            <h4 class="text-xl font-bold text-light-green-800 mb-3 mt-6">Obergärige Hefe</h4>
            <p class="text-light-green-700 mb-4 leading-relaxed">
                Obergärige Hefe (z.B. für Weizenbier, Ale) gärt bei höheren Temperaturen (18-24°C). Bei diesen Temperaturen 
                entstehen mehr Aromastoffe, was zu fruchtigeren, komplexeren Aromen führt.
            </p>
            <h4 class="text-xl font-bold text-light-green-800 mb-3 mt-6">Untergärige Hefe</h4>
            <p class="text-light-green-700 mb-4 leading-relaxed">
                Untergärige Hefe (z.B. für Pils, Helles) benötigt niedrigere Temperaturen (8-14°C). Dies führt zu einem 
                saubereren, neutraleren Geschmack, der typisch für untergärige Biere ist.
            </p>
            <h4 class="text-xl font-bold text-light-green-800 mb-3 mt-6">Temperaturkontrolle</h4>
            <p class="text-light-green-700 leading-relaxed">
                Investiere in ein gutes Thermometer und überwache die Temperatur regelmäßig. Temperaturschwankungen können 
                zu unerwünschten Aromen führen. Ein konstanter, kühler Raum oder ein Gärschrank sind ideal für die Gärung.
            </p>
        `,
        category: 'Tipp',
        date: '2024-02-25',
        readTime: '3 Min',
        featured: false
    },
    {
        id: 4,
        title: 'Bier abfüllen und lagern',
        excerpt: 'Die letzten Schritte: Wie du dein Bier richtig abfüllst und lagerst.',
        content: `
            <h3 class="text-2xl font-bold text-light-green-800 mb-4">Bier abfüllen und lagern</h3>
            <p class="text-light-green-700 mb-4 leading-relaxed">
                Nach der Gärung kommt der spannende Teil: Das Abfüllen und die Lagerung. Diese Schritte sind entscheidend 
                für die Qualität und Haltbarkeit deines Bieres.
            </p>
            <h4 class="text-xl font-bold text-light-green-800 mb-3 mt-6">Vorbereitung</h4>
            <p class="text-light-green-700 mb-4 leading-relaxed">
                Bevor du abfüllst, stelle sicher, dass die Gärung abgeschlossen ist. Dies erkennst du daran, dass der 
                Gärspund keine Blasen mehr zeigt und die Stammwürze konstant bleibt. Lass das Bier noch 2-3 Tage ruhen, 
                damit sich die Hefe absetzen kann.
            </p>
            <h4 class="text-xl font-bold text-light-green-800 mb-3 mt-6">Zucker für die Kohlensäure</h4>
            <p class="text-light-green-700 mb-4 leading-relaxed">
                Für die Kohlensäure fügst du beim Abfüllen eine kleine Menge Zucker hinzu (ca. 6-8g pro Liter). Der Zucker 
                wird von der restlichen Hefe vergoren und erzeugt Kohlendioxid, das im verschlossenen Flaschen gelöst wird.
            </p>
            <h4 class="text-xl font-bold text-light-green-800 mb-3 mt-6">Lagerung</h4>
            <p class="text-light-green-700 leading-relaxed">
                Lagere die Flaschen zunächst 2-3 Wochen bei Zimmertemperatur (ca. 20°C) für die Nachgärung. Danach sollte 
                das Bier kühl (4-8°C) gelagert werden. Die meisten Biere sind nach 4-6 Wochen trinkreif, können aber auch 
                länger gelagert werden.
            </p>
        `,
        category: 'Anleitung',
        date: '2024-03-12',
        readTime: '5 Min',
        featured: false
    }
];

// ============================================
// BEER MODAL
// ============================================
class BeerModal {
    constructor() {
        this.modal = document.getElementById('beerModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalImage = document.getElementById('modalImage');
        this.modalDescription = document.getElementById('modalDescription');
        this.modalAlcohol = document.getElementById('modalAlcohol');
        this.modalGravity = document.getElementById('modalGravity');
        this.modalCloseBtn = document.getElementById('modalCloseBtn');
        
        this.init();
    }

    init() {
        // Event Listener für Beer Cards
        const beerCards = document.querySelectorAll('.beer-card');
        beerCards.forEach(card => {
            card.addEventListener('click', () => {
                const beerId = parseInt(card.dataset.beerId);
                this.showBeer(beerId);
            });
        });

        // Modal schließen beim Klick außerhalb
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hide();
            }
        });

        // Schließen-Button
        if (this.modalCloseBtn) {
            this.modalCloseBtn.addEventListener('click', () => {
                this.hide();
            });
        }

        // ESC-Taste zum Schließen
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
                this.hide();
            }
        });
    }

    showBeer(beerId) {
        const beer = beerData[beerId];
        if (!beer) {
            console.error(`Beer with ID ${beerId} not found`);
            return;
        }

        this.modalTitle.textContent = beer.name;
        this.modalImage.src = beer.image;
        this.modalImage.alt = beer.name;
        this.modalDescription.textContent = beer.description;
        this.modalAlcohol.textContent = `Alkoholgehalt: ${beer.alcohol}`;
        this.modalGravity.textContent = `Stammwürze: ${beer.gravity}`;
        
        this.show();
    }

    show() {
        this.modal.classList.remove('hidden');
        // Body-Scroll sperren
        document.body.style.overflow = 'hidden';
    }

    hide() {
        this.modal.classList.add('hidden');
        // Body-Scroll wieder aktivieren
        document.body.style.overflow = '';
    }
}

// ============================================
// ABV CALCULATOR
// ============================================
class ABVCalculator {
    constructor() {
        this.calculateButton = document.getElementById('calculateAbv');
        this.ogInput = document.getElementById('og');
        this.fgInput = document.getElementById('fg');
        this.resultElement = document.getElementById('abvResult');
        
        if (this.calculateButton) {
            this.init();
        }
    }

    init() {
        this.calculateButton.addEventListener('click', () => {
            this.calculate();
        });

        // Berechnung auch bei Enter-Taste
        [this.ogInput, this.fgInput].forEach(input => {
            if (input) {
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.calculate();
                    }
                });
            }
        });
    }

    calculate() {
        const og = parseFloat(this.ogInput.value);
        const fg = parseFloat(this.fgInput.value);

        if (isNaN(og) || isNaN(fg)) {
            this.resultElement.textContent = 'Bitte geben Sie gültige Zahlen ein.';
            this.resultElement.classList.add('text-red-600');
            this.resultElement.classList.remove('text-light-green-700');
            return;
        }

        if (og < fg) {
            this.resultElement.textContent = 'Stammwürze muss größer als Restextrakt sein.';
            this.resultElement.classList.add('text-red-600');
            this.resultElement.classList.remove('text-light-green-700');
            return;
        }

        const abv = (og * 0.01 - fg * 0.01) * 131.25;
        this.resultElement.textContent = `Alkoholgehalt: ${abv.toFixed(2)}%`;
        this.resultElement.classList.remove('text-red-600');
        this.resultElement.classList.add('text-light-green-700');
    }
}

// ============================================
// MOBILE MENU
// ============================================
class MobileMenu {
    constructor() {
        this.menuBtn = document.getElementById('mobileMenuBtn');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        this.isOpen = false;
        
        this.init();
    }

    init() {
        if (!this.menuBtn || !this.mobileMenu) return;

        // Toggle Menu
        this.menuBtn.addEventListener('click', () => {
            this.toggle();
        });

        // Close Menu when clicking on a link
        this.mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.close();
            });
        });

        // Close Menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && 
                !this.mobileMenu.contains(e.target) && 
                !this.menuBtn.contains(e.target)) {
                this.close();
            }
        });
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.mobileMenu.classList.toggle('hidden');
        this.menuBtn.setAttribute('aria-expanded', this.isOpen);
        
        // Update icon
        if (this.isOpen) {
            this.menuBtn.innerHTML = `
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            `;
            this.menuBtn.setAttribute('aria-label', 'Menü schließen');
        } else {
            this.menuBtn.innerHTML = `
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            `;
            this.menuBtn.setAttribute('aria-label', 'Menü öffnen');
        }
    }

    close() {
        if (!this.isOpen) return;
        this.isOpen = false;
        this.mobileMenu.classList.add('hidden');
        this.menuBtn.setAttribute('aria-expanded', 'false');
        this.menuBtn.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        `;
        this.menuBtn.setAttribute('aria-label', 'Menü öffnen');
    }
}

// ============================================
// BACK TO TOP BUTTON
// ============================================
class BackToTop {
    constructor() {
        this.button = document.getElementById('backToTop');
        this.init();
    }

    init() {
        if (!this.button) return;

        // Show/Hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.button.classList.remove('opacity-0', 'pointer-events-none');
                this.button.classList.add('opacity-100');
            } else {
                this.button.classList.add('opacity-0', 'pointer-events-none');
                this.button.classList.remove('opacity-100');
            }
        });

        // Scroll to top on click
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ============================================
// SMOOTH SCROLL NAVIGATION (Update für Mobile Links)
// ============================================
class SmoothScroll {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        this.sections = document.querySelectorAll('section[id]');
        this.init();
    }

    init() {
        // Smooth Scroll für alle Nav-Links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerOffset = 80;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Active State beim Scrollen
        window.addEventListener('scroll', () => {
            this.updateActiveNav();
        });

        // Initial Active State
        this.updateActiveNav();
    }

    updateActiveNav() {
        let current = '';
        const scrollPosition = window.pageYOffset + 100;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
}

// ============================================
// ARTICLES MANAGER
// ============================================
class ArticlesManager {
    constructor() {
        this.articlesContainer = document.getElementById('articlesContainer');
        this.articleModal = document.getElementById('articleModal');
        this.articleModalContent = document.getElementById('articleModalContent');
        this.articleModalCloseBtn = document.getElementById('articleModalCloseBtn');
        
        this.init();
    }

    init() {
        if (!this.articlesContainer) {
            console.error('articlesContainer not found');
            return;
        }

        if (!articlesData || articlesData.length === 0) {
            console.error('No articles data found');
            this.articlesContainer.innerHTML = '<p class="text-center text-light-green-700 col-span-full py-8">Keine Artikel verfügbar.</p>';
            return;
        }
        
        this.renderArticles();
        
        // Modal close handlers
        if (this.articleModalCloseBtn) {
            this.articleModalCloseBtn.addEventListener('click', () => {
                this.hideModal();
            });
        }

        if (this.articleModal) {
            this.articleModal.addEventListener('click', (e) => {
                if (e.target === this.articleModal) {
                    this.hideModal();
                }
            });
        }

        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.articleModal && !this.articleModal.classList.contains('hidden')) {
                this.hideModal();
            }
        });
    }

    renderArticles() {
        if (!this.articlesContainer) {
            console.error('Cannot render articles: container not found');
            return;
        }

        if (!articlesData || articlesData.length === 0) {
            this.articlesContainer.innerHTML = '<p class="text-center text-light-green-700 col-span-full py-8">Keine Artikel verfügbar.</p>';
            return;
        }
        
        // Sort articles by date (newest first)
        const sortedArticles = [...articlesData].sort((a, b) => new Date(b.date) - new Date(a.date));

        // Clear container first
        this.articlesContainer.innerHTML = '';

        // Render articles
        const articlesHTML = sortedArticles.map(article => `
            <article class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 transform hover:-translate-y-2 cursor-pointer article-card" data-article-id="${article.id}">
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3">
                        <span class="bg-light-green-100 text-light-green-700 px-3 py-1 rounded-full text-sm font-semibold">${article.category}</span>
                        <span class="text-sm text-light-green-600">${this.formatDate(article.date)}</span>
                    </div>
                    <h3 class="text-2xl font-bold text-light-green-800 mb-3">${article.title}</h3>
                    <p class="text-light-green-700 mb-4 leading-relaxed">${article.excerpt}</p>
                    <div class="flex items-center justify-between pt-4 border-t border-light-green-200">
                        <span class="text-sm text-light-green-600 flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            ${article.readTime} Lesezeit
                        </span>
                        <span class="text-light-green-600 font-semibold hover:text-light-green-800 transition-colors">Mehr lesen →</span>
                    </div>
                </div>
            </article>
        `).join('');

        // Set innerHTML
        this.articlesContainer.innerHTML = articlesHTML;

        // Add click handlers
        const articleCards = this.articlesContainer.querySelectorAll('.article-card');
        articleCards.forEach(card => {
            card.addEventListener('click', () => {
                const articleId = parseInt(card.dataset.articleId);
                this.showArticle(articleId);
            });
        });
    }

    showArticle(articleId) {
        const article = articlesData.find(a => a.id === articleId);
        if (!article) return;

        this.articleModalContent.innerHTML = `
            <div class="mb-6">
                <div class="flex items-center justify-between mb-4">
                    <span class="bg-light-green-100 text-light-green-700 px-3 py-1 rounded-full text-sm font-semibold">${article.category}</span>
                    <span class="text-sm text-light-green-600">${this.formatDate(article.date)} • ${article.readTime} Lesezeit</span>
                </div>
                ${article.content}
            </div>
        `;

        this.showModal();
    }

    showModal() {
        this.articleModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    hideModal() {
        this.articleModal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
        return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
    }
}

// ============================================
// CONTACT FORM
// ============================================
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.messageElement = document.getElementById('contactFormMessage');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        const formData = {
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            subject: document.getElementById('contactSubject').value,
            message: document.getElementById('contactMessage').value
        };

        // In einer echten Anwendung würde hier eine API-Anfrage stehen
        // Für jetzt zeigen wir nur eine Erfolgsmeldung
        this.showMessage('Vielen Dank für deine Nachricht! Wir melden uns bald bei dir.', 'success');
        this.form.reset();
    }

    showMessage(message, type) {
        if (!this.messageElement) return;

        this.messageElement.textContent = message;
        this.messageElement.className = `text-center text-sm mt-4 ${
            type === 'success' ? 'text-light-green-600' : 'text-red-600'
        }`;
        
        setTimeout(() => {
            this.messageElement.textContent = '';
        }, 5000);
    }
}

// ============================================
// FOOTER YEAR
// ============================================
function updateFooterYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ============================================
// INITIALIZATION
// ============================================
let articlesManagerInstance = null;

document.addEventListener('DOMContentLoaded', function () {
    // Initialisiere alle Module
    new BeerModal();
    new ABVCalculator();
    new SmoothScroll();
    new MobileMenu();
    new BackToTop();
    articlesManagerInstance = new ArticlesManager();
    new ContactForm();
    updateFooterYear();
});

