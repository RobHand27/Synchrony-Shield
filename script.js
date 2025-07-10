// Smart Sanitizer Website JavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
    setupMobileNavigation();
    setupSmoothScrolling();
    setupDemoFunctionality();
    setupScrollAnimations();
    setupFormHandlers();
    setupLoadingAnimations();
}

// Mobile Navigation
function setupMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Smooth Scrolling
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll to Demo function (called from HTML)
function scrollToDemo() {
    const demoSection = document.querySelector('#demo');
    if (demoSection) {
        const offsetTop = demoSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Interactive Demo Functionality
function setupDemoFunctionality() {
    // Video upload functionality
    setupVideoUpload();
}



// Video Upload Functionality
function setupVideoUpload() {
    // Main demo video upload
    const videoUpload = document.getElementById('videoUpload');
    const videoPlayer = document.getElementById('videoPlayer');
    const uploadBtn = document.querySelector('.upload-btn');
    const videoInfo = document.querySelector('.video-info');
    
    if (videoUpload && videoPlayer) {
        setupSingleVideoUpload(videoUpload, videoPlayer, uploadBtn, videoInfo);
    }
    
    // Hero demo video upload
    const heroVideoUpload = document.getElementById('heroVideoUpload');
    const heroVideoPlayer = document.getElementById('heroVideoPlayer');
    const heroUploadBtn = document.querySelector('#hero-demo .upload-btn');
    const heroVideoInfo = document.querySelector('#hero-demo .video-info');
    
    if (heroVideoUpload && heroVideoPlayer) {
        setupSingleVideoUpload(heroVideoUpload, heroVideoPlayer, heroUploadBtn, heroVideoInfo);
    }
}

function setupSingleVideoUpload(videoUpload, videoPlayer, uploadBtn, videoInfo) {
    if (!videoUpload || !videoPlayer) return;
    
    // Make upload button trigger file input
    uploadBtn.addEventListener('click', function() {
        videoUpload.click();
    });
    
    videoUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        
        if (file && file.type.startsWith('video/')) {
            // Create object URL for the video
            const videoURL = URL.createObjectURL(file);
            
            // Set video source
            videoPlayer.src = videoURL;
            
            // Update upload button appearance
            uploadBtn.innerHTML = '<i class="fas fa-check"></i> Video Loaded';
            uploadBtn.style.background = '#28a745';
            uploadBtn.style.color = 'white';
            
            // Update video info
            videoInfo.innerHTML = `
                <p><strong>${file.name}</strong> (${(file.size / (1024 * 1024)).toFixed(2)} MB)</p>
            `;
            
            // Load and play video
            videoPlayer.load();
            videoPlayer.play().catch(error => {
                console.log('Auto-play prevented:', error);
            });
            
        } else {
            alert('Please select a valid video file.');
        }
    });
    
    // Drag and drop functionality for the video container
    const videoContainer = videoPlayer.closest('.video-container');
    
    videoContainer.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.border = '2px dashed #ffd700';
        this.style.background = '#fffef0';
    });
    
    videoContainer.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.style.border = 'none';
        this.style.background = 'var(--gray-100)';
    });
    
    videoContainer.addEventListener('drop', function(e) {
        e.preventDefault();
        this.style.border = 'none';
        this.style.background = 'var(--gray-100)';
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('video/')) {
                videoUpload.files = files;
                videoUpload.dispatchEvent(new Event('change'));
            } else {
                alert('Please select a valid video file.');
            }
        }
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .swot-card, .stat-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Form Handlers
function setupFormHandlers() {
    // CTA Button handlers
    const ctaButtons = document.querySelectorAll('.btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonText = this.textContent.trim();
            
            if (buttonText.includes('Demo') || buttonText.includes('Try')) {
                e.preventDefault();
                scrollToDemo();
            } else if (buttonText.includes('Contact')) {
                e.preventDefault();
                showContactModal();
            } else if (buttonText.includes('Download')) {
                e.preventDefault();
                showDownloadModal();
            }
        });
    });
}

// Contact Modal
function showContactModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Contact Us for a Full Demo</h2>
            <p>Get in touch with our team to schedule a comprehensive demo of PII Guard.</p>
            <form class="contact-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="company">Company</label>
                    <input type="text" id="company" name="company">
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Tell us about your data protection needs..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => modal.remove();
    
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.remove();
        }
    };
    
    // Form submission
    const form = modal.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showSuccessMessage('Thank you! We\'ll be in touch soon.');
        modal.remove();
    });
}



// Success Message
function showSuccessMessage(message) {
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Loading Animations
function setupLoadingAnimations() {
    // Add loading class to elements
    const loadingElements = document.querySelectorAll('.feature-card, .swot-card');
    loadingElements.forEach(el => {
        el.classList.add('loading');
    });
    
    // Trigger loading animation after a short delay
    setTimeout(() => {
        loadingElements.forEach(el => {
            el.classList.add('loaded');
        });
    }, 100);
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Add CSS for modals and notifications
const additionalStyles = `
    .modal {
        position: fixed;
        z-index: 2000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .modal-content {
        background-color: white;
        padding: 2rem;
        border-radius: 12px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
    }
    
    .close {
        position: absolute;
        right: 1rem;
        top: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
        color: #666;
    }
    
    .close:hover {
        color: #333;
    }
    
    .contact-form {
        margin-top: 1.5rem;
    }
    
    .form-group {
        margin-bottom: 1rem;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: #333;
    }
    
    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #dee2e6;
        border-radius: 8px;
        font-family: inherit;
        font-size: 1rem;
        transition: border-color 0.15s ease;
    }
    
    .form-group input:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #ffd700;
    }
    

    
    .notification {
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    }
    
    .notification.success {
        background: #28a745;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @media (max-width: 768px) {
        .download-options {
            grid-template-columns: 1fr;
        }
        
        .modal-content {
            margin: 1rem;
            width: calc(100% - 2rem);
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}



// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(function() {
    // Scroll event handling
}, 10));

// Download extension function
function downloadExtension() {
    // Prevent any popup behavior
    event.preventDefault();
    
    // Create a direct download link with specific attributes to bypass popups
    const link = document.createElement('a');
    link.href = 'Synchrony-PII-Filter.zip';
    link.download = 'Synchrony-PII-Filter.zip';
    link.type = 'application/octet-stream';
    link.style.display = 'none';
    
    // Add to DOM, click, and remove immediately
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Export functions for global access
window.scrollToDemo = scrollToDemo;
window.showContactModal = showContactModal;
window.downloadExtension = downloadExtension; 