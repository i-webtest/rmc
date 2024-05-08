(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const h=document.querySelector(".hamburger"),m=document.querySelector(".header__wrapper"),_=document.querySelector("html"),y=()=>{const r=()=>{h.classList.toggle("active"),m.classList.toggle("active"),_.classList.toggle("lock")},c=({target:o})=>{m.classList.contains("active")?o.closest(".header__wrapper")?o.closest(".header__wrapper")&&o.closest(".navigation__link")&&r():r():o.closest(".hamburger")&&r()};document.querySelectorAll(".navigation__link").forEach(o=>{o.addEventListener("click",s=>{s.preventDefault();const t=s.target.getAttribute("href").substring(1),a=document.getElementById(t).getBoundingClientRect().top-0;window.scrollBy({top:a,behavior:"smooth"})})}),document.addEventListener("click",c)},d=async r=>{try{const c=await fetch(r);if(!c.ok)throw new Error("Failed...");return await c.json()}catch(c){console.error(`Error fetching: ${c}`)}finally{console.log("Finally")}},L=()=>{const r=document.querySelectorAll(".table__link"),c=document.querySelectorAll(".check__picture");r.forEach(o=>{o.addEventListener("click",()=>{const s=o.getAttribute("data-tab"),t=document.querySelector(`#${s}`);o.classList.contains("active")||(r.forEach(e=>{e.classList.remove("active")}),c.forEach(e=>{e.classList.remove("active")}),o.classList.add("active"),t.classList.add("active"))})})},v=document.querySelector(".check__container-bottom"),b=async()=>{const r=await d("https://i-webtest-json-server-687a.twc1.net/arch"),c=document.querySelector(".table__body");c.textContent="";const o=r.map(e=>{const{id:n,title:i,price:a,rent:p,sq:f,bath:g,image:l}=e,u=document.createElement("tr");return u.innerHTML=`
      <td class="table__body-title">${i}</td>
      <td>${g}</td>
      <td>${f}</td>
      <td>${a}</td>
      <td>${p}</td>
      <td><button class="table__link" data-tab="${n}">VIEW NOW</button></td>
    `,v.insertAdjacentHTML("beforeend",`
      <picture class="check__picture" id="${n}">
        <source srcset="${l[0]}" type="image/avif" />
        <source srcset="${l[1]}" type="image/webp" />
        <img class="check__image active" src="${l[2]}" width="410" height="500" alt="${i}" />
      </picture>
    `),u});c.append(...o),document.querySelectorAll(".table__link").forEach(e=>{e.dataset.tab==="penthouse"&&e.classList.add("active")}),document.querySelectorAll(".check__picture").forEach(e=>{e.id==="penthouse"&&e.classList.add("active")}),L()},w=()=>{const r=document.querySelectorAll(".projects__link"),c=document.querySelectorAll(".projects__content-item"),o=(s,t)=>{t.forEach(e=>{const n=!e.classList.contains(s),i=s.toLowerCase()==="all";n&&!i?e.classList.add("hide"):e.classList.remove("hide")})};r.forEach(s=>{s.addEventListener("click",t=>{t.preventDefault();const e=s.getAttribute("data-filter");console.log("linkId: ",e),s.classList.contains("active")||(r.forEach(n=>{n.classList.remove("active")}),s.classList.add("active")),o(e,c)})})},E=async()=>{const r=await d("https://i-webtest-json-server-687a.twc1.net/project"),c=document.querySelector(".projects__content-list");c.textContent="";const o=r.map(s=>{const{id:t,image:e}=s,n=document.createElement("li");n.classList.add("projects__content-item",`${t}`);const i=document.createElement("picture");return i.classList.add("projects__content-picture"),i.innerHTML=`
      <source srcset="${e[0]}" type="image/avif" />
      <source srcset="${e[1]}" type="image/webp" />
      <img
        class="projects__content-img"
        src="${e[2]}"
        width="307"
        height="500"
        alt="${t}"
      />
    `,n.append(i),n});c.append(...o),w()},$=async()=>{const r=await d("https://i-webtest-json-server-687a.twc1.net/images"),c=document.querySelector(".images__list");c.textContent="";const o=r.map(s=>{const t=document.createElement("li");t.classList.add("images__item");const e=document.createElement("picture");return e.innerHTML=`
      <source srcset="${s.image[0]}" type="image/avif" />
      <source srcset="${s.image[1]}" type="image/webp" />
      <img class="images__image" src="${s.image[2]}" width="258" height="350" alt="image" />
    `,t.append(e),t});c.append(...o)};y();b();E();$();
