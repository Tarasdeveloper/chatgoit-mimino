(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();new Swiper(".swiper",{navigation:{nextEl:".about-rest-bth-right",prevEl:".about-rest-bth-left"},scrollbar:{el:".swiper-scrollbar"},breakpoints:{320:{slidesPerView:1},414:{slidesPerView:1.3,spaceBetween:20},1024:{slidesPerView:2,spaceBetween:40}}});(function(s){typeof s.matches!="function"&&(s.matches=s.msMatchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||function(n){for(var o=this,r=(o.document||o.ownerDocument).querySelectorAll(n),e=0;r[e]&&r[e]!==o;)++e;return Boolean(r[e])}),typeof s.closest!="function"&&(s.closest=function(n){for(var o=this;o&&o.nodeType===1;){if(o.matches(n))return o;o=o.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var s=document.querySelectorAll(".js-open-modal"),n=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");s.forEach(function(r){r.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("data-modal"),i=document.querySelector('.modal[data-modal="'+t+'"]');i.classList.add("active"),n.classList.add("active")})}),o.forEach(function(r){r.addEventListener("click",function(e){var t=this.closest(".modal");t.classList.remove("active"),n.classList.remove("active")})}),document.body.addEventListener("keyup",function(r){var e=r.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),n.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});new Swiper(".swiper",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1.3},414:{spaceBetween:20},1024:{slidesPerView:2,spaceBetween:40}}});
