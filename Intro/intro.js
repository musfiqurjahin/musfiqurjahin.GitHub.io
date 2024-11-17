//style element
const style = document.createElement('style');

// CSS code as string
style.innerHTML = `
        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap");

* {
    font-family: "VT323", monospace;
    text-decoration: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1 {
    color: rgb(0, 0, 0);
    font-size: 2.5em;
    font-weight: bolder;
    word-spacing: -2px;
    text-shadow:
    /*1X*/
    -1px -1px 0 white,  
    1px -1px 0 white,
    -1px  1px 0 white,
    1px  1px 0 white,
    /*2X*/
    -2px -2px 0 white,  
    2px -2px 0 white,
    -2px  2px 0 white,
    2px  2px 0 white,
    /*3X*/
    -3px -3px 0 white,  
    3px -3px 0 white,
    -3px  3px 0 white,
    3px  3px 0 white ;
}  
h1:hover{
    transform: scaleX(2.2);
    transform: scaleY(2.2);
    transform: scaleZ(2.2);
}           

body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000000;
    overflow: hidden;
}

/*pulse effect before fade out */
body::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: #000000;
    opacity: 0.8;
    animation: pulseFadeOut 3s ease forwards;
    z-index: -1;
}

@keyframes pulseFadeOut {
    0% {
        opacity: 0.8;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.1);
    }
    100% {
        opacity: 0;
        transform: scale(1);
    }
}

.card {
    position: relative;
    width: 300px;
    height: 400px;
    background: #ffffff;
    border: 2px solid #cccccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    text-align: center;
    word-spacing: -0.2em;
}

.card-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 9;
    padding-top: 10px;
}

.follow-btn, .message-btn {
    background: linear-gradient(45deg, #007bff, #0056b3);
    color: #ffffff;
    border: 2px solid #004494;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.follow-btn i, .message-btn i {
    margin-right: 8px;
}

.follow-btn:hover, .message-btn:hover {
    background: linear-gradient(45deg, #0056b3, #003a7d);
    transform: translateY(-3px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
}

.follow-btn:active, .message-btn:active {
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* Shine animation effect */
.follow-btn::before, .message-btn::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -50%; 
    width: 45%;
    height: 200%;
    background: rgba(255, 255, 255, 0.3);
    transform: skewX(-30deg);
    transition: transform 0.2s ease;
}

.follow-btn:hover::before, .message-btn:hover::before {
    animation: shine 0.5s ease forwards;
}

@keyframes shine {
    0% {
        left: -50%;
    }
    50% {
        left: 50%;
    }
    100% {
        left: 150%;
    }
}
.card-btn {
    width: 35px;
    height: 35px;
    background: #007bff;
    border-radius: 50%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    z-index: 10;
    transition: transform 0.2s ease, background 0.2s ease;
}

.card-btn:hover {
    transform: translateX(-50%) scale(1.1);
    background: #0056b3;
}

.card-slide {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    padding-top: 30px;
    bottom: -100%;
    overflow: auto;
    left: 0;
    transition: 0.5s ease-in-out;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.card-slide::-webkit-scrollbar {
    display: none;
}

.card-slide h1 {
    font-size: 25px;
    font-weight: 600;
    color: #007bff;
    word-spacing: -0.1em;
}

.social-icons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 20px;
}

.social-icons a {
    background: #007bff;
    padding: 15px;
    margin: 10px 10px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    font-size: 17px;
    font-weight:lighter;
    color: #ffffff;
    transition: 0.5s ease;
}

.social-icons a:hover {
    background: #0056b3;
    transform: scale(1.1);
}

.card-slide.show {
    bottom: 0;
}

.card-top {
    position: relative;
    width: 100%;
    height: 100%;
    background: url(../root_modules/Profile/Profile_pic.webp);
    background-size: cover;
    background-position: center;
    color: #333333;
}

.card-text {
    width: 100%;
    position: absolute;
    left: 50%;
    bottom: 25%;
    transform: translateX(-50%);
}

.card-text h2 {
    font-size: 30px;
    color: #333333;
    text-shadow: none;
}

.verified-badge {
    width: 35px;
    height: 35px;
    vertical-align: middle;
    position: relative;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    margin-left: -10px;
    border-radius: 50%;
    border: none;
    background-color: none;
}

.verified-badge::after {
    content: '';
    position: absolute;
    top: 2px; 
    left: 2px; 
    right: 2px; 
    bottom: 2px; 
    background-color: black;
    border-radius: 50%;
}


.verified-badge-container {
    position: relative;
    display: inline-block;
}

.verified-text {
    visibility: hidden;
    background-color: #ffffff;
    color: #007bff;
    text-align: center;
    font-size: 15px;
    font-weight: bolder;
    padding: 5px;
    border: 2px solid #001eff;
    border-radius: 10px;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
}

.verified-badge:active + .verified-text {
    visibility:visible;
    opacity: 1;
}

.verified-badge:active {
    animation: bounce 0.4s ease-in-out;
}
/* Keyframes for the bounce animation */
@keyframes bounce {
0% {
    transform: scale(1);
    }
30% {
    transform: scale(1.3);
    }
50% {
    transform: scale(0.9);
    }
100% {
    transform: scale(1);
    }                                                 
}
.title {
    display: inline-flex;
    color: #ffffff;
    align-items: center;
    background: rgb(0,0,0,0.9);
    border: 2px solid #cccccc;
    border-radius: 5px;
    padding: 3px 8px;
    margin: 0 5px;
    box-shadow: 0 0 5px rgba(255, 0, 0, 0.1);
    transition: transform 0.3s;
    font-size: 14px;
    cursor: pointer;
}

.title:hover {
    transform: scale(1.2);
}

.card-text p {
    margin-top: 10px;
}
.fa-shake {
    animation-duration: 3s;
    transition: animation-duration 0.2s;
}

.fa-shake:hover {
    animation:none;
    transform: rotate(5deg);
}
.fa-spin {
    animation-duration: 5s;
}
`;
// Append the style element to the head
document.head.appendChild(style);

