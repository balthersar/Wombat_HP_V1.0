
var hamburger = document.querySelector(".hamburger");
var navLinks = document.querySelector(".nav-links");
var links = document.querySelectorAll(".nav-links li");
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
var size = carouselSlide.offsetWidth;

//Ahorn Konstanten
const carouselSlideAhorn = document.querySelector('#carousel-slide-ahorn');
const carouselImagesAhorn = document.querySelectorAll('#carousel-slide-ahorn img');
const prevBtnAhorn = document.querySelector('#prevBtnAhorn');
const nextBtnAhorn = document.querySelector('#nextBtnAhorn');

//Anemone Konstanten
const carouselSlideAnemone = document.querySelector('#carousel-slide-anemone');
const carouselImagesAnemone = document.querySelectorAll('#carousel-slide-anemone img');
const prevBtnAnemone = document.querySelector('#prevBtnAnemone');
const nextBtnAnemone = document.querySelector('#nextBtnAnemone');

//Azalee Konstanten
const carouselSlideAzalee = document.querySelector('#carousel-slide-azalee');
const carouselImagesAzalee = document.querySelectorAll('#carousel-slide-azalee img');
const prevBtnAzalee = document.querySelector('#prevBtnAzalee');
const nextBtnAzalee = document.querySelector('#nextBtnAzalee');

//Black Panther Konstanten
const carouselSlideBlackpanther = document.querySelector('#carousel-slide-blackpanther');
const carouselImagesBlackpanther = document.querySelectorAll('#carousel-slide-blackpanther img');
const prevBtnBlackpanther = document.querySelector('#prevBtnBlackpanther');
const nextBtnBlackpanther = document.querySelector('#nextBtnBlackpanther');

//Blätterwald Konstanten
const carouselSlideBlätterwald = document.querySelector('#carousel-slide-blätterwald');
const carouselImagesBlätterwald = document.querySelectorAll('#carousel-slide-blätterwald img');
const prevBtnBlätterwald = document.querySelector('#prevBtnBlätterwald');
const nextBtnBlätterwald = document.querySelector('#nextBtnBlätterwald');

//Eibe Konstanten
const carouselSlideEibe = document.querySelector('#carousel-slide-eibe');
const carouselImagesEibe = document.querySelectorAll('#carousel-slide-eibe img');
const prevBtnEibe = document.querySelector('#prevBtnEibe');
const nextBtnEibe = document.querySelector('#nextBtnEibe');

//Eisrose Konstanten
const carouselSlideEisrose = document.querySelector('#carousel-slide-eisrose');
const carouselImagesEisrose = document.querySelectorAll('#carousel-slide-eisrose img');
const prevBtnEisrose = document.querySelector('#prevBtnEisrose');
const nextBtnEisrose = document.querySelector('#nextBtnEisrose');

//Erle Konstanten
const carouselSlideErle = document.querySelector('#carousel-slide-erle');
const carouselImagesErle = document.querySelectorAll('#carousel-slide-erle img');
const prevBtnErle = document.querySelector('#prevBtnErle');
const nextBtnErle = document.querySelector('#nextBtnErle');

//Graue Maus Konstanten
const carouselSlideGrauemaus = document.querySelector('#carousel-slide-grauemaus');
const carouselImagesGrauemaus = document.querySelectorAll('#carousel-slide-grauemaus img');
const prevBtnGrauemaus = document.querySelector('#prevBtnGrauemaus');
const nextBtnGrauemaus = document.querySelector('#nextBtnGrauemaus');

//Holunderbeere Konstanten
const carouselSlideHolunderbeere = document.querySelector('#carousel-slide-holunderbeere');
const carouselImagesHolunderbeere = document.querySelectorAll('#carousel-slide-holunderbeere img');
const prevBtnHolunderbeere = document.querySelector('#prevBtnHolunderbeere');
const nextBtnHolunderbeere = document.querySelector('#nextBtnHolunderbeere');

//Kirschblüte Konstanten
const carouselSlideKirschblüte = document.querySelector('#carousel-slide-kirschblüte');
const carouselImagesKirschblüte = document.querySelectorAll('#carousel-slide-kirschblüte img');
const prevBtnKirschblüte = document.querySelector('#prevBtnKirschblüte');
const nextBtnKirschblüte = document.querySelector('#nextBtnKirschblüte');

//Linde Konstanten
const carouselSlideLinde = document.querySelector('#carousel-slide-linde');
const carouselImagesLinde = document.querySelectorAll('#carousel-slide-linde img');
const prevBtnLinde = document.querySelector('#prevBtnLinde');
const nextBtnLinde = document.querySelector('#nextBtnLinde');

//Mystic Lynx Konstanten
const carouselSlideMysticlynx = document.querySelector('#carousel-slide-mysticlynx');
const carouselImagesMysticlynx = document.querySelectorAll('#carousel-slide-mysticlynx img');
const prevBtnMysticlynx = document.querySelector('#prevBtnMysticlynx');
const nextBtnMysticlynx = document.querySelector('#nextBtnMysticlynx');

//Nordmanntanne Konstanten
const carouselSlideNordmanntanne = document.querySelector('#carousel-slide-nordmanntanne');
const carouselImagesNordmanntanne = document.querySelectorAll('#carousel-slide-nordmanntanne img');
const prevBtnNordmanntanne = document.querySelector('#prevBtnNordmanntanne');
const nextBtnNordmanntanne = document.querySelector('#nextBtnNordmanntanne');

//Orchidee Konstanten
const carouselSlideOrchidee = document.querySelector('#carousel-slide-orchidee');
const carouselImagesOrchidee = document.querySelectorAll('#carousel-slide-orchidee img');
const prevBtnOrchidee = document.querySelector('#prevBtnOrchidee');
const nextBtnOrchidee = document.querySelector('#nextBtnOrchidee');

//Robinie Konstanten
const carouselSlideRobinie = document.querySelector('#carousel-slide-robinie');
const carouselImagesRobinie = document.querySelectorAll('#carousel-slide-robinie img');
const prevBtnRobinie = document.querySelector('#prevBtnRobinie');
const nextBtnRobinie = document.querySelector('#nextBtnRobinie');

//Schneeglöckchen Konstanten
const carouselSlideSchneeglöckchen = document.querySelector('#carousel-slide-schneeglöckchen');
const carouselImagesSchneeglöckchen = document.querySelectorAll('#carousel-slide-schneeglöckchen img');
const prevBtnSchneeglöckchen = document.querySelector('#prevBtnSchneeglöckchen');
const nextBtnSchneeglöckchen = document.querySelector('#nextBtnSchneeglöckchen');

