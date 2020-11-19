let images = [
    { url:"src/assets/images/bayern.jpg",
       amblem:"src/assets/icons/bayern-munchen.png",
       name:"Allianz Arena",
       club:"Bayern Munchen",
       country:"Germany",
       capacity:"75000"
    },
    { url:"src/assets/images/juventus.jpg",
       amblem:"src/assets/icons/juventus.png",
       name:"Allianz Stadium",
       club:"Juventus",
       country:"Italy",
       capacity:"41507"
    },
    { url:"src/assets/images/barcelona.jpg",
       amblem:"src/assets/icons/barcelona.png",
       name:"Camp Nou",
       club:"Barcelona",
       country:"Spain",
       capacity:"99354"
    },
    { url:"src/assets/images/arsenal.jpg",
       amblem:"src/assets/icons/arsenal.png",
       name:"Emirates Stadium",
       club:"Arsenal",
       country:"England",
       capacity:"60704"
    },
    { url:"src/assets/images/san-siro.jpg",
       amblem:"src/assets/icons/internazionale.png",
       name:"San Siro",
       club:"Internazionale",
       country:"Italy",
       capacity:"80000"
    },
    { url:"src/assets/images/manchester.jpg",
       amblem:"src/assets/icons/manchester-united.png",
       name:"Old Trafford",
       club:"Machester United",
       country:"England",
       capacity:"74897"
    },
    { url:"src/assets/images/flamengo.jpg",
       amblem:"src/assets/icons/flamengo.png",
       name:"Estadio do Maracanã",
       club:"Flamengo",
       country:"Brazil",
       capacity:"78838"
    },
    { url:"src/assets/images/atletico-mineiro.jpg",
       amblem:"src/assets/icons/atletico-mineiro.png",
       name:"Estadio Mineirão",
       club:"Atletico Mineiro",
       country:"Brazil",
       capacity:"64000"
    },
    { url:"src/assets/images/galatasaray.jpg",
       amblem:"src/assets/icons/galatasaray.png",
       name:"Türk Telekom Stadyumu",
       club:"Galatasaray",
       country:"Turkey",
       capacity:"52223"
    }
];


    function initSlider(images, options) {
        if (!images || !images.length) return;
        
        options = options || {
          dots: false,
          titles: false,
          autoplay: false,
          autoplayInterval: 3000
        }
        
        const sliderWrapper = document.querySelector(".slider");
        const sliderImages = sliderWrapper.querySelector(".slider__images");
        const sliderArrows = sliderWrapper.querySelector(".slider__arrows");
        
        initImages();
        initArrows();
        
        if (options.dots) {
          initDots();
        }
        
        if (options.titles) {
          initTitles();
        }
        
        if (options.autoplay) {
          initAutoplay();
        }
        
        function initImages() {
          images.forEach((image, index) => {
            let imageElement = document.createElement("div");
            imageElement.className = `image n${index} ${index? "" : "active"}`;
            imageElement.dataset.index = index;
            imageElement.style.backgroundImage = `url(${image.url})`;
            sliderImages.appendChild(imageElement);
          });
        }
        
        function initArrows() {
          let lastIndex = images.length - 1;
          sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
            arrow.addEventListener("click", function() {
              let curNumber = +sliderImages.querySelector(".active").dataset.index;
              let nextNumber;
              if (arrow.classList.contains("left")) {
                nextNumber = curNumber === 0? lastIndex : curNumber - 1;
              } else {
                nextNumber = curNumber === lastIndex? 0 : curNumber + 1;
              }
              moveSlider(nextNumber);
            });
          });
        }
        
        function moveSlider(num) {
          sliderImages.querySelector(".active").classList.remove("active");
          sliderImages.querySelector(`.n${num}`).classList.add("active");
          
          if (options.titles) {
            let title = sliderImages.querySelector(".info__container");
            if (images[num].name) {
              title.innerHTML = `
              <div class="info__wrapper">
              <div class="club-name">
                  <img src="${images[num].amblem}" alt="${images[num].club}">
                  <p class="club">${images[num].club}</p>
              </div>
                  <p class="name"><span>Stadium:</span> ${images[num].name}</p>
                  <p class="capacity"><span>Capacity:</span> ${images[num].capacity}</p>
              </div>`;
              title.style.display = "block";
            } else {
              title.style.display = "none";
            }
          }
          
          if (options.dots) {
            let dotsWrapper = document.querySelector(".slider__dots");
            dotsWrapper.querySelector(".active").classList.remove("active");
            dotsWrapper.querySelector(`.n${num}`).classList.add("active");
          }
        }
        
        function initDots() {
          let dotsWrapper = document.createElement("div");
          dotsWrapper.className = "slider__dots";
          images.forEach((image, index) => {
            let dot = document.createElement("div");
            dot.className = `slider__dots-item n${index} ${index? "" : "active"}`;
            dot.dataset.index = index;
            dot.addEventListener("click", function() {
              moveSlider(this.dataset.index);
            });
            dotsWrapper.appendChild(dot);
          });
          sliderWrapper.appendChild(dotsWrapper);
        }
        
        function initTitles() {
          let titleHTML = `<div class="info__container">
        <div class="info__wrapper">
        <div class="club-name">
            <img src="${images[0].amblem}" alt="">
            <p class="club">${images[0].club}</p>
        </div>
            <p class="name"><span>Stadium:</span> ${images[0].name}</p>
            <p class="capacity"><span>Capacity:</span> ${images[0].capacity}</p>
        </div>
        </div>`;

        sliderImages.innerHTML += titleHTML;
        }
        
        function initAutoplay() {
          setInterval(() => {
            let currentNumber = +sliderImages.querySelector(".active").dataset.index;
            let nextNumber = currentNumber === images.length - 1? 0 : currentNumber + 1;
            moveSlider(nextNumber);
          }, options.autoplayInterval);
        }
      }
      
      document.addEventListener("DOMContentLoaded", () => {
        let sliderOptions = {
          dots: false,
          titles: true,
          autoplay: false,
          autoplayInterval: 3000
        }
        initSlider(images, sliderOptions);
      });