// Add HTML dynamically
document.body.innerHTML = `
    <div class="card">
      <div class="card-top">
        <div class="card-text">
            <h1>Musfiqur Jahin
                <div class="verified-badge-container">
                    <img src="../root_modules/Verified/Verified(b-1).png" alt="Verified Badge" class="verified-badge">
                    <span class="verified-text">Verified</span>
                </div>
            </h1>  
            <p>
            <!---->
                
                <span class="title">
                    <i class="fa-solid fa-microchip"></i> Technophile
                </span>
                &nbsp;
                <span class="title">
                    <i class="fas fa-code"></i> Programmer
                </span>
            </p>
            
        </div>
        <div class="card-btn">
            <i class="fas fa-chevron-up"></i>
        </div>
      </div>

      <div class="card-bottom">
        <a href="https://www.facebook.com/musfiqurjahin.official?sk=followers" target="_blank" class="follow-btn">
          <i class="fa-solid fa-user-plus fa-shake"></i> Follow
        </a>
        <button class="message-btn">
          <i class="fa-solid fa-globe fa-spin" ></i>WEB
        </button>
      </div>
      

      <div class="card-slide">
        <h1>Social Links:</h1>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/musfiqurjahin"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://instagram.com/musfiqur_jahin"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://facebook.com/musfiqurjahin"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://github.com/musfiqurjahin"><i class="fa-brands fa-github"></i></a>
          <a href="https://x.com/musfiqur_jahin"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.threads.net/@musfiqur_jahin"><i class="fa-brands fa-threads"></i></a>
          <a href="https://wa.me/8801701630977"><i class="fa-brands fa-whatsapp"></i></a>
          <a href="https://youtube.com/@musfiqurjahin"><i class="fa-brands fa-youtube"></i></a>
          <a href="https://t.me/musfiqurjahin"><i class="fa-brands fa-telegram"></i></a>
          <a href="mailto:musfiqur.jahin@gmail.com"><i class="fa-solid fa-envelope"></i></a>
          <a href="tel:+8801701630977"><i class="fa-solid fa-phone"></i></a>
          <a href="https://musfiqurjahin.github.io/"><i class="fa-solid fa-globe"></i></a>
        </div>
        <div style="height: 100px;"></div>
      </div>
    </div>
`;

//Script.js:
let btn = document.querySelector(".card-btn");
let cardSlide = document.querySelector(".card-slide");

btn.addEventListener("click", () => {
cardSlide.classList.toggle("show");

let btnIcon = btn.querySelector("i");
if (btnIcon.classList.contains("fa-chevron-down")) {
btnIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
} else {
btnIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
}
});

// Function to load a JavaScript file dynamically
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(src + ' loaded successfully');
        script.onerror = () => reject(new Error('Failed to load script: ' + src));
        document.head.appendChild(script);
    });
}

// Array of script URLs
const scripts = ['../../Block-DevTools/index.js', '../../Clipboard-Blocker/index.js', '../../Disable-Image-Dragging/index.js'];

// Load all scripts
Promise.all(scripts.map(loadScript))
    .then(messages => {
        messages.forEach(message => console.log(message));
        console.log("All scripts loaded successfully!");
    })
    .catch(error => console.error(error));
