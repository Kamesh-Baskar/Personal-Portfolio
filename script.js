const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};


document.querySelectorAll('.navlist a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); 
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const typingText = "Web Developer"; 
let j = 0; 
const typeDelay = 150; 
const titleElement = document.querySelector('.home-text h3'); 

function typeEffect() {
    if (j < typingText.length) {
        titleElement.textContent += typingText[j++]; 
        setTimeout(typeEffect, typeDelay); 
    }
}


typeEffect();


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navlist a');

window.addEventListener('scroll', () => {
    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});


const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;


const darkModeStyles = document.createElement('style');
darkModeStyles.textContent = `
    body.dark-mode {
        background-color: #121212;
        color: #ffffff;
    }
    body.dark-mode header, 
    body.dark-mode .navlist, 
    body.dark-mode .end {
        background-color: #1f1f1f;
    }
    body.dark-mode a {
        color:rgb(182, 183, 184);
    }
    body.dark-mode .progress-bar {
        background-color:rgb(232, 221, 221);
    }
`;
document.head.appendChild(darkModeStyles);


darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('bx-moon', 'bx-sun'); 
    } else {
        icon.classList.replace('bx-sun', 'bx-moon'); 
    }
});

const form = document.querySelector('.contact-form form');

form.addEventListener('submit', (e) => {
    const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = form.querySelector('input[placeholder="Your Email Address"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    
    if (!name || !email || !message) {
        e.preventDefault();
        alert("All fields are required!");
        return; 
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        e.preventDefault();
        alert("Please enter a valid email address!");
        return; 
    }

    
    e.preventDefault();
    
    alert("Message Sent successfully!");
});


document.querySelector('.last-text p').innerHTML = `Copyright © ${new Date().getFullYear()} by Kamesh Baskar. All Rights Reserved.`;
