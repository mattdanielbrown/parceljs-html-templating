"use strict";function main(){const e=document.getElementById("mobile-navigation-menu-control"),t=document.getElementById("navigation-menu");e.addEventListener("click",(function(){"true"===this.getAttribute("aria-expanded")?this.setAttribute("aria-expanded","false"):this.setAttribute("aria-expanded","true"),t.classList.toggle("is-active")}))}window.addEventListener("DOMContentLoaded",(e=>{console.log("DOM fully loaded and parsed"),main()}));
//# sourceMappingURL=index.029186af.js.map