//Schwarzwald Konstanten
const carouselSlideSchwarzwald = document.querySelector('#carousel-slide-schwarzwald');
const carouselImagesSchwarzwald = document.querySelectorAll('#carousel-slide-schwarzwald img');
const prevBtnSchwarzwald = document.querySelector('#prevBtnSchwarzwald');
const nextBtnSchwarzwald = document.querySelector('#nextBtnSchwarzwald');

//Sonnenblume Konstanten
const carouselSlideSonnenblume = document.querySelector('#carousel-slide-sonnenblume');
const carouselImagesSonnenblume = document.querySelectorAll('#carousel-slide-sonnenblume img');
const prevBtnSonnenblume = document.querySelector('#prevBtnSonnenblume');
const nextBtnSonnenblume = document.querySelector('#nextBtnSonnenblume');

//Ulme Konstanten
const carouselSlideUlme = document.querySelector('#carousel-slide-ulme');
const carouselImagesUlme = document.querySelectorAll('#carousel-slide-ulme img');
const prevBtnUlme = document.querySelector('#prevBtnUlme');
const nextBtnUlme = document.querySelector('#nextBtnUlme');

//Wacholder Konstanten
const carouselSlideWacholder = document.querySelector('#carousel-slide-wacholder');
const carouselImagesWacholder = document.querySelectorAll('#carousel-slide-wacholder img');
const prevBtnWacholder = document.querySelector('#prevBtnWacholder');
const nextBtnWacholder = document.querySelector('#nextBtnWacholder');

//Weide Konstanten
const carouselSlideWeide = document.querySelector('#carousel-slide-weide');
const carouselImagesWeide = document.querySelectorAll('#carousel-slide-weide img');
const prevBtnWeide = document.querySelector('#prevBtnWeide');
const nextBtnWeide = document.querySelector('#nextBtnWeide');

//Wild Leo Konstanten
const carouselSlideWildleo = document.querySelector('#carousel-slide-wildleo');
const carouselImagesWildleo = document.querySelectorAll('#carousel-slide-wildleo img');
const prevBtnWildleo = document.querySelector('#prevBtnWildleo');
const nextBtnWildleo = document.querySelector('#nextBtnWildleo');



window.onload = function() {
    size = carouselSlide.clientWidth;
    hamburger.addEventListener("click", () => {
        // Toggle NAV
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });


        // hamburger Animation to/from crossed 3 lines
        hamburger.classList.toggle('toggle');

    });

    window.onresize = function(){
        size = carouselSlide.offsetWidth;
        //Resize Ahorn
        carouselSlideAhorn.style.transform ='translateX(' + (-size * counterAhorn) + 'px)';
        //Resize Anemone
        carouselSlideAnemone.style.transform ='translateX(' + (-size * counterAnemone) + 'px)';
        //Resize Azalee
        carouselSlideAzalee.style.transform ='translateX(' + (-size * counterAzalee) + 'px)';
        //Resize Black Panther
        carouselSlideBlackpanther.style.transform ='translateX(' + (-size * counterBlackpanther) + 'px)';
        //Resize Blätterwald
        carouselSlideBlätterwald.style.transform ='translateX(' + (-size * counterBlätterwald) + 'px)';
        //Resize Eibe
        carouselSlideEibe.style.transform ='translateX(' + (-size * counterEibe) + 'px)';
        //Resize Eisrose
        carouselSlideEisrose.style.transform ='translateX(' + (-size * counterEisrose) + 'px)';
        //Resize Erle
        carouselSlideErle.style.transform ='translateX(' + (-size * counterErle) + 'px)';
        //Resize graue Maus
        carouselSlideGrauemaus.style.transform ='translateX(' + (-size * counterGrauemaus) + 'px)';
        //Resize Holunderbeere
        carouselSlideHolunderbeere.style.transform ='translateX(' + (-size * counterHolunderbeere) + 'px)';
        //Resize Kirschblüte
        carouselSlideKirschblüte.style.transform ='translateX(' + (-size * counterKirschblüte) + 'px)';
        //Resize Linde
        carouselSlideLinde.style.transform ='translateX(' + (-size * counterLinde) + 'px)';
        //Resize mystic Lynx
        carouselSlideMysticlynx.style.transform ='translateX(' + (-size * counterMysticlynx) + 'px)';
        //Resize Nordmanntanne
        carouselSlideNordmanntanne.style.transform ='translateX(' + (-size * counterNordmanntanne) + 'px)';
        //Resize Orchidee
        carouselSlideOrchidee.style.transform ='translateX(' + (-size * counterOrchidee) + 'px)';
        //Resize Robinie
        carouselSlideRobinie.style.transform ='translateX(' + (-size * counterRobinie) + 'px)';
        //Resize Schneeglöckchen
        carouselSlideSchneeglöckchen.style.transform ='translateX(' + (-size * counterSchneeglöckchen) + 'px)';
        //Resize Schwarzwald
        carouselSlideSchwarzwald.style.transform ='translateX(' + (-size * counterSchwarzwald) + 'px)';
        //Resize Sonnenblume
        carouselSlideSonnenblume.style.transform ='translateX(' + (-size * counterSonnenblume) + 'px)';
        //Resize Ulme
        carouselSlideUlme.style.transform ='translateX(' + (-size * counterUlme) + 'px)';
        //Resize Wacholder
        carouselSlideWacholder.style.transform ='translateX(' + (-size * counterWacholder) + 'px)';
        //Resize Weide
        carouselSlideWeide.style.transform ='translateX(' + (-size * counterWeide) + 'px)';
        //Resize Wild Leo
        carouselSlideWildleo.style.transform ='translateX(' + (-size * counterWildleo) + 'px)';
    };
    
