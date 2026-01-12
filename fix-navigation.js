// Fix Navigation Links for Village Bakery Website
(function() {
    'use strict';
    
    function fixNavigationLinks() {
        console.log('Fixing navigation links...');
        
        // Enable smooth scrolling
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Find all navigation links
        const navLinks = document.querySelectorAll('nav a, header a');
        
        navLinks.forEach(link => {
            const text = link.textContent.trim().toLowerCase();
            
            // Skip external links
            if (link.href && (link.href.includes('http') && !link.href.includes(window.location.hostname))) {
                return;
            }
            
            // Handle different navigation items
            switch(text) {
                case 'about':
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const aboutSection = findSectionByText(['Family-Run Café', 'Community First', 'Purbrook, Hampshire']);
                        if (aboutSection) {
                            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    });
                    break;
                    
                case 'menu':
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const menuSection = findSectionByText(['Our Menu', 'Big Breakfasts']);
                        if (menuSection) {
                            menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    });
                    break;
                    
                case 'buffets':
                    link.addEventListener('click', (e) => {
                        // Check if buffets.html exists
                        if (window.location.pathname.includes('buffets')) {
                            return; // Already on buffets page
                        }
                        // Try to navigate to buffets page
                        const buffetsPage = '/buffets.html';
                        window.location.href = buffetsPage;
                    });
                    break;
                    
                case 'challenge':
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const challengeSection = findSectionByText(['Monthly Challenge', 'Big plates']);
                        if (challengeSection) {
                            challengeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    });
                    break;
                    
                case 'contact':
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const contactSection = findSectionByText(['Visit Us', '142 London Road', 'Opening Times']);
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        } else {
                            // Scroll to footer
                            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                        }
                    });
                    break;
                    
                case 'order now':
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const orderSection = findSectionByText(['Order online', 'Just Eat', 'Uber Eats']);
                        if (orderSection) {
                            orderSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    });
                    break;
            }
        });
        
        // Fix delivery buttons to have proper links
        fixDeliveryButtons();
        
        console.log('Navigation links fixed successfully');
    }
    
    function findSectionByText(searchTexts) {
        const allElements = document.querySelectorAll('section, div, h1, h2, h3');
        
        for (const searchText of searchTexts) {
            for (const element of allElements) {
                if (element.textContent.includes(searchText)) {
                    // Return the parent section or the element itself
                    return element.closest('section') || element.parentElement || element;
                }
            }
        }
        
        return null;
    }
    
    function fixDeliveryButtons() {
        // Find all buttons and links related to delivery services
        const allButtons = document.querySelectorAll('button, a');
        
        allButtons.forEach(button => {
            const text = button.textContent.trim().toLowerCase();
            
            if (text.includes('just eat')) {
                // Add Just Eat link if not already set
                if (button.tagName === 'BUTTON') {
                    button.style.cursor = 'pointer';
                    button.addEventListener('click', () => {
                        window.open('https://www.just-eat.co.uk/restaurants-village-bakery-cafe-waterlooville/menu', '_blank');
                    });
                } else if (button.tagName === 'A' && !button.href.includes('just-eat')) {
                    button.href = 'https://www.just-eat.co.uk/restaurants-village-bakery-cafe-waterlooville/menu';
                    button.target = '_blank';
                    button.rel = 'noopener noreferrer';
                }
            }
            
            if (text.includes('uber eats')) {
                // Add Uber Eats link if not already set
                if (button.tagName === 'BUTTON') {
                    button.style.cursor = 'pointer';
                    button.addEventListener('click', () => {
                        window.open('https://www.ubereats.com/gb/store/village-bakery-%26-cafe/IpH8dXGhQD2kQqkGAJmJYA', '_blank');
                    });
                } else if (button.tagName === 'A' && !button.href.includes('ubereats')) {
                    button.href = 'https://www.ubereats.com/gb/store/village-bakery-%26-cafe/IpH8dXGhQD2kQqkGAJmJYA';
                    button.target = '_blank';
                    button.rel = 'noopener noreferrer';
                }
            }
        });
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fixNavigationLinks);
    } else {
        fixNavigationLinks();
    }
    
    // Also run after a short delay to catch dynamically loaded content
    setTimeout(fixNavigationLinks, 500);
    setTimeout(fixNavigationLinks, 1000);
})();
