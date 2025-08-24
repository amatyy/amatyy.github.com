let currentLang = localStorage.getItem("currentLang") || "pl";

let languages = {
    "pl": document.querySelector(".polish"),
    "en": document.querySelector(".english"),
    "ru": document.querySelector(".russian"),
    "uk": document.querySelector(".ukrainian"),
    "es": document.querySelector(".spanish")
}

let HCharacters = document.querySelector(".characters");
let HCMessage = document.querySelector(".message-content");

const FBL = document.getElementById("FBL");
const IGL = document.getElementById("IGL");
const FBL2 = document.getElementById("FBL2");
const IGL2 = document.getElementById("IGL2");

let BackToTop = document.querySelector(".scroll-up");
let ShowAllServices = document.querySelector(".more-services");
let BTMain = document.querySelector(".home2");
let MMServices = document.querySelector(".main-more-services");
let ContactUs = document.querySelector(".contact-us-button");

let welcomePage = document.querySelector(".in");
let welcomeText = document.querySelector(".in-welcome");
let welcomeTransition = document.querySelector(".transition");

let cd = document.querySelector(".contact-info-data");

let contactButtons = {
    "mail": document.querySelector(".mail"),
    "phone": document.querySelector(".phone")
}

let contactDataList = {
    "mail": "mail@mail.com",
    "phone": "123-456-789"
}

let Scroll = {
    "home": document.querySelector(".home"),
    "services": document.querySelector(".services"),
    "about": document.querySelector(".about"),
    "contact": document.querySelector(".contact"),
}

let ScrollValue = {
    "home": document.querySelector(".main-page"),
    "services": document.querySelector(".services-page"),
    "about": document.querySelector(".about-page"),
    "contact": document.querySelector(".contact-page"),
}

let ServicesPriceList = {
    "HandWashing": {
        "Motorcycle": 120,
        "SmallCar": 180,
        "MediumCar": 220,
        "SUV": 260,
        "Van": 300,
        "SmallDeliveryTruck": 330,
        "BigDeliveryTruck": 400,
        "Bus": 500
    }
}

let ServicesVehiclesList = {
    "Motorcycle": "motorcycle",
    "SmallCar": "car",
    "MediumCar": "car",
    "SUV": "truck-suv",
    "Van": "van",
    "SmallDeliveryTruck": "truck",
    "BigDeliveryTruck": "truck",
    "Bus": "bus-side"
}

let ServicesVehiclesName = {
    "pl": {
        "motorcycle": "Motocykl",
        "scar": "Samochód osobowy (mały)",
        "mcar": "Samochód osobowy (średni)",
        "suv": "SUV",
        "van": "Van",
        "sdt": "Samochód dostawczy (mały)",
        "bdt": "Samochód dostawczy (duży)",
        "bus": "Bus"
    }
}

let ServicesClasses = {
    "Motorcycle": "motorcycle",
    "SmallCar": "scar",
    "MediumCar": "mcar",
    "SUV": "suv",
    "Van": "van",
    "SmallDeliveryTruck": "sdt",
    "BigDeliveryTruck": "bdt",
    "Bus": "bus"
}

let ServicePrice = document.querySelector(".service-price");

let bIsDetailsOpen = true; // jeśli false --- hoveredInfo -> display: none;

let hoveredInfo = document.querySelector(".hovered-info");
let hoveredInfoVehicle = document.querySelector(".hovered-info-vehicle");

let SDBack = document.querySelector(".service-details-back");

const SD = document.querySelector(".service-details");
const ASL = document.querySelector(".asl");

let ASLBack = document.querySelector(".back-to-main");

let Services = {
    "handWashing": document.querySelector(".ofa-service.hand-washing")
}

for (const key in Services) {
    Services[key].addEventListener("click", ()=>{
        SD.style.display = "block";

        setTimeout(() => {
            SD.style.opacity = "1";
            SD.style.transform = "translate(-50%, -50%) scale(1)";
        }, 0);
    })
}

function CreatePrices(icon, price, name) {
    const html = `<div class="vehicle ${name}">
                        <div class="vehicle-icon"><i class="fa-solid fa-${icon}"></i></div>

                        <div class="price">${price}zł</div>
                    </div>`;
    
    ServicePrice.insertAdjacentHTML("beforeend", html)
}

for (const key in ServicesVehiclesList) {
    CreatePrices(ServicesVehiclesList[key], ServicesPriceList["HandWashing"][key], ServicesClasses[key]);
}