//Ahorn Galerie
    //counter
    
    let counterAhorn = 1;   
    //Galerie Ahorn
    carouselSlideAhorn.style.transform ='translateX(' + (-size * counterAhorn) + 'px)';
    nextBtnAhorn.addEventListener('click', ()=> {
        if (counterAhorn >=carouselImagesAhorn.length - 1) return;
        carouselSlideAhorn.style.transition = "transform 0.5s ease-in-out";
        counterAhorn ++;
        carouselSlideAhorn.style.transform ='translateX(' + (-size * counterAhorn) + 'px)';
    })
    prevBtnAhorn.addEventListener('click', ()=> {
        if (counterAhorn <= 0) return;
        carouselSlideAhorn.style.transition = "transform 0.5s ease-in-out";
        counterAhorn --;
        carouselSlideAhorn.style.transform ='translateX(' + (-size * counterAhorn) + 'px)';
    })
    carouselSlideAhorn.addEventListener('transitionend', () =>{
        if(carouselImagesAhorn[counterAhorn].id === 'lastCloneAhorn'){
            carouselSlideAhorn.style.transition = "none";
            counterAhorn = carouselImagesAhorn.length - 2;
            carouselSlideAhorn.style.transform ='translateX(' + (-size * counterAhorn) + 'px)';
        }
        if(carouselImagesAhorn[counterAhorn].id === 'firstCloneAhorn'){
            carouselSlideAhorn.style.transition = "none";
            counterAhorn = carouselImagesAhorn.length - counterAhorn;
            carouselSlideAhorn.style.transform ='translateX(' + (-size * counterAhorn) + 'px)';
        }
    })

//Anemone Galerie
    //counter
    
    let counterAnemone = 1;   
    //Galerie Anemone
    carouselSlideAnemone.style.transform ='translateX(' + (-size * counterAnemone) + 'px)';
    nextBtnAnemone.addEventListener('click', ()=> {
        if (counterAnemone >=carouselImagesAnemone.length - 1) return;
        carouselSlideAnemone.style.transition = "transform 0.5s ease-in-out";
        counterAnemone ++;
        carouselSlideAnemone.style.transform ='translateX(' + (-size * counterAnemone) + 'px)';
    })
    prevBtnAnemone.addEventListener('click', ()=> {
        if (counterAnemone <= 0) return;
        carouselSlideAnemone.style.transition = "transform 0.5s ease-in-out";
        counterAnemone --;
        carouselSlideAnemone.style.transform ='translateX(' + (-size * counterAnemone) + 'px)';
    })
    carouselSlideAnemone.addEventListener('transitionend', () =>{
        if(carouselImagesAnemone[counterAnemone].id === 'lastCloneAnemone'){
            carouselSlideAnemone.style.transition = "none";
            counterAnemone = carouselImagesAnemone.length - 2;
            carouselSlideAnemone.style.transform ='translateX(' + (-size * counterAnemone) + 'px)';
        }
        if(carouselImagesAnemone[counterAnemone].id === 'firstCloneAnemone'){
            carouselSlideAnemone.style.transition = "none";
            counterAnemone = carouselImagesAnemone.length - counterAnemone;
            carouselSlideAnemone.style.transform ='translateX(' + (-size * counterAnemone) + 'px)';
        }
    })

//Azalee Galerie
    //counter
    
    let counterAzalee = 1;   
    //Galerie Azalee
    carouselSlideAzalee.style.transform ='translateX(' + (-size * counterAzalee) + 'px)';
    nextBtnAzalee.addEventListener('click', ()=> {
        if (counterAzalee >=carouselImagesAzalee.length - 1) return;
        carouselSlideAzalee.style.transition = "transform 0.5s ease-in-out";
        counterAzalee ++;
        carouselSlideAzalee.style.transform ='translateX(' + (-size * counterAzalee) + 'px)';
    })
    prevBtnAzalee.addEventListener('click', ()=> {
        if (counterAzalee <= 0) return;
        carouselSlideAzalee.style.transition = "transform 0.5s ease-in-out";
        counterAzalee --;
        carouselSlideAzalee.style.transform ='translateX(' + (-size * counterAzalee) + 'px)';
    })
    carouselSlideAzalee.addEventListener('transitionend', () =>{
        if(carouselImagesAzalee[counterAzalee].id === 'lastCloneAzalee'){
            carouselSlideAzalee.style.transition = "none";
            counterAzalee = carouselImagesAzalee.length - 2;
            carouselSlideAzalee.style.transform ='translateX(' + (-size * counterAzalee) + 'px)';
        }
        if(carouselImagesAzalee[counterAzalee].id === 'firstCloneAzalee'){
            carouselSlideAzalee.style.transition = "none";
            counterAzalee = carouselImagesAnemone.length - counterAzalee;
            carouselSlideAzalee.style.transform ='translateX(' + (-size * counterAzalee) + 'px)';
        }
    })



//Blackpanther Galerie
    //counter
    let counterBlackpanther = 1;
    //Galerie Blackpanther
    carouselSlideBlackpanther.style.transform ='translateX(' + (-size * counterBlackpanther) + 'px)';
    nextBtnBlackpanther.addEventListener('click', ()=> {
        if (counterBlackpanther >= carouselImagesBlackpanther.length - 1) return;
        carouselSlideBlackpanther.style.transition = "transform 0.5s ease-in-out";
        counterBlackpanther ++;
        carouselSlideBlackpanther.style.transform ='translateX(' + (-size * counterBlackpanther) + 'px)';
    })
    prevBtnBlackpanther.addEventListener('click', ()=> {
        if (counterBlackpanther <= 0) return;
        carouselSlideBlackpanther.style.transition = "transform 0.5s ease-in-out";
        counterBlackpanther --;
        carouselSlideBlackpanther.style.transform ='translateX(' + (-size * counterBlackpanther) + 'px)';
    })
    carouselSlideBlackpanther.addEventListener('transitionend', () =>{
        if(carouselImagesBlackpanther[counterBlackpanther].id === 'lastCloneblackpanther'){
            carouselSlideBlackpanther.style.transition = "none";
            counterBlackpanther = carouselImagesBlackpanther.length - 2;
            carouselSlideBlackpanther.style.transform ='translateX(' + (-size * counterBlackpanther) + 'px)';
        }
        if(carouselImagesBlackpanther[counterBlackpanther].id === 'firstCloneblackpanther'){
            carouselSlideBlackpanther.style.transition = "none";
            counterBlackpanther = carouselImagesBlackpanther.length - counterBlackpanther;
            carouselSlideBlackpanther.style.transform ='translateX(' + (-size * counterBlackpanther) + 'px)';
        }
    })


