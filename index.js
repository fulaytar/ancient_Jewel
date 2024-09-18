/* empty css                      */import{S as g}from"./assets/vendor-BiMJRTlQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();console.log("header");const c=document.getElementById("burger-button"),o=document.getElementById("burger-modal"),m=document.getElementById("close-button");c.addEventListener("click",()=>{o.classList.remove("hidden")});m.addEventListener("click",()=>{o.classList.add("hidden")});console.log("hero");console.log("about");const a=[{img:"../img/reviews/emma.png",img2x:"../img/reviews/emma@2x.png",name:"Emma W.",text:"Ancient Jewel is a great game for relaxing after a long day. The soundtrack is soothing.",stars:5},{img:"../img/reviews/lucas.png",img2x:"../img/reviews/lucas@2x.png",name:"Lucas T.",text:"The variety of levels keeps the game interesting. I’m always looking forward to the next one.",stars:5},{img:"../img/reviews/ava.png",img2x:"../img/reviews/ava@2x.png",name:"Ava R.",text:"The daily rewards are great. They help me progress through the game.",stars:5},{img:"../img/reviews/henry.png",img2x:"../img/reviews/henry@2x.png",name:"Henry F.",text:"I love competing with my friends for the highest score. The social features are great!",stars:5},{img:"../img/reviews/isabella.png",img2x:"../img/reviews/isabella@2x.png",name:"Isabella C.",text:"The special events are exciting. I always look forward to them!",stars:5},{img:"../img/reviews/ethan.png",img2x:"../img/reviews/ethan@2x.png",name:"Ethan G.",text:"Ancient Jewel is the best match-3 game I’ve played. The ancient theme is really fun!",stars:5},{img:"../img/reviews/mia.png",img2x:"../img/reviews/mia@2x.png",name:"Mia S.",text:"The levels are challenging but not impossible. Perfect for any skill level!",stars:5},{img:"../img/reviews/alexander.png",img2x:"../img/reviews/alexander@2x.png",name:"Alexander J.",text:"I can't get enough of Ancient Jewel. Every level is a new adventure!",stars:5}];console.log("reviews");console.log(a);const d=document.getElementById("reviews-list");a.forEach(i=>{const t=`
            <li class="review">
          <img class="reviews-img" src="${i.img}" alt="">
          <div>
            <p>${i.name} :</p>
            <p>${i.text}</p>
          </div>
          <ul class="stars-list">
            <li class="star">
              <svg class="star-icon">
                <use href="../img/icons_sprite.svg#star" ></use>
              </svg>
            </li>
            <li class="star">
              <svg class="star-icon">
                <use href="../img/icons_sprite.svg#star" ></use>
              </svg>
            </li>
            <li class="star">
              <svg class="star-icon">
                <use href="../img/icons_sprite.svg#star" ></use>
              </svg>
            </li>
            <li class="star">
              <svg class="star-icon">
                <use href="../img/icons_sprite.svg#star" ></use>
              </svg>
            </li>
            <li class="star">
              <svg class="star-icon">
                <use href="../img/icons_sprite.svg#star" ></use>
              </svg>
            </li>
          </ul>
        </li>
    `;d.innerHTML+=t});console.log("howtoplay");document.getElementById("current-slide-number").textContent=1;new g(".swiper",{effect:"coverflow",centeredSlides:!0,slidesPerView:1.38,spaceBetween:-100,initialSlide:0,keyboard:{enabled:!0},mousewheel:{enabled:!0},lazy:{loadPrevNext:!0},coverflowEffect:{rotate:0,stretch:100,depth:200,modifier:1,slideShadows:!1},navigation:{nextEl:".my-swiper-button-next",prevEl:".my-swiper-button-prev"},breakpoints:{1440:{slidesPerView:"auto",spaceBetween:-300,centeredSlides:!0},1400:{slidesPerView:1.38,spaceBetween:-100,centeredSlides:!0}},on:{init:function(){document.getElementById("current-slide-number").textContent=`0${this.realIndex+1}`},slideChange:function(){document.getElementById("current-slide-number").textContent=`0${this.realIndex+1}`}}});console.log("advantages");console.log("disclaimer");console.log("footer");
//# sourceMappingURL=index.js.map
