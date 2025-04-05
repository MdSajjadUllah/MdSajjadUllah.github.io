



document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.getElementById("read-more-btn");
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more-text");

    readMoreBtn.addEventListener("click", function(event) {
        event.preventDefault(); 

        if (moreText.style.display === "none") {
            moreText.style.display = "inline";
            dots.style.display = "none";
            readMoreBtn.textContent = "Read Less";
        } else {
            moreText.style.display = "none";
            dots.style.display = "inline";
            readMoreBtn.textContent = "Read More";
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    console.log("🚀 Script Loaded: Contact Form Ready");

    emailjs.init("5tf1M3gzGZCHd6IcB");  

    const form = document.getElementById("contact-form");

    if (!form) {
        console.error("❌ Form not found!");
        return;
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        console.log("📝 Submitting Form...");

        emailjs.sendForm("service_46md2zv", "template_rrw7m2c", this)
        .then(function(response) {
            alert("✅ Message sent successfully!");
            console.log("✅ EmailJS Response:", response);
            form.reset();
        }, function(error) {
            alert("❌ Failed to send message. Check console.");
            console.error("❌ EmailJS Error:", error);
        });
    });
});




    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });


    document.addEventListener("DOMContentLoaded", function() {
        var typed = new Typed(".multiple-text", {
            strings: ["Web Developer", "Ui/Ux Designer"],
            typeSpeed: 100,
            backSpeed: 50,
            startDelay: 500,
            backDelay: 3000, // 3-second hold on each text
            fadeOut: true, // Enables smooth fade-out effect
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500,
            loop: true,
            showCursor: false // Hides the blinking cursor
        });
    });
    
    
    document.addEventListener("DOMContentLoaded", function () {
        const menuIcon = document.getElementById("menu-icon");
        const navbar = document.querySelector(".navbar");
    
        menuIcon.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });
    });

    


    document.addEventListener("DOMContentLoaded", function () {
        const menuIcon = document.getElementById("menu-icon");
        const navbar = document.querySelector(".navbar");
        const navLinks = document.querySelectorAll(".navbar a");
    
        
        menuIcon.addEventListener("click", function () {
            navbar.classList.toggle("active"); 
        });
    
        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                if (window.innerWidth <= 768) {
                    navbar.classList.remove("active"); 
                }
    
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            });
        });
    });

    
    document.addEventListener("DOMContentLoaded", function () {
        const menuIcon = document.getElementById("menu-icon");
        const navbar = document.querySelector(".navbar");
    
        menuIcon.addEventListener("click", function () {
            navbar.classList.toggle("active"); 
        });
    });
    

