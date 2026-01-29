// Aggressive Navigation Fix for Village Bakery (Overrides React)
(function() {
    'use strict';
    
    console.log('[Nav Fix v3] Loaded');
    
    // Function to find and scroll to a section
    function scrollToText(searchTexts, offset = 100) {
        const allText = document.body.innerText;
        
        for (const text of searchTexts) {
            if (allText.includes(text)) {
                const elements = document.querySelectorAll('*');
                for (const el of elements) {
                    if (el.children.length === 0 && el.textContent.trim().includes(text)) {
                        const section = el.closest('section') || el.parentElement;
                        if (section) {
                            const y = section.getBoundingClientRect().top + window.pageYOffset - offset;
                            window.scrollTo({top: y, behavior: 'smooth'});
                            console.log('[Nav Fix v3] Scrolled to:', text);
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
    
    // Continuously monitor and fix navigation links
    setInterval(() => {
        const links = document.querySelectorAll('a');
        
        links.forEach(link => {
            const text = link.textContent.trim();
            
            // Skip if already fixed
            if (link.dataset.navFixed === 'v3') return;
            
            // Skip external and tel links
            if (link.href && (link.href.startsWith('tel:') || link.href.startsWith('http') && !link.href.includes(window.location.hostname))) {
                return;
            }
            
            switch(text) {
                case 'MENU':
                case 'Menu':
                    link.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        scrollToText(['Our Menu', 'Big Breakfasts', 'Purbrook Porker']);
                        return false;
                    };
                    link.dataset.navFixed = 'v3';
                    console.log('[Nav Fix v3] Fixed MENU link');
                    break;
                    
                case 'CHALLENGE':
                case 'Challenge':
                    link.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        scrollToText(['The Monthly Challenge', 'Big plates', 'Big flavours']);
                        return false;
                    };
                    link.dataset.navFixed = 'v3';
                    console.log('[Nav Fix v3] Fixed CHALLENGE link');
                    break;
                    
                case 'CONTACT':
                case 'Contact':
                case 'CONTACT US':
                    link.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        scrollToText(['Visit Us', '142 London Road', 'Address:', 'Phone: 07840']);
                        return false;
                    };
                    link.dataset.navFixed = 'v3';
                    console.log('[Nav Fix v3] Fixed CONTACT link');
                    break;
                    
                case 'ABOUT':
                case 'About':
                    link.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        scrollToText(['Family-Run Café', 'Community First', 'Purbrook, Hampshire']);
                        return false;
                    };
                    link.dataset.navFixed = 'v3';
                    console.log('[Nav Fix v3] Fixed ABOUT link');
                    break;
                    
                case 'ORDER NOW':
                case 'Order Now':
                    link.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        scrollToText(['Order online', 'Just Eat', 'Uber Eats', 'Order Online']);
                        return false;
                    };
                    link.dataset.navFixed = 'v3';
                    console.log('[Nav Fix v3] Fixed ORDER NOW link');
                    break;
            }
        });
    }, 500); // Check every 500ms
    
    console.log('[Nav Fix v3] Monitoring started');
})();
