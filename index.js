import{a as p,S as g,i as a}from"./assets/vendor-DFA_L3eI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h="49135563-3e7c108cd0494cefc8419da61",y="https://pixabay.com/api/";function b(n){return p.get(y,{params:{key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:t})=>t).catch(t=>{throw console.log("Error:",t.message),t})}const l=document.querySelector(".loader-container"),u=document.querySelector(".gallery"),L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function S(n){const t=n.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:s,comments:d,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img 
              class="gallery-image" 
              src="${o}" 
              alt="${e}" 
              title="${e}"             />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes:</b> ${r}</p>
            <p class="info-item"><b>Views:</b> ${s}</p>
            <p class="info-item"><b>Comments:</b> ${d}</p>
            <p class="info-item"><b>Downloads:</b> ${f}</p>
          </div>
        </li>
      `).join("");u.innerHTML=t,L.refresh()}function c(){u.innerHTML=""}function q(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}const m=document.querySelector(".form");document.querySelector(".search-input");document.querySelector(".search-btn");document.querySelector(".gallery");m.addEventListener("submit",P);function P(n){n.preventDefault();const t=n.currentTarget.elements["search-text"].value.trim();if(t===""){c(),a.error({message:"Please enter a search query!",position:"topRight"});return}c(),q(),b(t).then(o=>{if(o.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(o.hits)}).catch(o=>{console.log(o),a.error({message:"Something went wrong. Please try again later."})}).finally(()=>{w(),m.reset()})}
//# sourceMappingURL=index.js.map
