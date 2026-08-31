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
// AJUSTAR AUTOMÁTICAMENTE EL SLIDER DE IMÁGENES
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.imagen-slider').forEach(function(slider) {
        const images = slider.querySelectorAll('.slider-img');
        const total = images.length;
        
        if (total === 0) return;
        
        // Si solo hay 1 imagen, mostrarla sin animación
        if (total === 1) {
            images[0].style.opacity = '1';
            images[0].style.animation = 'none';
            return;
        }
        
        // Calcular tiempos según el número de imágenes
        const duration = total * 4;  // 4s por imagen
        const interval = 4;          // 4s entre imágenes
        
        // Aplicar la animación
        images.forEach(function(img, index) {
            img.style.animation = `fadeSlide ${duration}s infinite`;
            img.style.animationDelay = `${index * interval}s`;
        });
    });
});
// ============================================
// CONSOLE LOG (para saber que el JS carga)
// ============================================
console.log('🚀 Portafolio cargado correctamente');