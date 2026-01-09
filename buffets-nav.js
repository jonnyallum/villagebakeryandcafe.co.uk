// Add Buffets link to main navigation
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    function addBuffetsLink() {
        // Find the navigation menu - it's in the header
        const nav = document.querySelector('nav');
        if (!nav) {
            console.log('Navigation not found, retrying...');
            setTimeout(addBuffetsLink, 100);
            return;
        }
        
        // Find all navigation links
        const navLinks = nav.querySelectorAll('a');
        if (navLinks.length === 0) {
            console.log('No nav links found, retrying...');
            setTimeout(addBuffetsLink, 100);
            return;
        }
        
        // Check if Buffets link already exists
        const existingBuffetsLink = Array.from(navLinks).find(link => 
            link.textContent.toLowerCase().includes('buffet')
        );
        
        if (existingBuffetsLink) {
            console.log('Buffets link already exists');
            return;
        }
        
        // Find the Menu link to insert Buffets after it
        const menuLink = Array.from(navLinks).find(link => 
            link.textContent.toLowerCase().includes('menu')
        );
        
        if (!menuLink) {
            console.log('Menu link not found');
            return;
        }
        
        // Create the Buffets link
        const buffetsLink = document.createElement('a');
        buffetsLink.href = '/buffets.html';
        buffetsLink.textContent = 'Buffets';
        buffetsLink.className = menuLink.className;
        
        // Insert after Menu link
        menuLink.parentNode.insertBefore(buffetsLink, menuLink.nextSibling);
        
        console.log('Buffets link added successfully');
    }
    
    // Try to add the link when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addBuffetsLink);
    } else {
        addBuffetsLink();
    }
})();
