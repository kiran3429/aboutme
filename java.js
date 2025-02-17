function change() 
{
    const aboutMeTexts = ["Software developer","Data Scientist", "Full Stack Web Developer"];
    const typingSpeed = 100; 
    const eraseSpeed = 50; 
    const pauseTime = 500; 
    const aboutMeElement = document.querySelector('.my-intro');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    function type() 
    {
        const currentText = aboutMeTexts[textIndex];
        if (!isDeleting && charIndex < currentText.length) 
        {
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        }
        else if (isDeleting && charIndex > 0) {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        } 
        else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type, pauseTime);
        }
    }
    type();
}
change();

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("pm1");
    const openModalBtns = document.querySelectorAll(".more-info");
    const closeModalBtn = document.querySelector(".close");

    openModalBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
        });
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("pm2");
    const openModalBtns = document.querySelectorAll(".more-info1");
    const closeModalBtn = document.querySelector(".close1");

    openModalBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
        });
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("pm4");
    const openModalBtns = document.querySelectorAll(".more-info3");
    const closeModalBtn = document.querySelector(".close3");

    openModalBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
        });
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("pm3");
    const openModalBtns = document.querySelectorAll(".more-info2");
    const closeModalBtn = document.querySelector(".close2");

    openModalBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
        });
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("pm5");
    const openModalBtns = document.querySelectorAll(".more-info4");
    const closeModalBtn = document.querySelector(".close4");

    openModalBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
        });
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
document.getElementById("whatsapp").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("pform").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("pform").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let message = `Hello, my name is ${name} and would like to get in touch with you.`;
    
    let whatsappUrl = `https://wa.me/7338189666?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
});
document.getElementById("da-mode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
document.getElementById("li-mode").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});