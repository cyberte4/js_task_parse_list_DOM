var r=Array.from(document.querySelectorAll("li[data-salary]"));r.sort(function(r,a){var e=parseInt(r.getAttribute("data-salary").replace(/[$,]/g,""));return parseInt(a.getAttribute("data-salary").replace(/[$,]/g,""))-e});var a=document.querySelector("ul");a.innerHTML="",r.forEach(function(r){a.appendChild(r)});
//# sourceMappingURL=index.f65397ee.js.map
