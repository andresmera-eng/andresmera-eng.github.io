// ============================================
// RESALTAR PÁGINA ACTIVA EN EL MENÚ
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el nombre del archivo actual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Seleccionar todos los enlaces del menú
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        // Obtener el href del enlace
        const linkHref = link.getAttribute('href');
        
        // Si el href coincide con la página actual, añadir clase 'active'
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
        
        // Caso especial: index.html (la home)
        if (currentPage === '' || currentPage === 'index.html') {
            if (linkHref === 'index.html') {
                link.classList.add('active');
            }
        }
    });
});

// ============================================
// CONSOLE LOG (para saber que el JS carga)
// ============================================
console.log('🚀 Portafolio cargado correctamente');