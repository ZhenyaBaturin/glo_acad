(()=>{"use strict";(function(e){let t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");function r(e){return e>=0&&e<10?`0${e}`:e}let l=setInterval((function(){let e=function(){let e=new Date("20 november 2020").getTime(),t=(new Date).getTime(),o=Math.max((e-t)/1e3,0),n=Math.floor(o%60),r=Math.floor(o/60%60);return{timeRemaining:o,hours:Math.floor(o/60/60),minutes:r,seconds:n}}();t.textContent=r(e.hours),o.textContent=r(e.minutes),n.textContent=r(e.seconds),e.timeRemaining<=0&&clearInterval(l)}),1e3)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector("body"),o=()=>{e.classList.toggle("active-menu")};t.addEventListener("click",(t=>{let n=t.target;if(n.classList.contains("close-btn"))o();else if(n.matches("menu")){if(n=n.closest("ul>li"),null===n)return;n.matches("li")&&o()}else{if(n=n.closest(".menu"),null===n)return void e.classList.remove("active-menu");n.matches(".menu")&&o()}}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-content");let n=-30;t.forEach((t=>{t.addEventListener("click",(()=>{if(document.documentElement.clientWidth<768)e.style.display="block";else{e.style.display="block",o.style.top="-30%";let t=setInterval((()=>{n++,n<11?o.style.top=`${n}%`:(clearInterval(t),n=-30)}),10)}}))})),e.addEventListener("click",(t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"),o||(e.style.display="none"))}))})(),(()=>{const e=document.querySelector("main>a");e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href");console.log(o),document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let n=e.target;n=n.closest(".service-header-tab"),n.classList.contains("service-header-tab")&&t.forEach(((e,r)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(r)}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-content"));let o=0,n=0;(()=>{const t=document.querySelector(".portfolio-dots");for(let n=0;n<e.length;n++){const e=document.createElement("li");e.classList.add("dot"),n===o&&e.classList.add("dot-active"),t.append(e)}})();const r=document.querySelectorAll(".dot"),l=(e,t,o)=>{e[t].classList.remove(o)},c=(e,t,o)=>{e[t].classList.add(o)},a=()=>{l(e,o,"portfolio-item-active"),l(r,o,"dot-active"),o++,o>=e.length&&(o=0),c(e,o,"portfolio-item-active"),c(r,o,"dot-active")},s=(e=3e3)=>{n=setInterval(a,e)};t.addEventListener("click",(t=>{t.preventDefault();let n=t.target;n.matches(".portfolio-btn, .dot")&&(l(e,o,"portfolio-item-active"),l(r,o,"dot-active"),n.matches("#arrow-right")?o++:n.matches("#arrow-left")?o--:n.matches(".dot")&&r.forEach(((e,t)=>{e===n&&(o=t)})),o>=e.length&&(o=0),o<0&&(o=e.length-1),c(e,o,"portfolio-item-active"),c(r,o,"dot-active"))})),t.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),t.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&s()})),s(1500)})(),document.querySelector("#command").querySelectorAll("img").forEach((e=>{let t=e.getAttribute("src");e.addEventListener("mousemove",(e=>{e.target.src=e.target.dataset.img})),e.addEventListener("mouseout",(e=>{e.target.src=t}))})),(()=>{const e=document.querySelector(".calc-block").querySelectorAll("input");for(let t=0;t<e.length;t++)e[t],addEventListener("input",(()=>{1===t?(e[t].setAttribute("maxlength","1"),e[t].value=e[t].value.replace(/\D/gi,"")):(e[t].setAttribute("maxlength","3"),e[t].value=e[t].value.replace(/\D/gi,""))}))})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),l=document.querySelector(".calc-count"),c=document.getElementById("total");let a=0;t.addEventListener("change",(t=>{const s=t.target;(s.matches(".calc-type")||s.matches(".calc-square")||s.matches(".calc-day")||s.matches(".calc-count"))&&(c.textContent=0,(()=>{let t=0,s=1,u=1;const i=o.options[o.selectedIndex].value,d=+n.value;if(l.value>1&&(s+=(l.value-1)/10),r.value<5&&r.value>0?u*=2:r.value<10&&r.value>0?u*=1.5:r.value>11&&(u*=1),i&&d){t=Math.round(e*i*d*s*u);let o=setInterval((()=>{a+=100,t<=a&&clearInterval(o),c.textContent=a}),.1)}})())}))})(100),(()=>{const e="Что то пошло не так",t="Загрузка...",o="Спасибо! Мы с вами скоро свзжимся",n=document.getElementById("form1"),r=n.querySelectorAll("input"),l=document.getElementById("form2"),c=l.querySelectorAll("input"),a=document.getElementById("form3"),s=a.querySelectorAll("input"),u=document.querySelectorAll(".form-phone"),i=document.querySelectorAll(".form-name"),d=document.querySelectorAll(".form-email"),m=l.querySelector(".top-form"),v=l.querySelector(".mess");d.forEach((e=>{e.setAttribute("required",!0)})),u.forEach((e=>{e.addEventListener("input",(()=>{e.setAttribute("maxlength","11"),e.setAttribute("minlength","7"),e.value=e.value.replace(/[^0-9+]/gi,"")}))})),i.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-я\s]/gi,"")}))})),d.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/ /g,"")}))})),m.addEventListener("input",(()=>{m.value=m.value.replace(/[^а-я\s]/gi,"")})),v.addEventListener("input",(()=>{v.value=v.value.replace(/[^а-я\s]/gi,"")}));const p=document.createElement("div");p.style.cssText="font-size: 2rem;",p.style.color="#fff";let h=()=>{setTimeout((()=>{p.remove()}),3e3)};n.addEventListener("submit",(l=>{l.preventDefault(),n.appendChild(p),p.textContent=t;const c=new FormData(n);let a={};for(let e of c.entries())a[e[0]]=e[1];f(a).then((e=>{if(200!==e.status)throw new Error("error");p.textContent=o,h()})).catch((t=>{p.textContent=e,h(),console.log(t)})),r.forEach((e=>{e.value=""}))})),l.addEventListener("submit",(n=>{n.preventDefault(),l.appendChild(p),p.textContent=t;const r=new FormData(l);let a={};for(let e of r.entries())a[e[0]]=e[1];f(a).then((e=>{if(200!==e.status)throw new Error("error");p.textContent=o,h()})).catch((t=>{p.textContent=e,h(),console.log(t)})),c.forEach((e=>{e.value=""}))})),a.addEventListener("submit",(n=>{n.preventDefault(),a.appendChild(p),p.textContent=t;const r=new FormData(a);let l={};for(let e of r.entries())l[e[0]]=e[1];f(l).then((e=>{if(200!==e.status)throw new Error("error");p.textContent=o,h()})).catch((t=>{p.textContent=e,h(),console.log(t)})),s.forEach((e=>{e.value=""}))}));const f=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})()})();