//Blätterwald Galerie
    //counter
    let counterBlätterwald = 1;
    //Galerie Blätterwald
    carouselSlideBlätterwald.style.transform ='translateX(' + (-size * counterBlätterwald) + 'px)';
    nextBtnBlätterwald.addEventListener('click', ()=> {
        if (counterBlätterwald >= carouselImagesBlätterwald.length - 1) return;
        carouselSlideBlätterwald.style.transition = "transform 0.5s ease-in-out";
        counterBlätterwald ++;
        carouselSlideBlätterwald.style.transform ='translateX(' + (-size * counterBlätterwald) + 'px)';
    })
    prevBtnBlätterwald.addEventListener('click', ()=> {
        if (counterBlätterwald <= 0) return;
        carouselSlideBlätterwald.style.transition = "transform 0.5s ease-in-out";
        counterBlätterwald --;
        carouselSlideBlätterwald.style.transform ='translateX(' + (-size * counterBlätterwald) + 'px)';
    })
    carouselSlideBlätterwald.addEventListener('transitionend', () =>{
        if(carouselImagesBlätterwald[counterBlätterwald].id === 'lastCloneblätterwald'){
            carouselSlideBlätterwald.style.transition = "none";
            counterBlätterwald = carouselImagesBlätterwald.length - 2;
            carouselSlideBlätterwald.style.transform ='translateX(' + (-size * counterBlätterwald) + 'px)';
        }
        if(carouselImagesBlätterwald[counterBlätterwald].id === 'firstCloneblätterwald'){
            carouselSlideBlätterwald.style.transition = "none";
            counterBlätterwald = carouselImagesBlätterwald.length - counterBlätterwald;
            carouselSlideBlätterwald.style.transform ='translateX(' + (-size * counterBlätterwald) + 'px)';
        }
    })



//Eibe Galerie
    //counter
    let counterEibe = 1;
    //Galerie Eibe
    carouselSlideEibe.style.transform ='translateX(' + (-size * counterEibe) + 'px)';
    nextBtnEibe.addEventListener('click', ()=> {
        if (counterEibe >= carouselImagesEibe.length - 1) return;
        carouselSlideEibe.style.transition = "transform 0.5s ease-in-out";
        counterEibe ++;
        carouselSlideEibe.style.transform ='translateX(' + (-size * counterEibe) + 'px)';
    })
    prevBtnEibe.addEventListener('click', ()=> {
        if (counterEibe <= 0) return;
        carouselSlideEibe.style.transition = "transform 0.5s ease-in-out";
        counterEibe --;
        carouselSlideEibe.style.transform ='translateX(' + (-size * counterEibe) + 'px)';
    })
    carouselSlideEibe.addEventListener('transitionend', () =>{
        if(carouselImagesEibe[counterEibe].id === 'lastCloneeibe'){
            carouselSlideEibe.style.transition = "none";
            counterEibe = carouselImagesEibe.length - 2;
            carouselSlideEibe.style.transform ='translateX(' + (-size * counterEibe) + 'px)';
        }
        if(carouselImagesEibe[counterEibe].id === 'firstCloneeibe'){
            carouselSlideEibe.style.transition = "none";
            counterEibe = carouselImagesEibe.length - counterEibe;
            carouselSlideEibe.style.transform ='translateX(' + (-size * counterEibe) + 'px)';
        }
    }) // END Eibe Galerie

//Eisrose Galerie
    //counter
    let counterEisrose = 1;
    //Galerie Eisrose
    carouselSlideEisrose.style.transform ='translateX(' + (-size * counterEisrose) + 'px)';
    nextBtnEisrose.addEventListener('click', ()=> {
        if (counterEisrose >= carouselImagesEisrose.length - 1) return;
        carouselSlideEisrose.style.transition = "transform 0.5s ease-in-out";
        counterEisrose ++;
        carouselSlideEisrose.style.transform ='translateX(' + (-size * counterEisrose) + 'px)';
    })
    prevBtnEisrose.addEventListener('click', ()=> {
        if (counterEisrose <= 0) return;
        carouselSlideEisrose.style.transition = "transform 0.5s ease-in-out";
        counterEisrose --;
        carouselSlideEisrose.style.transform ='translateX(' + (-size * counterEisrose) + 'px)';
    })
    carouselSlideEisrose.addEventListener('transitionend', () =>{
        if(carouselImagesEisrose[counterEisrose].id === 'lastCloneEisrose'){
            carouselSlideEisrose.style.transition = "none";
            counterEisrose = carouselImagesEisrose.length - 2;
            carouselSlideEisrose.style.transform ='translateX(' + (-size * counterEisrose) + 'px)';
        }
        if(carouselImagesEisrose[counterEisrose].id === 'firstCloneEisrose'){
            carouselSlideEisrose.style.transition = "none";
            counterEisrose = carouselImagesEisrose.length - counterEisrose;
            carouselSlideEisrose.style.transform ='translateX(' + (-size * counterEisrose) + 'px)';
        }
    })


//Erle Galerie
    //counter
    let counterErle = 1;
    //Galerie Erle
    carouselSlideErle.style.transform ='translateX(' + (-size * counterErle) + 'px)';
    nextBtnErle.addEventListener('click', ()=> {
        if (counterErle >= carouselImagesErle.length - 1) return;
        carouselSlideErle.style.transition = "transform 0.5s ease-in-out";
        counterErle ++;
        carouselSlideErle.style.transform ='translateX(' + (-size * counterErle) + 'px)';
    })
    prevBtnErle.addEventListener('click', ()=> {
        if (counterErle <= 0) return;
        carouselSlideErle.style.transition = "transform 0.5s ease-in-out";
        counterErle --;
        carouselSlideErle.style.transform ='translateX(' + (-size * counterErle) + 'px)';
    })
    carouselSlideErle.addEventListener('transitionend', () =>{
        if(carouselImagesErle[counterErle].id === 'lastCloneErle'){
            carouselSlideErle.style.transition = "none";
            counterErle = carouselImagesErle.length - 2;
            carouselSlideErle.style.transform ='translateX(' + (-size * counterErle) + 'px)';
        }
        if(carouselImagesErle[counterErle].id === 'firstCloneErle'){
            carouselSlideErle.style.transition = "none";
            counterErle = carouselImagesErle.length - counterErle;
            carouselSlideErle.style.transform ='translateX(' + (-size * counterErle) + 'px)';
        }
    })