if (HCMessage) {
    HCMessage.addEventListener("input", ()=>{
        let length = HCMessage.value.length;
        HCharacters.textContent = `${length}/1000`;
    })
}

if (FBL) {
    FBL.addEventListener("click", ()=>{
        window.open("https://www.facebook.com/dawid.pierog");
    })
}

if (IGL) {
    IGL.addEventListener("click", ()=>{
        window.open("https://www.instagram.com/cardetailing_d.pierog")
    })
}

if (FBL2) {
    FBL2.addEventListener("click", ()=>{
        window.open("https://www.facebook.com/dawid.pierog");
    })
}

if (IGL2) {
    IGL2.addEventListener("click", ()=>{
        window.open("https://www.instagram.com/cardetailing_d.pierog")
    })
}

for (let key in Scroll) {
    if (Scroll[key]) {
        Scroll[key].addEventListener("click", () => {
            ScrollValue[key].scrollIntoView({ behavior: "smooth" });
        });
    }
}

window.addEventListener("scroll", ()=>{
    if (window.scrollY >= 345) {
        BackToTop.style.right = '0';
    } else {
        BackToTop.style.right = '-3vw';
    }
})

if (BackToTop) {
    BackToTop.addEventListener("click", ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}

let int;

if (ShowAllServices) {
    ShowAllServices.addEventListener("click", ()=>{
        ASL.style.display = "block";

        setTimeout(() => {
            ASL.style.opacity = "1";
        }, 0);

        int = setInterval(() => {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        }, 10);
    })
}

if (MMServices) {
    MMServices.addEventListener("click", ()=>{
        ASL.style.display = "block";

        setTimeout(() => {
            ASL.style.opacity = "1";
        }, 0);

        int = setInterval(() => {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        }, 10);
    })
}

if (ContactUs) {
    ContactUs.addEventListener("click", ()=>{
        window.scrollTo({
            top: ScrollValue["contact"],
            behavior: "smooth"
        })
    })
}

async function setLanguage(lang) {
    const translations = await fetch(`/languages/${lang}.json`).then(res => res.json());

    document.querySelectorAll('[data-i18n]').forEach(el => {
        if (el.dataset.i18n !== 'mainTitle') {
            const key = el.dataset.i18n;
            if (translations[key]) el.textContent = translations[key];
        }
    });

    const mainDiv = document.querySelector('[data-i18n="mainTitle"]');
    if (mainDiv) {
        mainDiv.innerHTML = '';
        mainDiv.appendChild(document.createTextNode(translations.mainTitle));

        const spanHighlight = document.createElement('span');
        spanHighlight.className = 'highlight';
        spanHighlight.textContent = translations.mainTitleSpan;
        mainDiv.appendChild(spanHighlight);

        const spanEnd = document.createElement('span');
        spanEnd.className = 'end';
        spanEnd.textContent = translations.mainTitleEnd;
        mainDiv.appendChild(spanEnd);
    }

    if (translations.placeholders) {
        const { name, email, phone, message, submit } = translations.placeholders;

        const nameInput = document.querySelector('.name');
        if (nameInput) nameInput.placeholder = name || nameInput.placeholder;

        const emailInput = document.querySelector('.email');
        if (emailInput) emailInput.placeholder = email || emailInput.placeholder;

        const phoneInput = document.querySelector('.phone-number');
        if (phoneInput) phoneInput.placeholder = phone || phoneInput.placeholder;

        const messageTextarea = document.querySelector('.message-content');
        if (messageTextarea) messageTextarea.placeholder = message || messageTextarea.placeholder;

        const submitInput = document.querySelector('.send');
        if (submitInput) submitInput.value = submit || submitInput.value;
    }
}

setLanguage(currentLang)

for (const key in languages) {
    languages[key].addEventListener("click", ()=>{
        currentLang = key;
        localStorage.setItem("currentLang", currentLang);
        location.reload();
    })
}

let isTrue = true;

document.addEventListener("DOMContentLoaded", ()=>{
    welcomeText.style.opacity = "1";
    welcomeText.style.top = "20%";

    setTimeout(() => {
        welcomeTransition.style.width = "100vw";

        setTimeout(() => {
            welcomeTransition.style.height = "100vh";

            setTimeout(() => {
                isTrue = false;
                document.body.style.overflowY = "auto";
                document.documentElement.style.overflowY = "auto";
                welcomePage.style.transition = "none";

                setTimeout(() => {
                    welcomePage.style.display = "none";

                    mainPageShow()
                }, 1);
            }, 1000);
        }, 1000);
    }, 1500);
})

const scrollToTopInterval = setInterval(() => {
    if (isTrue) {
        window.scrollTo({ top: 0, behavior: "auto" })
    } else {
        clearInterval(scrollToTopInterval);
    }
}, 100);

function revealOnScroll() {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                const sequenceClasses = ['name', 'email', 'phone-number', 'message-content', 'send'];
                const sequenceClasses2 = ['mail', 'phone', 'pin'];
                const targetClassIndex = sequenceClasses.findIndex(cls => target.classList.contains(cls));
                const targetClassIndex2 = sequenceClasses2.findIndex(cls => target.classList.contains(cls));

                if (targetClassIndex !== -1) {
                    setTimeout(() => {
                        target.classList.remove('hidden');
                    }, 250 * targetClassIndex);
                } else if (targetClassIndex2 !== -1) {
                    setTimeout(() => {
                        setTimeout(() => {
                            target.classList.remove('hidden')
                        }, 250 * targetClassIndex2);
                    }, 1500);
                } else {
                    target.classList.remove('hidden');
                }

                observer.unobserve(target);
            }
        });
    }, {
        threshold: 0
    });

    hiddenElements.forEach(el => observer.observe(el));
}

