// Enhanced Navigation Fix for Village Bakery Website (React Compatible)
(function() {
    'use strict';
    
    console.log('[Navigation] Script loaded');
    
    function setupNavigation() {
        console.log('[Navigation] Setting up navigation...');
        
        // Enable smooth scrolling
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Wait for React to render
        setTimeout(() => {
            attachNavigationHandlers();
        }, 1000);
        
        // Also attach on any DOM changes (React re-renders)
        const observer = new MutationObserver(() => {
            attachNavigationHandlers();
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    function attachNavigationHandlers() {
        // Find all navigation links
        const navLinks = document.querySelectorAll('nav a, header a, [role="navigation"] a');
        
        navLinks.forEach(link => {
            const text = link.textContent.trim().toLowerCase();
            
            // Skip if already processed
            if (link.dataset.navProcessed) {
                return;
            }
            link.dataset.navProcessed = 'true';
            
            // Skip external links
            if (link.href && (link.href.includes('http') && !link.href.includes(window.location.hostname))) {
                return;
            }
            
            // Skip tel: links
            if (link.href && link.href.startsWith('tel:')) {
                return;
            }
            
            console.log('[Navigation] Processing link:', text);
            
            // Handle different navigation items
            if (text === 'menu') {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection(['Our Menu', 'Big Breakfasts', 'Purbrook Porker', 'Full English']);
                }, true);
            } else if (text === 'challenge') {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection(['The Monthly Challenge', 'Monthly Challenge', 'Big plates', 'Big flavours']);
                }, true);
            } else if (text === 'contact' || text === 'contact us') {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection(['Visit Us', '142 London Road', 'Opening Times', 'Phone:', '07840']);
                }, true);
            } else if (text === 'about') {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection(['Family-Run Café', 'Community First', 'Purbrook, Hampshire']);
                }, true);
            } else if (text === 'order now') {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection(['Order online', 'Just Eat', 'Uber Eats', 'Order Online']);
                }, true);
            }
        });
    }
    
    function scrollToSection(searchTexts) {
        console.log('[Navigation] Searching for section:', searchTexts);
        
        const allElements = document.querySelectorAll('section, div, h1, h2, h3, p, span');
        
        for (const searchText of searchTexts) {
            for (const element of allElements) {
                if (element.textContent.includes(searchText)) {
                    console.log('[Navigation] Found section:', searchText);
                    
                    // Find the best parent to scroll to
                    const scrollTarget = element.closest('section') || element.parentElement || element;
                    
                    // Calculate offset for header
                    const offset = 100;
                    const elementPosition = scrollTarget.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    
                    // Scroll to position
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    return true;
                }
            }
        }
        
        console.log('[Navigation] Section not found');
        return false;
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupNavigation);
    } else {
        setupNavigation();
    }
    
    console.log('[Navigation] Script initialized');
})();
