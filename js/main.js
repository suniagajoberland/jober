// Inicializar Iconos Lucide
        lucide.createIcons();

        // Manejo del menú móvil
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const sidebar = document.getElementById('sidebar');

        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
        });

        // Navegación Dinámica entre Secciones
        const navItems = document.querySelectorAll('.nav-item');
        const sections = document.querySelectorAll('.section-content');

        function navigateTo(targetSectionId) {
            // Ocultar todas las secciones
            sections.forEach(sec => sec.classList.add('hidden'));

            // Mostrar la sección requerida
            const targetSec = document.getElementById(`sec-${targetSectionId}`);
            if (targetSec) {
                targetSec.classList.remove('hidden');
            }

            // Actualizar estilo activo en el Menú
            navItems.forEach(item => {
                if (item.getAttribute('data-section') === targetSectionId) {
                    item.classList.add('nav-active');
                } else {
                    item.classList.remove('nav-active');
                }
            });

            // En móvil, cerrar sidebar al hacer clic
            if (window.innerWidth < 768) {
                sidebar.classList.add('-translate-x-full');
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Listener para los ítems de navegación
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.getAttribute('data-section');
                navigateTo(section);
            });
        });

        // Filtro interactivo de Proyectos
        const filterBtns = document.querySelectorAll('#projectFilters button');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Estilo botones
                filterBtns.forEach(b => {
                    b.className = "px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-gray-400 hover:text-white";
                });
                btn.className = "px-3 py-1.5 rounded-lg text-xs font-medium bg-neon-cyan/20 border border-neon-cyan text-neon-cyan";

                const filter = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const categories = card.getAttribute('data-category');
                    if (filter === 'all' || categories.includes(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Acción Cotizar Servicio
        function requestService(serviceName) {
            navigateTo('contact');
            const serviceSelect = document.getElementById('serviceSelect');
            if (serviceSelect) {
                serviceSelect.value = serviceName;
            }
        }

        // Formulario de Contacto (Simulación)
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('¡Gracias! Tu mensaje ha sido enviado correctamente.');
            contactForm.reset();
        });

        // Custom Toast Box
        function showToast(message) {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toastMsg');
            toastMsg.innerText = message;
            toast.classList.remove('hidden');

            setTimeout(() => {
                toast.classList.add('hidden');
            }, 4000);
        }

        // Buscador Global Básico
        const globalSearch = document.getElementById('globalSearch');
        globalSearch.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                const query = e.target.value.toLowerCase().trim();
                if (query.includes('skill') || query.includes('habilidad') || query.includes('react') || query.includes('node')) {
                    navigateTo('skills');
                } else if (query.includes('cv') || query.includes('experiencia') || query.includes('curriculum') || query.includes('educacion') || query.includes('certific')) {
                    navigateTo('cv');
                } else if (query.includes('proyect') || query.includes('trabajo') || query.includes('demo')) {
                    navigateTo('projects');
                } else if (query.includes('servici') || query.includes('precio') || query.includes('cotiz')) {
                    navigateTo('services');
                } else {
                    navigateTo('overview');
                }
            }
        });
