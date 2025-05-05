// Animazione al caricamento della pagina
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Smooth scrolling per i link di navigazione
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Chiudi il menu mobile se aperto
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animazione per le aree di attività durante lo scroll
    const attivitaItems = document.querySelectorAll('.attivita-item');
    
    const checkAttivita = function() {
        attivitaItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // Aggiungiamo la classe quando l'elemento entra nella viewport, ma non la rimuoviamo
            // Questo rende l'animazione più fluida e mantiene gli elementi visibili
            if (itemTop < windowHeight * 0.8) {
                item.classList.add('in-view');
            }
        });
    };
    
    // Controlla le aree di attività all'avvio
    checkAttivita();
    
    // Controlla le aree di attività durante lo scroll
    window.addEventListener('scroll', checkAttivita);
});
/*
// Inizializzazione della mappa Google
function initMap() {
    // Coordinate di Roma (sostituire con le coordinate esatte dello studio)
    const studioLocation = { lat: 41.9028, lng: 12.4964 };
    
    // Stile personalizzato per la mappa scura
    const darkMapStyle = [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
        },
        {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
        },
        {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
        },
        {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
        },
    ];
    
    // Creazione della mappa
    const map = new google.maps.Map(document.getElementById("map"), {
        center: studioLocation,
        zoom: 15,
        styles: darkMapStyle,
        disableDefaultUI: true,
    });
    
    // Aggiunta del marker per lo studio
    const marker = new google.maps.Marker({
        position: studioLocation,
        map: map,
        title: "Studio Legale ALESCI-GIANNACCARI",
    });
    
    // Aggiunta dell'evento click sulla mappa per aprire le indicazioni
    map.addListener("click", () => {
        window.open(
            `https://www.google.com/maps/dir/?api=1&destination=${studioLocation.lat},${studioLocation.lng}`,
            "_blank"
        );
    });
}

// Fallback per la mappa se l'API Google Maps non è disponibile
window.addEventListener('load', function() {
    const mapElement = document.getElementById('map');
    if (mapElement && typeof google === 'undefined') {
        mapElement.innerHTML = '<div style="height:100%;display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;">Clicca per visualizzare la mappa</div>';
        mapElement.style.cursor = 'pointer';
        mapElement.addEventListener('click', function() {
            window.open('https://www.google.com/maps/place/Roma/', '_blank');
        });
    }
});

// Animazione per il titolo dello studio (effetto di scrittura)
document.addEventListener('DOMContentLoaded', function() {
    const studioTitle = document.querySelector('.studio-title');
    
    if (studioTitle) {
        const originalText = studioTitle.textContent;
        studioTitle.textContent = '';
        studioTitle.style.opacity = '1';
        studioTitle.style.transform = 'translateY(0)';
        
        let i = 0;
        const typeWriter = function() {
            if (i < originalText.length) {
                studioTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
});*/