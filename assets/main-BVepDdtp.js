import{S as f,i as y,a as g}from"./vendor-C4-ZuMk8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();let h=new f(".gallery a",{overlayOpacity:.9,captionsData:"alt",captionDelay:250});function v(s){const t=document.querySelector(".gallery");if(s.total!=0){let l=s.hits.map(a=>`<li class="gallery-item">
          <a class="gallery-link" href="${a.largeImageURL}">
            <img
              class="gallery-image"
              src="${a.webformatURL}"
              data-source="${a.largeImageURL}"
              alt="${a.tags}"
            />
          </a>          
          <ul class='gallery-stat-list'>
            <li class='gallery-stat-item'><p class='item-caption'>Likes</p><p class="item-value">${a.likes}</p></li>
            <li class='gallery-stat-item'><p class='item-caption'>Views</p><p class="item-value">${a.views}</p></li>
            <li class='gallery-stat-item'><p class='item-caption'>Comments</p><p class="item-value">${a.comments}</p></li>
            <li class='gallery-stat-item'><p class='item-caption'>Downloads</p><p class="item-value">${a.downloads}</p></li>
          </ul>          
        </li>`).join("");t.insertAdjacentHTML("beforeend",l),h.refresh()}}function n(s,t="red"){y.show({icon:"icon-person",message:s,color:t,position:"topRight",transitionIn:"bounceInDown",transitionOut:"flipOutX",closeOnClick:!0,displayMode:"replace",timeout:3e3})}const o=document.querySelector(".loader"),c=document.querySelector(".btn-more"),d=15;async function p(s,t){o.classList.add("is-active"),c.classList.remove("is-active"),await g.get("https://pixabay.com/api/?",{params:{key:"46676876-9d0aaf878b11d8c614d2fd644",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:t}}).then(l=>{if(l.data.totalHits>0){const a=Math.ceil(l.data.totalHits/d),e=l.data.totalHits-d*t;t>a?(c.classList.remove("is-active"),o.classList.remove("is-active"),n("We're sorry, but you've reached the end of search results.","green")):(v(l.data),o.classList.remove("is-active"),e>0?c.classList.add("is-active"):(c.classList.remove("is-active"),n("We're sorry, but you've reached the end of search results.","green")))}else o.classList.remove("is-active"),n("Sorry, there are no images matching your search query. Please try again!")}).catch(l=>console.log(l))}let m="",i=1;const L=document.querySelector(".btn-more");L.addEventListener("click",b);function b(){i++,p(m,i).then(()=>{const s=document.querySelector(".gallery");window.scrollBy(0,s.children[0].getBoundingClientRect().height*2)}).catch(s=>console.log(s))}const S=document.querySelector(".form");S.addEventListener("submit",w);function w(s){s.preventDefault();const t=s.target.elements.search.value.trim();if(t!==""){if(m===t)i++;else{const l=document.querySelector(".gallery");l.innerHTML="",i=1,m=t}p(t,i)}else n("🚫 Please fill in the search images field")}
//# sourceMappingURL=main-BVepDdtp.js.map
