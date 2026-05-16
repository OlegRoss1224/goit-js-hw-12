import{a as P,S as $,i}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const B="49135563-3e7c108cd0494cefc8419da61",R="https://pixabay.com/api/";async function f(r,t=1){try{const{data:s}=await P.get(R,{params:{key:B,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});return s}catch(s){throw console.log("Error:",s.message),s}}const m=document.querySelector(".loader-container"),E=document.querySelector(".gallery"),h=document.querySelector(".load-btn"),H=new $(".gallery a",{captionsData:"alt",captionDelay:250});function g(r,t,a=!1){const s=r.map(({webformatURL:e,largeImageURL:o,tags:n,likes:S,views:q,comments:v,downloads:M})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img 
              class="gallery-image" 
              src="${e}" 
              alt="${n}" 
              title="${n}"             />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes:</b> ${S}</p>
            <p class="info-item"><b>Views:</b> ${q}</p>
            <p class="info-item"><b>Comments:</b> ${v}</p>
            <p class="info-item"><b>Downloads:</b> ${M}</p>
          </div>
        </li>
      `).join("");a?t.insertAdjacentHTML("beforeend",s):t.innerHTML=s,H.refresh()}function u(){E.innerHTML=""}function y(){m.classList.remove("hidden")}function p(){m.classList.add("hidden")}function b(){h.classList.remove("hidden")}function d(){h.classList.add("hidden")}const L=document.querySelector(".form");document.querySelector(".search-input");document.querySelector(".search-btn");const w=document.querySelector(".gallery"),O=document.querySelector(".load-btn");let l="",c=1;L.addEventListener("submit",x);O.addEventListener("click",T);async function x(r){if(r.preventDefault(),l=r.currentTarget.elements["search-text"].value.trim(),c=1,l===""){u(),d(),i.error({message:"Please enter a search query!",position:"topRight"});return}u(),d(),y();try{const t=await f(l,c);if(t.hits.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits,w,!1),t.totalHits>15?b():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(t){console.log(t),i.error({message:"Something went wrong. Please try again later."})}finally{p(),L.reset()}}async function T(){c++,d(),y();try{const r=await f(l,c);g(r.hits,w,!0);const t=Math.ceil(r.totalHits/15);c>=t?(d(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b();const a=document.querySelector(".gallery-item");if(a){const s=a.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}}catch(r){console.log(r),i.error({message:"Failed to load more images!",position:"topRight"})}finally{p()}}
//# sourceMappingURL=index.js.map
