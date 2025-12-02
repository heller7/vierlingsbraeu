# Vierlingsbräu Website

Website der Hobbybrauerei Vierlingsbräu.

## Projektstruktur

```
vierlingsbraeu/
├── index.html          # Haupt-HTML-Datei
├── js/
│   ├── app.js          # Haupt-JavaScript-Datei (alle Funktionalität)
│   └── tailwind.config.js # Tailwind CSS Konfiguration
├── styles.css          # Legacy CSS (wird durch Tailwind ersetzt)
└── [Bilder]            # iv_one.jpeg, iv_two.jpeg, logo.ico, etc.
```

## Entwicklung

### Neue Biere hinzufügen

1. Öffne `js/app.js`
2. Finde das `beerData` Objekt und füge ein neues Bier hinzu:

```javascript
3: {
    name: 'IV.3',
    description: 'Beschreibung...',
    image: 'iv_three.jpeg',
    alcohol: '5.5%',
    gravity: '12.0°'
}
```

3. Füge eine neue Beer-Card in `index.html` im `#beers` Section hinzu:

```html
<div class="beer-card" data-beer-id="3">
    <img src="iv_three.jpeg" alt="IV.3" class="w-full h-64 object-cover rounded-t-lg cursor-pointer">
    <div class="p-4 bg-light-green-200 rounded-b-lg">
        <h3 class="text-2xl font-bold mb-2">IV.3</h3>
        <p>Beschreibung...</p>
    </div>
</div>
```

### Neue Tools hinzufügen

1. Öffne `js/app.js`
2. Erstelle eine neue Klasse (z.B. `NewTool`)
3. Initialisiere sie in der `DOMContentLoaded` Event-Listener am Ende der Datei

### Neue Sektionen hinzufügen

1. Füge einen neuen Abschnitt in `index.html` hinzu
2. Füge einen Link in der Navigation hinzu
3. Verwende die gleiche Struktur wie bestehende Sektionen

## Technologien

- **Tailwind CSS** - Utility-first CSS Framework
- **Vanilla JavaScript** - Funktioniert ohne Server
- **HTML5** - Semantisches Markup

## Browser-Kompatibilität

Die Website funktioniert direkt beim Öffnen der `index.html` Datei - kein Server erforderlich! Alle JavaScript-Funktionalität ist in `js/app.js` gebündelt.