window.addEventListener("DOMContentLoaded", revealOnScroll)

function mainPageShow() {
    let box = document.querySelector(".box");
    let mainTitle = document.querySelector(".main-title");
    let mainSubtitle = document.querySelector(".main-subtitle");
    let image1 = document.querySelector(".image-1");
    let image2 = document.querySelector(".image-2");
    let image3 = document.querySelector(".image-3");
    let mainButton1 = document.querySelector(".main-button-template.services");
    let mainButton2 = document.querySelector(".main-button-template.contact");
    let languages = document.querySelector(".languages");
    let menu = document.querySelector(".menu");

    setTimeout(() => {
        box.classList.remove("main-hidden");

        setTimeout(() => {
            mainTitle.classList.remove("main-hidden");

            setTimeout(() => {
                mainSubtitle.classList.remove("main-hidden");

                setTimeout(() => {
                    image1.classList.remove("main-hidden");
                    image2.classList.remove("main-hidden");
                    image3.classList.remove("main-hidden");

                    setTimeout(() => {
                        mainButton1.classList.remove("main-hidden");
                        mainButton2.classList.remove("main-hidden");

                        setTimeout(() => {
                            languages.classList.remove("main-hidden");
                            menu.classList.remove("main-hidden");
                        }, 800);
                    }, 800);
                }, 800);
            }, 800);
        }, 800);
    }, 100);
}

for (const key in contactButtons) {
    contactButtons[key].addEventListener("click", ()=>{
        if (cd.style.opacity === "0") {
            cd.textContent = contactDataList[key];
            setTimeout(() => {
                cd.style.opacity = "1"
            }, 0);
        } else {
            cd.style.opacity = "0"
            
            setTimeout(() => {
                cd.textContent = contactDataList[key];
                setTimeout(() => {
                    cd.style.opacity = "1"
                }, 10);
            }, 500);
        }
    })
}

const vehicles = document.querySelectorAll(".vehicle");

if (vehicles) {
    vehicles.forEach(vehicle => {
        vehicle.addEventListener("mouseover", ()=>{
            const classes = vehicle.classList;
            let vehicleClass = Array.from(classes).find(c => c !== "vehicle");

            hoveredInfoVehicle.textContent = ServicesVehiclesName[currentLang][vehicleClass]
            hoveredInfo.style.opacity = "1";
        });

        vehicle.addEventListener("mouseout", ()=>{
            hoveredInfo.style.opacity = "0";
        })
    })
}

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    hoveredInfo.style.left = `${x}px`;
    hoveredInfo.style.top = `${y-25}px`;
});

SDBack.addEventListener("click", ()=>{
    SD.style.opacity = "0";
    
    setTimeout(() => {
        SD.style.display = "none";
    }, 1000);
})

ASLBack.addEventListener("click", ()=>{
    ASL.style.opacity = '0';
    setTimeout(() => {
        ASL.style.display = "none";
    }, 1000);

    document.body.style.overflow = "auto";
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflow = "auto";
    document.documentElement.style.overflowY = "auto";
    document.documentElement.style.overflowX = "hidden";

    clearInterval(int);
})