//Graue Maus Galerie
    //counter
    let counterGrauemaus = 1;
    //Galerie Grauemaus
    carouselSlideGrauemaus.style.transform ='translateX(' + (-size * counterGrauemaus) + 'px)';
    nextBtnGrauemaus.addEventListener('click', ()=> {
        if (counterGrauemaus >= carouselImagesGrauemaus.length - 1) return;
        carouselSlideGrauemaus.style.transition = "transform 0.5s ease-in-out";
        counterGrauemaus ++;
        carouselSlideGrauemaus.style.transform ='translateX(' + (-size * counterGrauemaus) + 'px)';
    })
    prevBtnGrauemaus.addEventListener('click', ()=> {
        if (counterGrauemaus <= 0) return;
        carouselSlideGrauemaus.style.transition = "transform 0.5s ease-in-out";
        counterGrauemaus --;
        carouselSlideGrauemaus.style.transform ='translateX(' + (-size * counterGrauemaus) + 'px)';
    })
    carouselSlideGrauemaus.addEventListener('transitionend', () =>{
        if(carouselImagesGrauemaus[counterGrauemaus].id === 'lastCloneGrauemaus'){
            carouselSlideGrauemaus.style.transition = "none";
            counterGrauemaus = carouselImagesGrauemaus.length - 2;
            carouselSlideGrauemaus.style.transform ='translateX(' + (-size * counterGrauemaus) + 'px)';
        }
        if(carouselImagesGrauemaus[counterGrauemaus].id === 'firstCloneGrauemaus'){
            carouselSlideGrauemaus.style.transition = "none";
            counterGrauemaus = carouselImagesGrauemaus.length - counterGrauemaus;
            carouselSlideGrauemaus.style.transform ='translateX(' + (-size * counterGrauemaus) + 'px)';
        }
    })

//Holunderbeere Galerie
    //counter
    let counterHolunderbeere = 1;
    //Galerie Holunderbeere
    carouselSlideHolunderbeere.style.transform ='translateX(' + (-size * counterHolunderbeere) + 'px)';
    nextBtnHolunderbeere.addEventListener('click', ()=> {
        if (counterHolunderbeere >= carouselImagesHolunderbeere.length - 1) return;
        carouselSlideHolunderbeere.style.transition = "transform 0.5s ease-in-out";
        counterHolunderbeere ++;
        carouselSlideHolunderbeere.style.transform ='translateX(' + (-size * counterHolunderbeere) + 'px)';
    })
    prevBtnHolunderbeere.addEventListener('click', ()=> {
        if (counterHolunderbeere <= 0) return;
        carouselSlideHolunderbeere.style.transition = "transform 0.5s ease-in-out";
        counterHolunderbeere --;
        carouselSlideHolunderbeere.style.transform ='translateX(' + (-size * counterHolunderbeere) + 'px)';
    })
    carouselSlideHolunderbeere.addEventListener('transitionend', () =>{
        if(carouselImagesHolunderbeere[counterHolunderbeere].id === 'lastCloneHolunderbeere'){
            carouselSlideHolunderbeere.style.transition = "none";
            counterHolunderbeere = carouselImagesHolunderbeere.length - 2;
            carouselSlideHolunderbeere.style.transform ='translateX(' + (-size * counterHolunderbeere) + 'px)';
        }
        if(carouselImagesHolunderbeere[counterHolunderbeere].id === 'firstCloneHolunderbeere'){
            carouselSlideHolunderbeere.style.transition = "none";
            counterHolunderbeere = carouselImagesHolunderbeere.length - counterHolunderbeere;
            carouselSlideHolunderbeere.style.transform ='translateX(' + (-size * counterHolunderbeere) + 'px)';
        }
    })

//Kirschblüte Galerie
    //counter
    let counterKirschblüte = 1;
    //Galerie Kirschblüte
    carouselSlideKirschblüte.style.transform ='translateX(' + (-size * counterKirschblüte) + 'px)';
    nextBtnKirschblüte.addEventListener('click', ()=> {
        if (counterKirschblüte >= carouselImagesKirschblüte.length - 1) return;
        carouselSlideKirschblüte.style.transition = "transform 0.5s ease-in-out";
        counterKirschblüte ++;
        carouselSlideKirschblüte.style.transform ='translateX(' + (-size * counterKirschblüte) + 'px)';
    })
    prevBtnKirschblüte.addEventListener('click', ()=> {
        if (counterKirschblüte <= 0) return;
        carouselSlideKirschblüte.style.transition = "transform 0.5s ease-in-out";
        counterKirschblüte --;
        carouselSlideKirschblüte.style.transform ='translateX(' + (-size * counterKirschblüte) + 'px)';
    })
    carouselSlideKirschblüte.addEventListener('transitionend', () =>{
        if(carouselImagesKirschblüte[counterKirschblüte].id === 'lastCloneKirschblüte'){
            carouselSlideKirschblüte.style.transition = "none";
            counterKirschblüte = carouselImagesKirschblüte.length - 2;
            carouselSlideKirschblüte.style.transform ='translateX(' + (-size * counterKirschblüte) + 'px)';
        }
        if(carouselImagesKirschblüte[counterKirschblüte].id === 'firstCloneKirschblüte'){
            carouselSlideKirschblüte.style.transition = "none";
            counterKirschblüte = carouselImagesKirschblüte.length - counterKirschblüte;
            carouselSlideKirschblüte.style.transform ='translateX(' + (-size * counterKirschblüte) + 'px)';
        }
    })

//Linde Galerie
    //counter
    let counterLinde = 1;
    //Galerie Linde
    carouselSlideLinde.style.transform ='translateX(' + (-size * counterLinde) + 'px)';
    nextBtnLinde.addEventListener('click', ()=> {
        if (counterLinde >= carouselImagesLinde.length - 1) return;
        carouselSlideLinde.style.transition = "transform 0.5s ease-in-out";
        counterLinde ++;
        carouselSlideLinde.style.transform ='translateX(' + (-size * counterLinde) + 'px)';
    })
    prevBtnLinde.addEventListener('click', ()=> {
        if (counterLinde <= 0) return;
        carouselSlideLinde.style.transition = "transform 0.5s ease-in-out";
        counterLinde --;
        carouselSlideLinde.style.transform ='translateX(' + (-size * counterLinde) + 'px)';
    })
    carouselSlideLinde.addEventListener('transitionend', () =>{
        if(carouselImagesLinde[counterLinde].id === 'lastCloneLinde'){
            carouselSlideLinde.style.transition = "none";
            counterLinde = carouselImagesLinde.length - 2;
            carouselSlideLinde.style.transform ='translateX(' + (-size * counterLinde) + 'px)';
        }
        if(carouselImagesLinde[counterLinde].id === 'firstCloneLinde'){
            carouselSlideLinde.style.transition = "none";
            counterLinde = carouselImagesLinde.length - counterLinde;
            carouselSlideLinde.style.transform ='translateX(' + (-size * counterLinde) + 'px)';
        }
    })

