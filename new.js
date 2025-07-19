// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Theme toggle functionality
    const colorBtn = document.getElementById('colorBtn');
    const body = document.body;
    
    colorBtn.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        // Update button text based on current theme
        if (body.classList.contains('dark-theme')) {
            colorBtn.textContent = 'Light Theme';
        } else {
            colorBtn.textContent = 'Dark Theme';
        }
        
        // Add a small animation effect
        colorBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            colorBtn.style.transform = 'scale(1)';
        }, 100);
    });
    
    // Image click functionality
    const sampleImage = document.getElementById('sampleImage');
    const imageContainer = document.querySelector('.image-container');
    const imageCaption = document.querySelector('.image-caption');
    
    let imageIndex = 1;
    const maxImages = 10; // picsum has many images
    
    sampleImage.addEventListener('click', function() {
        // Cycle through different images
        imageIndex = (imageIndex % maxImages) + 1;
        
        // Add loading effect
        sampleImage.style.opacity = '0.5';
        imageCaption.textContent = 'Loading new image...';
        
        // Change image source
        sampleImage.src = `https://picsum.photos/400/300?random=${imageIndex}`;
        
        // Reset opacity and caption when image loads
        sampleImage.onload = function() {
            sampleImage.style.opacity = '1';
            imageCaption.textContent = 'Click the image to change it!';
        };
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover effect to content sections
    const textContent = document.querySelector('.text-content');
    
    textContent.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
    });
    
    textContent.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
    
    // Add a simple particle effect (optional)
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        
        // Random position
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = '100vh';
        
        document.body.appendChild(particle);
        
        // Animate particle
        let position = window.innerHeight;
        const speed = Math.random() * 2 + 1;
        
        const animateParticle = () => {
            position -= speed;
            particle.style.top = position + 'px';
            particle.style.opacity = position / window.innerHeight;
            
            if (position > -10) {
                requestAnimationFrame(animateParticle);
            } else {
                particle.remove();
            }
        };
        
        animateParticle();
    }
    
    // Create particles periodically
    setInterval(createParticle, 2000);
    
    // Console welcome message
    console.log('🎉 Website loaded successfully!');
    console.log('Features:');
    console.log('- Theme toggle');
    console.log('- Interactive image');
    console.log('- Smooth scrolling');
    console.log('- Particle effects');
});