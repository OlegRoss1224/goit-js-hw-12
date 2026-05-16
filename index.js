import{a as P,S as $,i}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const B="49135563-3e7c108cd0494cefc8419da61",E="https://pixabay.com/api/";async function f(o,t=1){try{const{data:a}=await P.get(E,{params:{key:B,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});return a}catch(a){throw console.log("Error:",a.message),a}}const m=document.querySelector(".loader-container"),H=document.querySelector(".gallery"),g=document.querySelector(".load-btn"),O=new $(".gallery a",{captionsData:"alt",captionDelay:250});function h(o,t,n=!1){const a=o.map(({webformatURL:e,largeImageURL:r,tags:s,likes:S,views:q,comments:v,downloads:M})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img 
              class="gallery-image" 
              src="${e}" 
              alt="${s}" 
              title="${s}"             />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes:</b> ${S}</p>
            <p class="info-item"><b>Views:</b> ${q}</p>
            <p class="info-item"><b>Comments:</b> ${v}</p>
            <p class="info-item"><b>Downloads:</b> ${M}</p>
          </div>
        </li>
      `).join("");n?t.insertAdjacentHTML("beforeend",a):t.innerHTML=a,O.refresh()}function u(){H.innerHTML=""}function y(){m.classList.remove("hidden")}function p(){m.classList.add("hidden")}function b(){g.classList.remove("hidden")}function d(){g.classList.add("hidden")}const L=document.querySelector(".form");document.querySelector(".search-input");document.querySelector(".search-btn");const w=document.querySelector(".gallery"),R=document.querySelector(".load-btn");let l="",c=1;L.addEventListener("submit",x);R.addEventListener("click",T);async function x(o){if(o.preventDefault(),l=o.currentTarget.elements["search-text"].value.trim(),c=1,l===""){u(),d(),i.error({message:"Please enter a search query!",position:"topRight"});return}u(),d(),y();try{const t=await f(l,c);if(t.hits.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits,w,!1),t.totalHits>15&&b()}catch(t){console.log(t),i.error({message:"Something went wrong. Please try again later."})}finally{p(),L.reset()}}async function T(){c++,d(),y();try{const o=await f(l,c);h(o.hits,w,!0);const t=Math.ceil(o.totalHits/15);c>=t?(d(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b();const n=document.querySelector(".gallery-item");if(n){const a=n.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}}catch(o){console.log(o),i.error({message:"Failed to load more images!",position:"topRight"})}finally{p()}}
//# sourceMappingURL=index.js.map