//Mystic Lynx Galerie
    //counter
    let counterMysticlynx = 1;
    //Galerie Mystic Lynx
    carouselSlideMysticlynx.style.transform ='translateX(' + (-size * counterMysticlynx) + 'px)';
    nextBtnMysticlynx.addEventListener('click', ()=> {
        if (counterMysticlynx >= carouselImagesMysticlynx.length - 1) return;
        carouselSlideMysticlynx.style.transition = "transform 0.5s ease-in-out";
        counterMysticlynx ++;
        carouselSlideMysticlynx.style.transform ='translateX(' + (-size * counterMysticlynx) + 'px)';
    })
    prevBtnMysticlynx.addEventListener('click', ()=> {
        if (counterMysticlynx <= 0) return;
        carouselSlideMysticlynx.style.transition = "transform 0.5s ease-in-out";
        counterMysticlynx --;
        carouselSlideMysticlynx.style.transform ='translateX(' + (-size * counterMysticlynx) + 'px)';
    })
    carouselSlideMysticlynx.addEventListener('transitionend', () =>{
        if(carouselImagesMysticlynx[counterMysticlynx].id === 'lastCloneMysticlynx'){
            carouselSlideMysticlynx.style.transition = "none";
            counterMysticlynx = carouselImagesMysticlynx.length - 2;
            carouselSlideMysticlynx.style.transform ='translateX(' + (-size * counterMysticlynx) + 'px)';
        }
        if(carouselImagesMysticlynx[counterMysticlynx].id === 'firstCloneMysticlynx'){
            carouselSlideMysticlynx.style.transition = "none";
            counterMysticlynx = carouselImagesMysticlynx.length - counterMysticlynx;
            carouselSlideMysticlynx.style.transform ='translateX(' + (-size * counterMysticlynx) + 'px)';
        }
    })

//Nordmanntanne Galerie
    //counter
    let counterNordmanntanne = 1;
    //Galerie Nordmanntanne
    carouselSlideNordmanntanne.style.transform ='translateX(' + (-size * counterNordmanntanne) + 'px)';
    nextBtnNordmanntanne.addEventListener('click', ()=> {
        if (counterNordmanntanne >= carouselImagesNordmanntanne.length - 1) return;
        carouselSlideNordmanntanne.style.transition = "transform 0.5s ease-in-out";
        counterNordmanntanne ++;
        carouselSlideNordmanntanne.style.transform ='translateX(' + (-size * counterNordmanntanne) + 'px)';
    })
    prevBtnNordmanntanne.addEventListener('click', ()=> {
        if (counterNordmanntanne <= 0) return;
        carouselSlideNordmanntanne.style.transition = "transform 0.5s ease-in-out";
        counterNordmanntanne --;
        carouselSlideNordmanntanne.style.transform ='translateX(' + (-size * counterNordmanntanne) + 'px)';
    })
    carouselSlideNordmanntanne.addEventListener('transitionend', () =>{
        if(carouselImagesNordmanntanne[counterNordmanntanne].id === 'lastCloneNordmanntanne'){
            carouselSlideNordmanntanne.style.transition = "none";
            counterNordmanntanne = carouselImagesNordmanntanne.length - 2;
            carouselSlideNordmanntanne.style.transform ='translateX(' + (-size * counterNordmanntanne) + 'px)';
        }
        if(carouselImagesNordmanntanne[counterNordmanntanne].id === 'firstCloneNordmanntanne'){
            carouselSlideNordmanntanne.style.transition = "none";
            counterNordmanntanne = carouselImagesNordmanntanne.length - counterNordmanntanne;
            carouselSlideNordmanntanne.style.transform ='translateX(' + (-size * counterNordmanntanne) + 'px)';
        }
    })

//Orchidee Galerie
    //counter
    let counterOrchidee = 1;
    //Galerie Orchidee
    carouselSlideOrchidee.style.transform ='translateX(' + (-size * counterOrchidee) + 'px)';
    nextBtnOrchidee.addEventListener('click', ()=> {
        if (counterOrchidee >= carouselImagesOrchidee.length - 1) return;
        carouselSlideOrchidee.style.transition = "transform 0.5s ease-in-out";
        counterOrchidee ++;
        carouselSlideOrchidee.style.transform ='translateX(' + (-size * counterOrchidee) + 'px)';
    })
    prevBtnOrchidee.addEventListener('click', ()=> {
        if (counterOrchidee <= 0) return;
        carouselSlideOrchidee.style.transition = "transform 0.5s ease-in-out";
        counterOrchidee --;
        carouselSlideOrchidee.style.transform ='translateX(' + (-size * counterOrchidee) + 'px)';
    })
    carouselSlideOrchidee.addEventListener('transitionend', () =>{
        if(carouselImagesOrchidee[counterOrchidee].id === 'lastCloneOrchidee'){
            carouselSlideOrchidee.style.transition = "none";
            counterOrchidee = carouselImagesOrchidee.length - 2;
            carouselSlideOrchidee.style.transform ='translateX(' + (-size * counterOrchidee) + 'px)';
        }
        if(carouselImagesOrchidee[counterOrchidee].id === 'firstCloneOrchidee'){
            carouselSlideOrchidee.style.transition = "none";
            counterOrchidee = carouselImagesOrchidee.length - counterOrchidee;
            carouselSlideOrchidee.style.transform ='translateX(' + (-size * counterOrchidee) + 'px)';
        }
    })

//Robinie Galerie
    //counter
    let counterRobinie = 1;
    //Galerie Robinie
    carouselSlideRobinie.style.transform ='translateX(' + (-size * counterRobinie) + 'px)';
    nextBtnRobinie.addEventListener('click', ()=> {
        if (counterRobinie >= carouselImagesRobinie.length - 1) return;
        carouselSlideRobinie.style.transition = "transform 0.5s ease-in-out";
        counterRobinie ++;
        carouselSlideRobinie.style.transform ='translateX(' + (-size * counterRobinie) + 'px)';
    })
    prevBtnRobinie.addEventListener('click', ()=> {
        if (counterRobinie <= 0) return;
        carouselSlideRobinie.style.transition = "transform 0.5s ease-in-out";
        counterRobinie --;
        carouselSlideRobinie.style.transform ='translateX(' + (-size * counterRobinie) + 'px)';
    })
    carouselSlideRobinie.addEventListener('transitionend', () =>{
        if(carouselImagesRobinie[counterRobinie].id === 'lastCloneRobinie'){
            carouselSlideRobinie.style.transition = "none";
            counterRobinie = carouselImagesRobinie.length - 2;
            carouselSlideRobinie.style.transform ='translateX(' + (-size * counterRobinie) + 'px)';
        }
        if(carouselImagesRobinie[counterRobinie].id === 'firstCloneRobinie'){
            carouselSlideRobinie.style.transition = "none";
            counterRobinie = carouselImagesRobinie.length - counterRobinie;
            carouselSlideRobinie.style.transform ='translateX(' + (-size * counterRobinie) + 'px)';
        }
    })

