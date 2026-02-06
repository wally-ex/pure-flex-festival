// ============================================
// COUNTDOWN TIMER
// ============================================
function updateCountdown() {
    // Data do evento: 05/04/2026 às 14:00
    const eventDate = new Date('2026-04-05T14:00:00').getTime();
    // Fim da pré-venda
     const salesEndDate = new Date('2026-02-13T23:59:59').getTime();

    
    const now = new Date().getTime();
    const distance = salesEndDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        document.getElementById('countdown').innerHTML = '<p style="font-size: 2rem; color: var(--cor-primaria);">VENDAS ENCERRADAS!</p>';
    }
}

// Atualiza o countdown a cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observa todos os elementos com a classe fade-in
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// ============================================
// SMOOTH SCROLL PARA ÂNCORAS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// EFEITO PARALLAX NO HERO (OPCIONAL)
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ============================================
// FUNÇÕES EXTRAS 
// ============================================

// Exemplo: Validação de formulário
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Exemplo: Alternar tema (se quiser adicionar modo claro)
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

// Console log para confirmar que o JS foi carregado
console.log('🎵 TRAP FEST - JavaScript carregado com sucesso!');
