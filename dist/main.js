(()=>{"use strict";function e(e,t){const n=document.createElement("button");n.setAttribute("id",e);const c=document.createElement("span");return c.textContent=t,n.appendChild(c),n}function t(e,t,n){const c=document.createElement("div");c.classList.add("card");const d=document.createElement("img");d.setAttribute("src",e),d.classList.add("card-img");const a=document.createElement("p");a.classList.add("card-plate");const o=document.createElement("p");return o.classList.add("card-price"),c.appendChild(d),c.appendChild(a),c.appendChild(o),c}const n=function(){const e=document.querySelector("#main"),t=document.createElement("div");t.classList.add("home-container");const n=document.createElement("h2");n.classList.add("tab-title"),n.textContent="Restaurant Page",t.appendChild(n),e.appendChild(t)};(function(){const t=document.querySelector("#content"),n=function(e,t){const n=document.createElement("header");n.setAttribute("id","header");const c=document.createElement("h1");return c.textContent="La velette",n.appendChild(c),n}();t.appendChild(n);const c=function(t){const n=document.createElement("nav");n.setAttribute("id","nav");const c=e("home","home"),d=e("menu","menu"),a=e("contact","contact");return n.appendChild(c),n.appendChild(d),n.appendChild(a),n}();t.appendChild(c);const d=function(e){const t=document.createElement("main");return t.setAttribute("id","main"),t}();t.appendChild(d);const a=function(e,t){const n=document.createElement("footer");n.setAttribute("id","footer");const c=document.createElement("h3");return c.textContent="This page was created by LautiCas",n.appendChild(c),n}();t.appendChild(a)})(),n(),function(){const e=document.querySelector("#main"),c=document.querySelector("#home"),d=document.querySelector("#menu"),a=document.querySelector("#contact");c.addEventListener("click",(()=>{e.textContent="",n()})),d.addEventListener("click",(()=>{e.textContent="",function(){const e=document.querySelector("#main"),n=document.createElement("h2");n.classList.add("tab-title"),n.textContent="menu";const c=document.createElement("article");c.classList.add("menu-container"),c.appendChild(t("./img/noodles.jpg")),c.appendChild(t("./img/chocolate_cake.jpg")),c.appendChild(t("./img/hamburger.jpg")),e.appendChild(n),e.appendChild(c)}()})),a.addEventListener("click",(()=>{e.textContent="",function(){const e=document.querySelector("#main"),t=document.createElement("div");t.classList.add("contact");const n=document.createElement("h2");n.classList.add("tab-title"),n.textContent="CONTACT US";const c=document.createElement("div");c.classList.add("contact__info");const d=document.createElement("p");d.classList.add("contact__number"),contact.textContent="11-2222-3333";const a=document.createElement("div");a.classList.add("contact__location"),a.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.8603929157316!2d-86.7838179331737!3d36.156915853419264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466f34fcc53ef%3A0x1d224706488fe73e!2sAdele&#39;s%20Nashville!5e0!3m2!1ses-419!2sar!4v1704036096325!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',c.appendChild(d),c.appendChild(a),t.appendChild(c),e.appendChild(n),e.appendChild(t)}()}))}()})();