//Schneeglöckchen Galerie
    //counter
    let counterSchneeglöckchen = 1;
    //Galerie Schneeglöckchen
    carouselSlideSchneeglöckchen.style.transform ='translateX(' + (-size * counterSchneeglöckchen) + 'px)';
    nextBtnSchneeglöckchen.addEventListener('click', ()=> {
        if (counterSchneeglöckchen >= carouselImagesSchneeglöckchen.length - 1) return;
        carouselSlideSchneeglöckchen.style.transition = "transform 0.5s ease-in-out";
        counterSchneeglöckchen ++;
        carouselSlideSchneeglöckchen.style.transform ='translateX(' + (-size * counterSchneeglöckchen) + 'px)';
    })
    prevBtnSchneeglöckchen.addEventListener('click', ()=> {
        if (counterSchneeglöckchen <= 0) return;
        carouselSlideSchneeglöckchen.style.transition = "transform 0.5s ease-in-out";
        counterSchneeglöckchen --;
        carouselSlideSchneeglöckchen.style.transform ='translateX(' + (-size * counterSchneeglöckchen) + 'px)';
    })
    carouselSlideSchneeglöckchen.addEventListener('transitionend', () =>{
        if(carouselImagesSchneeglöckchen[counterSchneeglöckchen].id === 'lastCloneSchneeglöckchen'){
            carouselSlideSchneeglöckchen.style.transition = "none";
            counterSchneeglöckchen = carouselImagesSchneeglöckchen.length - 2;
            carouselSlideSchneeglöckchen.style.transform ='translateX(' + (-size * counterSchneeglöckchen) + 'px)';
        }
        if(carouselImagesSchneeglöckchen[counterSchneeglöckchen].id === 'firstCloneSchneeglöckchen'){
            carouselSlideSchneeglöckchen.style.transition = "none";
            counterSchneeglöckchen = carouselImagesSchneeglöckchen.length - counterSchneeglöckchen;
            carouselSlideSchneeglöckchen.style.transform ='translateX(' + (-size * counterSchneeglöckchen) + 'px)';
        }
    })

//Schwarwald Galerie
    //counter
    let counterSchwarzwald = 1;
    //Galerie Schwarzwald
    carouselSlideSchwarzwald.style.transform ='translateX(' + (-size * counterSchwarzwald) + 'px)';
    nextBtnSchwarzwald.addEventListener('click', ()=> {
        if (counterSchwarzwald >= carouselImagesSchwarzwald.length - 1) return;
        carouselSlideSchwarzwald.style.transition = "transform 0.5s ease-in-out";
        counterSchwarzwald ++;
        carouselSlideSchwarzwald.style.transform ='translateX(' + (-size * counterSchwarzwald) + 'px)';
    })
    prevBtnSchwarzwald.addEventListener('click', ()=> {
        if (counterSchwarzwald <= 0) return;
        carouselSlideSchwarzwald.style.transition = "transform 0.5s ease-in-out";
        counterSchwarzwald --;
        carouselSlideSchwarzwald.style.transform ='translateX(' + (-size * counterSchwarzwald) + 'px)';
    })
    carouselSlideSchwarzwald.addEventListener('transitionend', () =>{
        if(carouselImagesSchwarzwald[counterSchwarzwald].id === 'lastCloneSchwarzwald'){
            carouselSlideSchwarzwald.style.transition = "none";
            counterSchwarzwald = carouselImagesSchwarzwald.length - 2;
            carouselSlideSchwarzwald.style.transform ='translateX(' + (-size * counterSchwarzwald) + 'px)';
        }
        if(carouselImagesSchwarzwald[counterSchwarzwald].id === 'firstCloneSchwarzwald'){
            carouselSlideSchwarzwald.style.transition = "none";
            counterSchwarzwald = carouselImagesSchwarzwald.length - counterSchwarzwald;
            carouselSlideSchwarzwald.style.transform ='translateX(' + (-size * counterSchwarzwald) + 'px)';
        }
    })

//Sonnenblume Galerie
    //counter
    let counterSonnenblume = 1;
    //Galerie Sonnenblume
    carouselSlideSonnenblume.style.transform ='translateX(' + (-size * counterSonnenblume) + 'px)';
    nextBtnSonnenblume.addEventListener('click', ()=> {
        if (counterSonnenblume >= carouselImagesSonnenblume.length - 1) return;
        carouselSlideSonnenblume.style.transition = "transform 0.5s ease-in-out";
        counterSonnenblume ++;
        carouselSlideSonnenblume.style.transform ='translateX(' + (-size * counterSonnenblume) + 'px)';
    })
    prevBtnSonnenblume.addEventListener('click', ()=> {
        if (counterSonnenblume <= 0) return;
        carouselSlideSonnenblume.style.transition = "transform 0.5s ease-in-out";
        counterSonnenblume --;
        carouselSlideSonnenblume.style.transform ='translateX(' + (-size * counterSonnenblume) + 'px)';
    })
    carouselSlideSonnenblume.addEventListener('transitionend', () =>{
        if(carouselImagesSonnenblume[counterSonnenblume].id === 'lastCloneSonnenblume'){
            carouselSlideSonnenblume.style.transition = "none";
            counterSonnenblume = carouselImagesSonnenblume.length - 2;
            carouselSlideSonnenblume.style.transform ='translateX(' + (-size * counterSonnenblume) + 'px)';
        }
        if(carouselImagesSonnenblume[counterSonnenblume].id === 'firstCloneSonnenblume'){
            carouselSlideSonnenblume.style.transition = "none";
            counterSonnenblume = carouselImagesSonnenblume.length - counterSonnenblume;
            carouselSlideSonnenblume.style.transform ='translateX(' + (-size * counterSonnenblume) + 'px)';
        }
    })

