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

let BackToTop = document.querySelector(".scroll-up");
let ShowAllServices = document.querySelector(".more-services");
let BTMain = document.querySelector(".home2");
let MMServices = document.querySelector(".main-more-services");
let ContactUs = document.querySelector(".contact-us-button");

let welcomePage = document.querySelector(".in");
let welcomeText = document.querySelector(".in-welcome");
let welcomeTransition = document.querySelector(".transition")

let Scroll = {
    "home": document.querySelector(".home"),
    "services": document.querySelector(".services"),
    "about": document.querySelector(".about"),
    "contact": document.querySelector(".contact"),
}

let ScrollValue = {
    "home": 0,
    "services": 735,
    "about": 1470,
    "contact": 2205,
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

for (let key in Scroll) {
    if (Scroll[key]) {
        Scroll[key].addEventListener("click", ()=>{
            window.scrollTo({
                top: ScrollValue[key],
                behavior: "smooth"
            })
        })
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

if (ShowAllServices) {
    ShowAllServices.addEventListener("click", ()=>{
        window.location.href = "services.html";
    })
}

if (BTMain) {
    BTMain.addEventListener("click", ()=>{
        window.location.href = "index.html"
    })
}

if (MMServices) {
    MMServices.addEventListener("click", ()=>{
        window.location.href = "services.html"
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
