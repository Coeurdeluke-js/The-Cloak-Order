document.addEventListener('DOMContentLoaded', function() {
    // Apply fade-in to body
    document.body.classList.add('fade-in');
    
    // Find fade-in elements and apply loaded class after a small delay
    setTimeout(() => {
        const fadeElements = document.querySelectorAll('.fade-in-element');
        fadeElements.forEach(element => {
            element.classList.add('loaded');
        });
    }, 100);
    
    // Handle index page elements
    const container = document.querySelector('.container');
    const toggleSwitch = document.querySelector('.toggle-switch');
    
    // Handle member/public page elements
    const memberCard = document.querySelector('.member-card');
    const publicCard = document.querySelector('.public-card');
    
    // Set up navigation with fade out effect
    setupNavigation();
    
    // Set up toggle switch if it exists
    if (toggleSwitch) {
        setupToggleSwitch(toggleSwitch);
    }
    
    function setupNavigation() {
        // Index page links
        const loginLinks = document.querySelectorAll('.login-form a');
        if (loginLinks.length > 0) {
            loginLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    fadeOutAndNavigate(container, link.href);
                });
            });
        }
        
        // Back links from member page
        const backLinkMember = memberCard ? memberCard.querySelector('a') : null;
        if (backLinkMember) {
            backLinkMember.addEventListener('click', function(event) {
                event.preventDefault();
                fadeOutAndNavigate(memberCard, backLinkMember.href);
            });
        }
        
        // Back links from public page
        const backLinkPublic = publicCard ? publicCard.querySelector('a') : null;
        if (backLinkPublic) {
            backLinkPublic.addEventListener('click', function(event) {
                event.preventDefault();
                fadeOutAndNavigate(publicCard, backLinkPublic.href);
            });
        }
    }
    
    function fadeOutAndNavigate(element, destination) {
        element.style.opacity = '0';
        setTimeout(() => {
            window.location.href = destination;
        }, 800);
    }
    
    function setupToggleSwitch(toggleSwitch) {
        const lockIcon = toggleSwitch.querySelector('.fa-lock');
        const globeIcon = toggleSwitch.querySelector('.fa-globe');
        
        toggleSwitch.addEventListener('click', function() {
            toggleSwitch.classList.toggle('active');
            
            if (toggleSwitch.classList.contains('active')) {
                globeIcon.style.color = '#ec4d58';
                globeIcon.style.transform = 'scale(1.2)';
                lockIcon.style.color = '#888';
                lockIcon.style.transform = 'scale(1)';
                
                fadeOutAndNavigate(container, 'public.html');
            } else {
                lockIcon.style.color = '#ec4d58';
                lockIcon.style.transform = 'scale(1.2)';
                globeIcon.style.color = '#888';
                globeIcon.style.transform = 'scale(1)';
            }
        });
    }
});