//Ulme Galerie
    //counter
    let counterUlme = 1;
    //Galerie Ulme
    carouselSlideUlme.style.transform ='translateX(' + (-size * counterUlme) + 'px)';
    nextBtnUlme.addEventListener('click', ()=> {
        if (counterUlme >= carouselImagesUlme.length - 1) return;
        carouselSlideUlme.style.transition = "transform 0.5s ease-in-out";
        counterUlme ++;
        carouselSlideUlme.style.transform ='translateX(' + (-size * counterUlme) + 'px)';
    })
    prevBtnUlme.addEventListener('click', ()=> {
        if (counterUlme <= 0) return;
        carouselSlideUlme.style.transition = "transform 0.5s ease-in-out";
        counterUlme --;
        carouselSlideUlme.style.transform ='translateX(' + (-size * counterUlme) + 'px)';
    })
    carouselSlideUlme.addEventListener('transitionend', () =>{
        if(carouselImagesUlme[counterUlme].id === 'lastCloneUlme'){
            carouselSlideUlme.style.transition = "none";
            counterUlme = carouselImagesUlme.length - 2;
            carouselSlideUlme.style.transform ='translateX(' + (-size * counterUlme) + 'px)';
        }
        if(carouselImagesUlme[counterUlme].id === 'firstCloneUlme'){
            carouselSlideUlme.style.transition = "none";
            counterUlme = carouselImagesUlme.length - counterUlme;
            carouselSlideUlme.style.transform ='translateX(' + (-size * counterUlme) + 'px)';
        }
    })

//Wacholder Galerie
    //counter
    let counterWacholder = 1;
    //Galerie Wacholder
    carouselSlideWacholder.style.transform ='translateX(' + (-size * counterWacholder) + 'px)';
    nextBtnWacholder.addEventListener('click', ()=> {
        if (counterWacholder >= carouselImagesWacholder.length - 1) return;
        carouselSlideWacholder.style.transition = "transform 0.5s ease-in-out";
        counterWacholder ++;
        carouselSlideWacholder.style.transform ='translateX(' + (-size * counterWacholder) + 'px)';
    })
    prevBtnWacholder.addEventListener('click', ()=> {
        if (counterWacholder <= 0) return;
        carouselSlideWacholder.style.transition = "transform 0.5s ease-in-out";
        counterWacholder --;
        carouselSlideWacholder.style.transform ='translateX(' + (-size * counterWacholder) + 'px)';
    })
    carouselSlideWacholder.addEventListener('transitionend', () =>{
        if(carouselImagesWacholder[counterWacholder].id === 'lastCloneWacholder'){
            carouselSlideWacholder.style.transition = "none";
            counterWacholder = carouselImagesWacholder.length - 2;
            carouselSlideWacholder.style.transform ='translateX(' + (-size * counterWacholder) + 'px)';
        }
        if(carouselImagesWacholder[counterWacholder].id === 'firstCloneWacholder'){
            carouselSlideWacholder.style.transition = "none";
            counterWacholder = carouselImagesWacholder.length - counterWacholder;
            carouselSlideWacholder.style.transform ='translateX(' + (-size * counterWacholder) + 'px)';
        }
    })

//Weide Galerie
    //counter
    let counterWeide = 1;
    //Galerie Weide
    carouselSlideWeide.style.transform ='translateX(' + (-size * counterWeide) + 'px)';
    nextBtnWeide.addEventListener('click', ()=> {
        if (counterWeide >= carouselImagesWeide.length - 1) return;
        carouselSlideWeide.style.transition = "transform 0.5s ease-in-out";
        counterWeide ++;
        carouselSlideWeide.style.transform ='translateX(' + (-size * counterWeide) + 'px)';
    })
    prevBtnWeide.addEventListener('click', ()=> {
        if (counterWeide <= 0) return;
        carouselSlideWeide.style.transition = "transform 0.5s ease-in-out";
        counterWeide --;
        carouselSlideWeide.style.transform ='translateX(' + (-size * counterWeide) + 'px)';
    })
    carouselSlideWeide.addEventListener('transitionend', () =>{
        if(carouselImagesWeide[counterWeide].id === 'lastCloneWeide'){
            carouselSlideWeide.style.transition = "none";
            counterWeide = carouselImagesWeide.length - 2;
            carouselSlideWeide.style.transform ='translateX(' + (-size * counterWeide) + 'px)';
        }
        if(carouselImagesWeide[counterWeide].id === 'firstCloneWeide'){
            carouselSlideWeide.style.transition = "none";
            counterWeide = carouselImagesWeide.length - counterWeide;
            carouselSlideWeide.style.transform ='translateX(' + (-size * counterWeide) + 'px)';
        }
    })

//Wild leo Galerie
    //counter
    let counterWildleo = 1;
    //Galerie Wildleo
    carouselSlideWildleo.style.transform ='translateX(' + (-size * counterWildleo) + 'px)';
    nextBtnWildleo.addEventListener('click', ()=> {
        if (counterWildleo >= carouselImagesWildleo.length - 1) return;
        carouselSlideWildleo.style.transition = "transform 0.5s ease-in-out";
        counterWildleo ++;
        carouselSlideWildleo.style.transform ='translateX(' + (-size * counterWildleo) + 'px)';
    })
    prevBtnWildleo.addEventListener('click', ()=> {
        if (counterWildleo <= 0) return;
        carouselSlideWildleo.style.transition = "transform 0.5s ease-in-out";
        counterWildleo --;
        carouselSlideWildleo.style.transform ='translateX(' + (-size * counterWildleo) + 'px)';
    })
    carouselSlideWildleo.addEventListener('transitionend', () =>{
        if(carouselImagesWildleo[counterWildleo].id === 'lastCloneWildleo'){
            carouselSlideWildleo.style.transition = "none";
            counterWildleo = carouselImagesWildleo.length - 2;
            carouselSlideWildleo.style.transform ='translateX(' + (-size * counterWildleo) + 'px)';
        }
        if(carouselImagesWildleo[counterWildleo].id === 'firstCloneWildleo'){
            carouselSlideWildleo.style.transition = "none";
            counterWildleo = carouselImagesWildleo.length - counterWildleo;
            carouselSlideWildleo.style.transform ='translateX(' + (-size * counterWildleo) + 'px)';
        }
    })

} // END Windows onload
